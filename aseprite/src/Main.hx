package;

import peote.view.TextureData;
import peote.view.Texture;
import haxe.io.UInt8Array;
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
	var ase:Ase;
	var frame_index:Int;
	var frame_duration_remaining:Int;

	var sprites:Array<Sprite>;
	var buffers:Array<Buffer<Sprite>>;

	var sprite_x:Int = 96;
	var sprite_y:Int = 96;

	var display:Display;

	function startSample(window:Window) {
		var peoteView = new PeoteView(window);
		display = new Display(0, 0, window.width, window.height, Color.GREY1);
		peoteView.addDisplay(display);
		
		// retrieve the ase file from assets and read it with Ase library
		var data:Bytes = Assets.getBytes('assets/aseprite/48_run_cycle2-1t.ase');
		ase = Ase.fromBytes(data);

		/*
		The file contains animation frames and infomration on how to display them.

		Each frame has multiple layers of pixel data stored in cels.

		A layer will be constructed using the following peote-view objects
		 - texture
		 - program
		 - buffer
		 - sprite
		*/

		// initiliase the layer collections
		var layer_count = ase.layers.length;
		var textures:Array<Texture> = [];
		var programs:Array<Program> = [];
		buffers = [];
		sprites = [];

		// iterate the layers data and instance the peote-view objects
		for (layer_index in 0...layer_count) {

			// init layer texture - ase.width and ase.height are the dimensions of the frame
			var texture = new Texture(ase.width, ase.height, ase.frames.length);
			textures.push(texture);

			// init layer buffer - only need 1 element in each 
			var buffer = new Buffer<Sprite>(1);
			buffers.push(buffer);

			// init layer program
			var program = new Program(buffer);
			programs.push(program);
			// add program to display so it can be displayed
			display.addProgram(program);
			// let the program access the texture
			program.addTexture(textures[layer_index], 'layer$layer_index');
		}

		// iterate the frames data and read cel data
		// each cel is an image and gets it's own image slot in the layer texture
		for (frame_index => frame in ase.frames) {
			for (layer_index in 0...layer_count) {
				var cel = frame.cel(layer_index);
				var data = new TextureData(cel.width, cel.height, UInt8Array.fromBytes(cel.pixelData));
				// note that image slot == frame index
				textures[layer_index].setImage(data, frame_index);
			}
		}

		// init the first frame of the animation, index 0
		frame_index = 0;
		var frame = ase.frames[frame_index];
		frame_duration_remaining = frame.duration;
		trace('frame_duration $frame_duration_remaining');
		// iterate layers and init Sprite for each layer of the frame
		for (layer_index in 0...ase.layers.length) {
			var cel = frame.cel(layer_index);
			// a cel can be smaller than the frame so has xPosition and yPosition
			// the cel position tells us where to render the cel offset from the Sprite position
			var sprite = new Sprite(sprite_x, sprite_y, ase.width, ase.height, frame_index, cel.xPosition, cel.yPosition);
			sprites.push(sprite);
			// put Sprite in buffer so it can be displayed
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

	override function update(deltaTime:Int):Void {
		// reduce the remaining frame time by the milliseconds ast since last render
		frame_duration_remaining -= deltaTime;
		// if there is no more duration to wait, set up next frame
		if (frame_duration_remaining <= 0) {

			// increase frame index counter
			frame_index++;
			if (frame_index > ase.frames.length - 1) {
				// if we reached the final frame then reset the frame index counter
				frame_index = 0;
			}

			// set up next frame of animation
			var frame = ase.frames[frame_index];

			// each frame can have it's own duration to be displayed
			frame_duration_remaining = frame.duration;

			// iterate the layers and update each Sprite
			for (layer_index in 0...ase.layers.length) {
				var sprite = sprites[layer_index];
				// each image slot is a frame of the animation
				sprite.image_slot = frame_index;

				// offset the sprite by cell position
				var cel = frame.cel(layer_index);
				sprite.x_offset = cel.xPosition;
				sprite.y_offset = cel.yPosition;

				// here we move the sprite across the screen to the right, for extra fun
				sprite.x += 10;
				if (sprite.x >= display.width) {
					// when the sprite has exited the screen right, move it to the screen left
					sprite.x = display.x - sprite.w;
				}

				// update the element in the buffer to apply changes
				buffers[layer_index].updateElement(sprite);
			}
		}
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
