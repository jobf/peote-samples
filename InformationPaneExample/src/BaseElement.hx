
import peote.view.Color;
import peote.layout.LayoutContainer;
import peote.layout.ILayoutElement;
import peote.view.Display;
import peote.view.Program;
import peote.view.Buffer;
import peote.view.Element;

class BaseElement implements Element implements ILayoutElement {
	public function new(display:Display, positionX:Int, positionY:Int, width:Int, height:Int, zIndex:Int) {
		this.display = display;
		x = positionX;
		y = positionY;
		w = width;
		h = height;
		z = zIndex;

		bgBuffer = new Buffer<SimpleElement>(1);
		bgProgram = new Program(bgBuffer);
		bgProgram.zIndexEnabled = true;
		bgElement = new SimpleElement(x, y, w, h, 0x00ff00ff, zIndex -1);
		bgBuffer.addElement(bgElement);
		this.display.addProgram(bgProgram);

		buffer = new Buffer<BaseElement>(1);
		buffer.addElement(this);
		program = new Program(buffer);
		program.zIndexEnabled = true;
		this.display.addProgram(program);
	}

	// Element implementation begin
	@posX public var x:Int;
	@posY public var y:Int;
	@sizeX public var w:Int;
	@sizeY public var h:Int;
	@zIndex public var z:Int;	

	// Element implementation end
	// ILayoutElement implementation begin
	public inline function updateGeometry(layoutContainer:LayoutContainer) {
		x = Math.round(layoutContainer.x);
		y = Math.round(layoutContainer.y);
		w = Math.round(layoutContainer.width);
		h = Math.round(layoutContainer.height);
		bgElement.x = x;
		bgElement.y = y;
		bgElement.w = w;
		bgElement.h = h;
	}
	
	public function updateByLayout(layoutContainer:LayoutContainer) {
		updateGeometry(layoutContainer);
		buffer.updateElement(this);
		bgBuffer.updateElement(bgElement);
	}

	public function showByLayout() {}

	public function hideByLayout() {}
	// ILayoutElement implementation end

	var display:Display;
	
	var bgBuffer:Buffer<SimpleElement>;
	var bgProgram:Program;
	var bgElement:SimpleElement;

	var buffer:Buffer<BaseElement>;
	var program:Program;
}


class SimpleElement implements Element
{
	@posX public var x:Int=0; // signed 2 bytes integer
	@posY public var y:Int=0; // signed 2 bytes integer
	@sizeX public var w:Int;
	@sizeY public var h:Int;
	@color public var c:Color;
	@zIndex public var z:Int;	
	
	public function new(positionX:Int, positionY:Int, width:Int, height:Int, color:Color, zIndex:Int)
	{
		x = positionX;
		y = positionY;
		w = width;
		h = height;
		c = color;
		z = zIndex;
	}
}