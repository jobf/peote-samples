package;

import peote.view.TextureData;
import peote.view.Texture;
import haxe.io.UInt8Array;
// import lime.graphics.PixelFormat;
// import lime.graphics.ImageBuffer;
// import lime.graphics.Image;
import haxe.io.BytesData;
import haxe.io.Bytes;
import lime.utils.Assets;
import haxe.CallStack;
import lime.app.Application;
import lime.ui.Window;
import peote.view.PeoteView;
import peote.view.Buffer;
import peote.view.Display;
import peote.view.Program;
import peote.view.Color;
import ase.Ase;

class Main extends Application {
	// ------------------------------------------------------------
	// --------------- SAMPLE STARTS HERE -------------------------
	// ------------------------------------------------------------
	var sprites:Array<Sprite>;
	var buffers:Array<Buffer<Sprite>>;
	var layer_count:Int;
	var ase:Ase;
	var sprite_x:Int;
	var sprite_y:Int;
	var display:Display;

	function startSample(window:Window) {
		var peoteView = new PeoteView(window);
		display = new Display(10, 10, window.width - 20, window.height - 20, Color.BLACK);
		peoteView.addDisplay(display);

		var data:Bytes = Assets.getBytes('assets/aseprite/48_run_cycle.ase');
		ase = Ase.fromBytes(data);

		var frame = ase.frames[0];

		sprite_x = 100;
		sprite_y = 100;

		layer_count = ase.layers.length;
		var frame_count = ase.frames.length;

		var image_slots = frame_count;
		var textures:Array<Texture> = [];
		var programs:Array<Program> = [];
		buffers = [];

		for (layer_index in 0...layer_count) {
			textures.push(new Texture(ase.width, ase.height, image_slots));
			buffers.push(new Buffer<Sprite>(layer_count * frame_count));

			var program = new Program(buffers[layer_index]);
			program.addTexture(textures[layer_index], 'layer$layer_index');
			programs.push(program);
			display.addProgram(program);
		}

		for (frame_index => frame in ase.frames) {
			for (layer_index in 0...layer_count) {
				var cel = frame.cel(layer_index);
				var data = new TextureData(cel.width, cel.height, UInt8Array.fromBytes(cel.pixelData));
				textures[layer_index].setImage(data, frame_index);
			}
		}

		sprites = [];
		var image_slot = 0;
		for (layer_index in 0...layer_count) {
			var cel = frame.cel(layer_index);
			sprites.push(new Sprite(sprite_x, sprite_y, ase.width, ase.height, image_slot, cel.xPosition, cel.yPosition));
			buffers[layer_index].addElement(sprites[layer_index]);
		}
	}

	// ------------------------------------------------------------
	// ----------------- LIME EVENTS ------------------------------
	// ------------------------------------------------------------

	override function onPreloadComplete():Void {
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

	var animation_frame_skip:Int = 8;
	var animation_count_down:Int = 0;
	var frame_index = 0;

	override function update(deltaTime:Int):Void {
		if (animation_count_down <= 0) {
			for (layer_index in 0...layer_count) {
				var cel = ase.frames[frame_index].cel(layer_index);

				var sprite = sprites[layer_index];
				sprite.tile = frame_index;
				sprite.x_offset = cel.xPosition;
				sprite.y_offset = cel.yPosition;
				sprite.x += 10;
				if (sprite.x >= display.width) {
					sprite.x = display.x - sprite.w;
				}
				buffers[layer_index].updateElement(sprite);
			}

			frame_index++;
			if (frame_index > ase.frames.length - 1) {
				frame_index = 0;
			}

			animation_count_down = animation_frame_skip;
		}
		animation_count_down--;
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
