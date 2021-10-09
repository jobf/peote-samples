package;

import lime.graphics.Image;
import utils.Loader;
import Scripts.GLSL_Beginner_Tutorials;
import haxe.CallStack;

import lime.app.Application;
import lime.ui.Window;

import peote.view.PeoteView;
import peote.view.Display;


class Main extends Application
{	var display:Display;
	var loadedToy:ShaderToy;
	var images:Array<Image>;
	var currentTutorialIndex = 0;

	override function onWindowCreate():Void
	{
		switch (window.context.type)
		{
			case WEBGL, OPENGL, OPENGLES:
				try init(window)
				catch (_) trace(CallStack.toString(CallStack.exceptionStack()), _);
			default: throw("Sorry, only works with OpenGL.");
		}
	}
	
	public function init(window:Window)
	{
		var peoteView = new PeoteView(window);
		display = new Display(0, 0, window.width, window.height);
		peoteView.addDisplay(display);
		peoteView.start();
		
		// uncomment to load final tutorial by default
		currentTutorialIndex = GLSL_Beginner_Tutorials.ALL.length - 1;
		
		// or a specific tutorial
		// currentTutorialIndex = 25;

		// preload images and start
		var texturePaths = [
			"assets/images/texture0.png",
			"assets/images/texture1.jpg",
			"assets/images/texture2.jpg",
		];

		Loader.imageArray(texturePaths, (images:Array<Image>)->{
			this.images = images;
			loadByIndex();
		});
	}
	
	function load(mainImageFunction:String = ""){
		ShaderToy.init(display, images, mainImageFunction);
		loadedToy = new ShaderToy(0, 0, window.width, window.height);
	}

	function loadByIndex(){
		if (currentTutorialIndex < 0){
			currentTutorialIndex = 0;
		}
		else if(currentTutorialIndex > GLSL_Beginner_Tutorials.ALL.length - 1){
			currentTutorialIndex = GLSL_Beginner_Tutorials.ALL.length - 1;
		}
		trace('loading tutorial $currentTutorialIndex');
		load(GLSL_Beginner_Tutorials.ALL[currentTutorialIndex]);
	}
	
	// ------------------------------------------------------------
	// ----------------- LIME EVENTS ------------------------------
	// ------------------------------------------------------------	

	override function onPreloadComplete():Void {
		// access embeded assets from here
	}

	override function update(deltaTime:Int):Void {
		// for game-logic update
	}

	// override function render(context:lime.graphics.RenderContext):Void {}
	// override function onRenderContextLost ():Void trace(" --- WARNING: LOST RENDERCONTEXT --- ");		
	// override function onRenderContextRestored (context:lime.graphics.RenderContext):Void trace(" --- onRenderContextRestored --- ");		

	// ----------------- MOUSE EVENTS ------------------------------
	override function onMouseMove (x:Float, y:Float):Void {
		if(loadedToy == null) { return; }
		loadedToy.onMouseMove(x, y);
	}	
	// override function onMouseDown (x:Float, y:Float, button:lime.ui.MouseButton):Void {}	
	// override function onMouseUp (x:Float, y:Float, button:lime.ui.MouseButton):Void {}	
	// override function onMouseWheel (deltaX:Float, deltaY:Float, deltaMode:lime.ui.MouseWheelMode):Void {}
	// override function onMouseMoveRelative (x:Float, y:Float):Void {}

	// ----------------- TOUCH EVENTS ------------------------------
	// override function onTouchStart (touch:lime.ui.Touch):Void {}
	// override function onTouchMove (touch:lime.ui.Touch):Void	{}
	// override function onTouchEnd (touch:lime.ui.Touch):Void {}
	
	// ----------------- KEYBOARD EVENTS ---------------------------
	override function onKeyDown (keyCode:lime.ui.KeyCode, modifier:lime.ui.KeyModifier):Void {
		#if !html5
			if(keyCode == ESCAPE){
				this.window.close();
			}
		#end

		switch(keyCode){
			case LEFT: currentTutorialIndex--;
			case RIGHT: currentTutorialIndex++;
			default: currentTutorialIndex += 0;
		}

		loadByIndex();
	}	
	// override function onKeyUp (keyCode:lime.ui.KeyCode, modifier:lime.ui.KeyModifier):Void {}

	// -------------- other WINDOWS EVENTS ----------------------------
	// override function onWindowResize (width:Int, height:Int):Void { trace("onWindowResize", width, height); }
	// override function onWindowLeave():Void { trace("onWindowLeave"); }
	// override function onWindowActivate():Void { trace("onWindowActivate"); }
	// override function onWindowClose():Void { trace("onWindowClose"); }
	// override function onWindowDeactivate():Void { trace("onWindowDeactivate"); }
	// override function onWindowDropFile(file:String):Void { trace("onWindowDropFile"); }
	// override function onWindowEnter():Void { trace("onWindowEnter"); }
	// override function onWindowExpose():Void { trace("onWindowExpose"); }
	// override function onWindowFocusIn():Void { trace("onWindowFocusIn"); }
	// override function onWindowFocusOut():Void { trace("onWindowFocusOut"); }
	// override function onWindowFullscreen():Void { trace("onWindowFullscreen"); }
	// override function onWindowMove(x:Float, y:Float):Void { trace("onWindowMove"); }
	// override function onWindowMinimize():Void { trace("onWindowMinimize"); }
	// override function onWindowRestore():Void { trace("onWindowRestore"); }
}
