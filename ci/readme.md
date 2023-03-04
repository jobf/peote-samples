# Tooling for github actions

This folder does not contain peote sample code, instead it contains tooling for compiling the samples and deploying to github pages.

## haxe scripting

Build.hx is run from the root of the repository as follows

```
haxe --run ci.Build
```

Folders in the repo are checked for a `project.xml`. Each project is then compiled for the html5 target.

An html page is generated for each project which will display the project running with it's code below.

An html page is generated which links to all the projects that were compiled.

## github action

github actions are set up to built the projects and then push all to github pages.