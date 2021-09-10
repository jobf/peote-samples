import peote.view.Color;
import peote.text.FontProgram;
import peote.text.Line;
import peote.view.Program;
import peote.view.Buffer;
import peote.layout.LayoutContainer;
import peote.view.Element;
import peote.layout.ILayoutElement;

class TextElement implements Element implements ILayoutElement {
	public function new(buffer:Buffer<TextElement>, program:FontProgram<TextStyle>, positionX:Int, positionY:Int, width:Int, height:Int, zIndex:Int) {
		this.buffer = buffer;
		pen = program;
		x = positionX;
		y = positionY;
		w = width;
		h = height;
		z = zIndex;
		this.buffer.addElement(this);
        line = this.pen.createLine("", x, y);
	}

    public function setText(text:String){
        pen.lineSetChars(line, text);
        pen.updateLine(line);
    }

	var buffer:Buffer<TextElement>;
	var program:Program;
    var line:Line<TextStyle>;
    var style:TextStyle;
	var pen:FontProgram<TextStyle>;

	@posX public var x:Int;
	@posY public var y:Int;
	@sizeX public var w:Int;
	@sizeY public var h:Int;
	@zIndex public var z:Int;	
	@color public var c:Color = 0x00ff00ff;	

	public inline function updateGeometry(layoutContainer:LayoutContainer) {
		x = Math.round(layoutContainer.x);
		y = Math.round(layoutContainer.y);
		w = Math.round(layoutContainer.width);
		h = Math.round(layoutContainer.height);
		pen.lineSetPosition(line, x, y);
	}
	
	public function updateByLayout(layoutContainer:LayoutContainer) {
		updateGeometry(layoutContainer);
		buffer.updateElement(this);
		pen.updateLine(line);
	}

	public function showByLayout() {}

	public function hideByLayout() {}

}
