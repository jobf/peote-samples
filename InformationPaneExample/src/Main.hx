package;

import peote.view.Program;
import peote.view.Buffer;
import peote.layout.ContainerType;
import peote.text.FontProgram;
import peote.text.Font;
import lime.ui.KeyCode;
import layoutable.LayoutableDisplay;
import peote.layout.LayoutContainer;
import lime.graphics.Image;
import haxe.CallStack;
import lime.app.Application;
import lime.ui.Window;
import utils.Loader;
import peote.view.PeoteView;

class Main extends Application {
	var peoteView:PeoteView;
	var display:LayoutableDisplay;
	var fontProgram:FontProgram<TextStyle>;

	override function onWindowCreate():Void {
		switch (window.context.type) {
			case WEBGL, OPENGL, OPENGLES:
				try
					startSample(window)
				catch (_)
					trace(CallStack.toString(CallStack.exceptionStack()), _);
			default:
				throw("Sorry, only works with OpenGL.");
		}
	}

	// ------------------------------------------------------------
	// --------------- SAMPLE STARTS HERE -------------------------
	// ------------------------------------------------------------
	var rootContainer:LayoutContainer;
	var imageElement:ImageElement;
	var footer:TextElement;

	public function startSample(window:Window) {
		peoteView = new PeoteView(window);
		display = new LayoutableDisplay(peoteView, 10, 10, window.width - 20, window.height - 20);

		var assetPath = "assets/test0.png";
		var font = new Font<TextStyle>('assets/fonts/hack_packed/config.json', null);
		
		var imageBuffer = new Buffer<ImageElement>(1);
		var imageProgram = new Program(imageBuffer);
		imageElement = new ImageElement(imageBuffer, imageProgram, 0, 0, 400, 300, -15);
		display.addProgram(imageProgram);
		
		Loader.image(assetPath, (image:Image) -> {
			imageElement.setImage(image);
			font.load((_) -> {
				var textBuffer = new Buffer<TextElement>(1);
				fontProgram = font.createFontProgram(new TextStyle());
				footer = new TextElement(textBuffer, fontProgram, 0, 0, 400, 32, 0);
				display.addProgram(fontProgram);
				footer.setText(assetPath);
				layout();
				init();
			});
		});
	}

	function init() {
		rootContainer.init();
		rootContainer.update(peoteView.width, peoteView.height);
		peoteView.start();
	}

	function layout() {
		rootContainer = new LayoutContainer(ContainerType.VBOX, display, {}, [
			new Box(imageElement, {
				width: display.width,
				height: display.height
			}),
			new Box(footer, {
				left: display.x,
				bottom: display.height
			})
		]);
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

	override function onKeyDown(keyCode:lime.ui.KeyCode, modifier:lime.ui.KeyModifier):Void {
		#if !web
		switch (keyCode) {
			case KeyCode.ESCAPE:
				this.window.close();
			case _:
				return;
		}
		#end
	}

	// override function render(context:lime.graphics.RenderContext):Void {}
	// override function onRenderContextLost ():Void trace(" --- WARNING: LOST RENDERCONTEXT --- ");
	// override function onRenderContextRestored (context:lime.graphics.RenderContext):Void trace(" --- onRenderContextRestored --- ");
	// ----------------- MOUSE EVENTS ------------------------------
	// override function onMouseMove (x:Float, y:Float):Void {}
	// override function onMouseDown (x:Float, y:Float, button:lime.ui.MouseButton):Void {}
	// override function onMouseUp (x:Float, y:Float, button:lime.ui.MouseButton):Void {}
	// override function onMouseWheel (deltaX:Float, deltaY:Float, deltaMode:lime.ui.MouseWheelMode):Void {}
	// override function onMouseMoveRelative (x:Float, y:Float):Void {}
	// ----------------- TOUCH EVENTS ------------------------------
	// override function onTouchStart (touch:lime.ui.Touch):Void {}
	// override function onTouchMove (touch:lime.ui.Touch):Void	{}
	// override function onTouchEnd (touch:lime.ui.Touch):Void {}
	// ----------------- KEYBOARD EVENTS ---------------------------
	// override function onKeyDown (keyCode:lime.ui.KeyCode, modifier:lime.ui.KeyModifier):Void {}
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
