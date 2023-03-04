package ci;

import haxe.Template;
import sys.io.File;
import haxe.io.Path;
import sys.FileSystem;

using StringTools;

class Build {
	static var templates_path_segments = ["ci", "pages", "templates"];

	public static function main() {
		var projects:Array<Project> = [];
		Files.recurse_projects("./", projects);

		var is_building = true;
		var is_templating = true;

		for (project in projects) {
			trace(project.directory + ':' + project.path);
		}

		var sample_models:Array<SampleSnippetModel> = [];

		var exclude_list:Array<String> = [
		];

		for (i => project in projects) {
			var is_excluded = false;

			for(exclusion in exclude_list){
				if(project.directory.contains(exclusion)){
					is_excluded = true;
				}
			}

			if(is_excluded){
				continue;
			}

			var depth = project.directory.split("/").length - 1;
			var app_path_segments = [for (i in 0...depth) "../"];
			app_path_segments.push("pages");
			app_path_segments.push(project.directory);

			var details:SampleDetails = {
				APP_MAIN: 'Main',
				APP_PATH: Path.join(app_path_segments),
				WORKING_PATH: project.directory,
				DEPTH: depth,
				PROJECT_PATH: project.path
			}

			if (is_building) {
				build_sample(details);
			}

			if(is_templating){
				generate_sample_html(details, sample_models);
			}
		}

		generate_index_html(sample_models);

		Files.recursive_copy("ci/pages/third_party/highlightjs", "ci/pages/third_party", "pages/_scripts/");
	}


	static function build_sample(data:SampleDetails):Void {
		trace('start build: ${data.WORKING_PATH} ${Date.now()}');
		trace('working path ' + data.WORKING_PATH);
		var main_path = Path.join([data.WORKING_PATH, "project.xml"]);
		trace('main_path $main_path');
		Sys.command('lime', [
			'build',
			data.PROJECT_PATH,
			'html5',
			'--app-main="${data.APP_MAIN}"',
			'--app-path="${data.APP_PATH}"',
			'-debug',
			'-D no-deprecation-warnings',
		]);

		trace('end ${Date.now()}\n---');
	}

	static function generate_sample_html(data:SampleDetails, samples:Array<SampleSnippetModel>):Void {
		
		var sample_bin_index_path = Path.join(["html5", "bin", "index.html"]);
		var sample_main_path = Path.join([data.WORKING_PATH, "src", data.APP_MAIN + ".hx"]);
		
		var model:SampleSnippetModel = {
			SAMPLE_INDEX_PATH: sample_bin_index_path,
			SAMPLE_NAME: data.WORKING_PATH,
			SAMPLE_DESCRIPTION: "",
			SAMPLE_CODE: File.getContent(sample_main_path)
		}

		samples.push(model);
		var snippet_content = to_snippet_content(model);
		
		var relatives = [for (i in 0...data.DEPTH) "../"];

		var page_content = to_HTML_page({
			TITLE: data.APP_PATH,
			BODY_INNER: snippet_content,
			IS_SAMPLE: true,
			RELATIVES: Path.join(relatives)
		});
		
		var index_path = Path.join(["pages", data.WORKING_PATH, "index.html"]);
		File.saveContent(index_path, page_content);
	}


	static function generate_index_html(sample_models:Array<SampleSnippetModel>) {
		var index_template_path = Path.join(templates_path_segments.concat(["index_snippet.html"]));
		var snippet_template = File.getContent(index_template_path);
		var template = new Template(snippet_template);
		var snippets_content = template.execute({
			SAMPLES: sample_models
		});

		var page_content = to_HTML_page({
			TITLE: "Peote View Samples",
			BODY_INNER: snippets_content,
			IS_SAMPLE: false,
			RELATIVES: ""
		});

		var index_path = Path.join(["pages", "index.html"]);
		File.saveContent(index_path, page_content);

	}


	static function to_snippet_content(data:SampleSnippetModel):String {
		var index_template_path = Path.join(templates_path_segments.concat(["sample_snippet.html"]));
		var html_template = File.getContent(index_template_path);
		var template = new Template(html_template);
		return template.execute(data);
	}

	static function to_HTML_page(data:PageModel):String {
		var index_template_path = Path.join(templates_path_segments.concat(["html_document.html"]));
		var html_template = File.getContent(index_template_path);
		var template = new Template(html_template);
		return template.execute(data);
	}
}

class Files{

	public static function recurse_projects(directory:String, projects:Array<Project>) {
		if (sys.FileSystem.exists(directory)) {
			for (file in sys.FileSystem.readDirectory(directory)) {
				var path = haxe.io.Path.join([directory, file]);
				if (!sys.FileSystem.isDirectory(path)) {
					if (file == "project.xml") {
						projects.push({
							directory: directory,
							path: path
						});
					}
				} else {
					var directory = haxe.io.Path.addTrailingSlash(path);
					recurse_projects(directory, projects);
				}
			}
		} else {
			trace('"$directory" does not exists');
		}
	}

	public static function recursive_copy(directory:String, source_root:String, destination_root:String):Void {
		if (FileSystem.exists(directory)) {
			for (file in FileSystem.readDirectory(directory)) {
				var path = Path.join([directory, file]);
				if (!FileSystem.isDirectory(path)) {
					var destination_directory = directory.replace(source_root, destination_root);
					if (!FileSystem.exists(destination_directory)) {
						FileSystem.createDirectory(destination_directory);
					}
					var destination_path = Path.join([destination_directory, file]);
					trace('create $destination_path');
					File.copy(path, destination_path);
				} else {
					var directory = Path.addTrailingSlash(path);
					recursive_copy(directory, source_root, destination_root);
				}
			}
		} else {
			trace('"$directory" does not exists');
		}
	}
}

@:structInit
class Project {
	public var directory:String;
	public var path:String;
}

typedef SampleDetails = {
	var APP_MAIN:String;
	var APP_PATH:String;
	var PROJECT_PATH:String;
	var WORKING_PATH:String;
	var DEPTH:Int;
}

typedef SampleSnippetModel = {
	var SAMPLE_INDEX_PATH:String;
	var SAMPLE_NAME:String;
	var SAMPLE_DESCRIPTION:String;
	var SAMPLE_CODE:String;
}

typedef PageModel = {
	var TITLE:String;
	var BODY_INNER:String;
	var IS_SAMPLE:Bool;
	var RELATIVES:String;
}

