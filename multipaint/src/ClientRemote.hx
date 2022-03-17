package;

import peote.net.Remote;
import ServerRemote;

import peote.io.Byte;
import peote.io.UInt16;

#if lime
import haxe.ds.IntMap;
import haxe.ds.Vector;

import lime.ui.KeyCode;
import lime.ui.KeyModifier;
import lime.ui.Window;
import lime.ui.MouseButton;
import lime.ui.MouseWheelMode;

import peote.view.PeoteView;
import peote.view.Buffer;
import peote.view.Display;
import peote.view.Program;
import peote.view.Texture;
import peote.view.Color;


class ClientRemote implements Remote {
	
	var client:Client;
	
	var width:Int;
	var height:Int;
	
	var peoteView:PeoteView;
	var textureCanvas:Texture; // texture to draw into

	var displayCanvas:Display;
	var bufferCanvas:Buffer<ElemCanvas>;
	var programCanvas:Program;
	
	var displayDraw:Display;
	var bufferDraw:Buffer<ElemPen>;
	var programDraw:Program;
	
	var displayPen:Display;
	var bufferPen:Buffer<ElemPen>;
	var programPen:Program;
	
	var penRed  :Byte = 0xff;
	var penGreen:Byte = 0x00;
	var penBlue :Byte = 0x00;
	var penAlpha:Byte = 0xff;
	
	var penWidth:Byte = 10;
	var penHeight:Byte = 10;
	//var penRotation:Byte = 0x00;
	
	var penMap = new IntMap<ElemPen>();

	
	//public var server:ServerRemoteRemoteClient = null; // <- problem with Remote macro (type can not be ready generated)!
	public var server = (null : ServerRemoteRemoteClient);

	public function new( window:Window, width:Int=800, height:Int=600, client:Client ) {
		
		this.width = width;
		this.height = height;
		this.client = client;
		
		// ------ delegate Lime mouse and keyboard events ------
		
		window.onMouseMove.add(mouseMove);
		window.onMouseUp.add(mouseUp);
		window.onMouseDown.add(mouseDown);
		window.onMouseWheel.add(mouseWheel);
		window.onKeyDown.add(keyDown);
		window.onKeyUp.add(keyUp);		
		
		
		
		// ------ initialize peote-view --------
		
		peoteView = new PeoteView(window);

		// --- texture to render into ---		
		textureCanvas = new Texture(width, height);
		// do not clear the texture before rendering into (only color, depth and stencil is cleaned)
		textureCanvas.clearOnRenderInto = false;
		

		// --- display that holds elements with the texture what is drawed into ---
		displayCanvas = new Display(0, 0, width, height, Color.BLUE);
		peoteView.addDisplay(displayCanvas);
		
		bufferCanvas  = new Buffer<ElemCanvas>(2);
		
		programCanvas = new Program(bufferCanvas);		
		programCanvas.setTexture(textureCanvas, "renderFrom");
		//programCanvas.setColorFormula('renderFrom');
		programCanvas.alphaEnabled = true;
		programCanvas.discardAtAlpha(null);
		
		displayCanvas.addProgram(programCanvas);
		
		var elemCanvas = new ElemCanvas(width, height);
		bufferCanvas.addElement(elemCanvas);
		
		
		// --- display to render into the texture for canvas ---		
		displayDraw = new Display(0, 0, width, height);
		//peoteView.addDisplay(displayDraw);
		
		//peoteView.addFramebufferDisplay(displayDraw); // add also to the hidden RenderList for updating the Framebuffer Textures
		//displayDraw.renderFramebufferSkipFrames = 2; // at 1/3 framerate (after render a frame skip 2)
		//displayDraw.renderFramebufferEnabled = false;
		
		bufferDraw  = new Buffer<ElemPen>(1024, 512);
		programDraw = new Program(bufferDraw);
		programDraw.alphaEnabled = true;
		programDraw.discardAtAlpha(null);
		
		displayDraw.addProgram(programDraw);
		displayDraw.setFramebuffer(textureCanvas, peoteView); // texture to render into
		
		
		// --- display to render the pens only ---		
		displayPen = new Display(0, 0, width, height);
		peoteView.addDisplay(displayPen);
		
		bufferPen  = new Buffer<ElemPen>(16, 8);
		programPen = new Program(bufferPen);
		programPen.alphaEnabled = true;
		
		displayPen.addProgram(programPen);

		//peoteView.start();
	}
	
	public function serverRemoteIsReady( server ) {
		// trace(Type.typeof(server));
		this.server = server;
	}
	
	
	// ------ mouse eventhandling -----
	
	static inline var timeDelay:Float = 0.02;
	var isDraw = false;	
	var moveTime:Float = 0;
	var drawQueue = new Array<UInt16>();
	var drawQueueTime:Float = 0;
	
	
	inline function move(x:Int, y:Int) {
		//trace("move", x, y);
		if (haxe.Timer.stamp() < moveTime) {
			// TODO: for more haptic the clients pen have to move here and not throught server
		}
		else {
			moveTime = haxe.Timer.stamp() + timeDelay;			
			if (server != null) server.penMove(x, y);
		}
		
	}
	
	inline function draw(x:Int, y:Int) {
		//trace("draw", x, y);
		if (haxe.Timer.stamp() < drawQueueTime) {
			drawQueue.push(Std.int(x));
			drawQueue.push(Std.int(y));
		}
		else {
			drawQueueTime = haxe.Timer.stamp() + timeDelay;
			if (drawQueue.length != 0 && server != null) 
			{
				var lastQueuedX = drawQueue[drawQueue.length - 2];
				var lastQueuedY = drawQueue[drawQueue.length - 1];
				
				server.penDraw(drawQueue);
				
				drawQueue.resize(2);
				drawQueue[0] = lastQueuedX;
				drawQueue[1] = lastQueuedY;				
			}
		}
		
	}
	
	// ------------------------------------------------------------
	// ------------ Delegated LIME EVENTS -------------------------
	// ------------------------------------------------------------	

	// for optimization: transfer only the relative movements into Bytes!
	inline function mouseMove(x:Float, y:Float) {
		//trace("mouseMove", x, y);
		var _x:Int = (x < 0) ? 0 : Std.int(x);
		var _y:Int = (y < 0) ? 0 : Std.int(y);
		if (isDraw) draw(_x, _y) else move(_x, _y);		
	}
	
	inline function mouseDown(x:Float, y:Float, button:MouseButton) {
		//trace("mouseDown", x, y, button);
		isDraw = true;
		var _x:Int = (x < 0) ? 0 : Std.int(x);
		var _y:Int = (y < 0) ? 0 : Std.int(y);
		drawQueue.push(_x);
		drawQueue.push(_y);
		drawQueueTime = haxe.Timer.stamp() + timeDelay;
		if (server != null) server.penMove(_x, _y);
	}
	
	inline function mouseUp(x:Float, y:Float, button:MouseButton) {
		//trace("mouseUp", x, y, button);
		isDraw = false;		
		if (drawQueue.length != 0 && server != null) {
			//trace("send");
			server.penDraw(drawQueue);
			drawQueue.resize(0);
		}
	}
	
	// stores pressed keys to change the pen by mousewheel or cursor up/down
	var penchange:PenchangeMode = 0;
	var changeSpeed:Int = 8;

	inline function mouseWheel(dx:Float, dy:Float, mode:MouseWheelMode) {
		//trace("mouseWheel", dx, dy, mode);
		var delta:Int = (dy > 0) ? changeSpeed : -changeSpeed;
		
		if (penchange.ANY) 
		{
			// change pen parameters
			if (penchange.WIDTH ) penWidth  += delta;
			if (penchange.HEIGHT) penHeight += delta;
			
			if (penchange.RED  ) penRed   += delta;
			if (penchange.GREEN) penGreen += delta;
			if (penchange.BLUE ) penBlue  += delta;
			if (penchange.ALPHA) penAlpha += delta;
			
			trace("new pen settings:", penWidth, penHeight, penRed, penGreen, penBlue, penAlpha);
			if (server != null) server.penChange( penWidth, penHeight, penRed, penGreen, penBlue, penAlpha );
		}
		else 
		{
			// TODO: Zoom View
		}
	}
	
	
	inline function keyDown(key:KeyCode, modifier:KeyModifier) {
		//trace("keyDown", key, modifier);
		switch (key) {			
			case KeyCode.W: penchange.WIDTH_ON();
			case KeyCode.H: penchange.HEIGHT_ON();
			case KeyCode.S: penchange.WIDTH = penchange.HEIGHT = true;
			
			case KeyCode.R: penchange.RED_ON();
			case KeyCode.G: penchange.GREEN_ON();
			case KeyCode.B: penchange.BLUE_ON();
			case KeyCode.A: penchange.ALPHA_ON();			
			case KeyCode.V: penchange.RED = penchange.GREEN = penchange.BLUE = true;
						
			case KeyCode.P: // TODO: enable colorpicking
			
			case KeyCode.LEFT_CTRL: changeSpeed = 16;
			case KeyCode.LEFT_SHIFT: changeSpeed = 1;
			
			case KeyCode.UP  : mouseWheel(0,  1, null);
			case KeyCode.DOWN: mouseWheel(0, -1, null);
			default:
		}
	}
			
	inline function keyUp(key:KeyCode, modifier:KeyModifier) {
		//trace("keyUp",key, modifier);
		switch (key) {			
			case KeyCode.W: penchange.WIDTH_OFF();
			case KeyCode.H: penchange.HEIGHT_OFF();
			case KeyCode.S: penchange.WIDTH = penchange.HEIGHT = false;
			
			case KeyCode.R: penchange.RED_OFF();
			case KeyCode.G: penchange.GREEN_OFF();
			case KeyCode.B: penchange.BLUE_OFF();
			case KeyCode.A: penchange.ALPHA_OFF();
			case KeyCode.V: penchange.RED = penchange.GREEN = penchange.BLUE = false;
			
			case KeyCode.P: // TODO: disable colorpicking

			case KeyCode.LEFT_SHIFT | KeyCode.LEFT_CTRL: changeSpeed = 8;
			default:
		}
	}
			
	
	
	// ------------------------------------------------------------
	// ----- Functions that run on Client and called by Server ----
	// ------------------------------------------------------------
	
	@:remote public function addPen(userNr:UInt16) {
		trace('Client: addPen - userNr:$userNr');		
		var pen = new ElemPen(0, 0);
		bufferPen.addElement(pen);		
		penMap.set(userNr, pen);
	}
	
	@:remote public function removePen(userNr:UInt16) {
		trace('Client: removePen - userNr:$userNr');		
		var pen = penMap.get(userNr);
		if (pen != null) {
			bufferPen.removeElement(pen);
			penMap.remove(userNr);
		}
	}
	
	@:remote public function penChange(userNr:UInt16, w:Byte, h:Byte, r:Byte, g:Byte, b:Byte, a:Byte) {
		trace('Client: changePen - userNr:$userNr', r);
		var pen = penMap.get(userNr);
		if (pen != null) {
			pen.w = 1 + (w >> 1);
			pen.h = 1 + (h >> 1);
			pen.c.red = r;
			pen.c.green = g;
			pen.c.blue = b;
			pen.c.alpha = a;
			bufferPen.updateElement(pen);
		}
	}
	
	@:remote public function penMove(userNr:UInt16, x:UInt16, y:UInt16) {
		//trace('Client: penMove - userNr:$userNr');
		var pen = penMap.get(userNr);
		if (pen != null) {
			pen.x = x;
			pen.y = y;
			bufferPen.updateElement(pen);
		}
	}

	@:remote public function penDraw(userNr:UInt16, drawQueue:Array<UInt16>) {
		var z:Int = ElemPen.MAX_ZINDEX;
		//trace('Client: penDraw - userNr:$userNr');
		var pen = penMap.get(userNr);
		if (pen != null) 
		{
			for ( i in 0...Std.int(drawQueue.length/2) ) {
				bufferDraw.addElement(new ElemPen(
					drawQueue[i * 2],
					drawQueue[i * 2 + 1],
					z--,
					pen
				));
				if (i > 0)  {
					// interpolate to create straight lines between the points (TODO: find a way for fast curve-interpolation)
					var dx:Float = -drawQueue[i*2] + drawQueue[(i - 1)*2];
					var dy:Float = -drawQueue[i*2 + 1] + drawQueue[(i - 1)*2 + 1];
					var distance = Math.max(Math.abs(dx), Math.abs(dy));
					for ( j in 1...Std.int(distance) ) {
						bufferDraw.addElement(new ElemPen(
							Std.int(drawQueue[i * 2] + dx * j / distance),
							Std.int(drawQueue[i * 2 + 1] + dy * j / distance),
							z--,
							pen
						));
					}
				}
			}
		
			peoteView.renderToTexture(displayDraw);
			
			// clear the buffer
			for (i in 0...bufferDraw.length()) bufferDraw.removeElement(bufferDraw.getElement(i));
			// TODO: need to upgrade peote-view for using this instead: bufferDraw.removeAllElements() or bufferDraw._maxElements = 0;
		}
	}

}


#else

// need for dedicated server to build without lime
class ClientRemote implements Remote {
	@:remote public function addPen(userNr:UInt16) {}
	@:remote public function removePen(userNr:UInt16) {}
	@:remote public function penChange(userNr:UInt16, userNr:UInt16, w:Byte, h:Byte, r:Byte, g:Byte, b:Byte, a:Byte) {}
	@:remote public function penMove(userNr:UInt16, x:UInt16, y:UInt16) {}
	@:remote public function penDraw(userNr:UInt16, drawQueue:Array<UInt16>) {}
}

#end