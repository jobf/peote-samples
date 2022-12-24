package;

import peote.view.Texture;
import lime.utils.Assets;
import haxe.CallStack;

import lime.app.Application;
import lime.ui.Window;

import peote.view.PeoteView;
import peote.view.Buffer;
import peote.view.Display;
import peote.view.Program;
import peote.view.Color;


class Main extends Application
{
	var peoteView:PeoteView;
	var display:Display;

	override function onWindowCreate():Void
	{
		switch (window.context.type)
		{
			case WEBGL, OPENGL, OPENGLES:
				try startSample(window)
				catch (_) trace(CallStack.toString(CallStack.exceptionStack()), _);
			default: throw("Sorry, only works with OpenGL.");
		}
	}
	
	// ------------------------------------------------------------
	// --------------- SAMPLE STARTS HERE -------------------------
	// ------------------------------------------------------------	
	
	public function startSample(window:Window)
	{
		peoteView = new PeoteView(window);
		display = new Display(10, 10, window.width - 20, window.height - 20, Color.CYAN);
		peoteView.addDisplay(display);
	}
	
	// ------------------------------------------------------------
	// ----------------- LIME EVENTS ------------------------------
	// ------------------------------------------------------------	

	override function onPreloadComplete():Void {
		/* access embeded assets from here */

		// load ldtk level
		var world = new World();
		var level = world.levels[0];

		// set up the texture from the tile set png
		var image_tiles = Assets.getImage('assets/tiles-16x16.png');
		var texture_tiles = new Texture(image_tiles.width, image_tiles.height);
		texture_tiles.setImage(image_tiles);

		// set the number of tiles in the texture using the tile size from ldtk tileset
		var tile_size = level.l_Tiles.tileset.tileGridSize;
		texture_tiles.tilesX = Std.int(image_tiles.width / tile_size);
		texture_tiles.tilesY = Std.int(image_tiles.height / tile_size);

		// set up buffer for the tiles and add texture to program
		var buffer_tiles = new Buffer<Tile>(256, 256, true);
		var program_tiles = new Program(buffer_tiles);
		program_tiles.addTexture(texture_tiles, 'tiles');
		
		// add program to display
		display.addProgram(program_tiles);

		/* render tiles from ldtk */
		
		// loop over the level tile co-ordinates
		for (cx in 0...level.l_Tiles.cWid) {
			for (cy in 0...level.l_Tiles.cHei) {
				// check if there is a tile at the co-ordinate before trying to render it
				if(level.l_Tiles.hasAnyTileAt(cx, cy)){
					
					// ldtk can have multiple tiles on top of each other in a so called 'stack'
					var tile_stack = level.l_Tiles.getTileStackAt(cx, cy);
					
					// iterate the stack
					for(tile_info in tile_stack){
						// init a new Tile element for each tile in the stack
						var tile = new Tile();
						
						// set the x and y of the element based on cell position and grid size
						tile.x = cx * level.l_Tiles.gridSize;
						tile.y = cy * level.l_Tiles.gridSize;

						// set the element size
						tile.w = tile_size;
						tile.h = tile_size;

						// set the tileId to use the correct tile from the texture that was split into tiles
						tile.tileId = tile_info.tileId;

						// add element to buffer
						buffer_tiles.addElement(tile);
					}
				}
			}
		}
	}

	override function update(deltaTime:Int):Void {
		// for game-logic update
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
