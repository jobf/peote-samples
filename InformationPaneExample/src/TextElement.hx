import peote.layout.LayoutContainer;
import peote.text.FontProgram;
import peote.text.Line;
import peote.view.Display;

class TextElement extends BaseElement{
	public function new(display:Display, pen:FontProgram<TextStyle>, x:Int, y:Int, width:Int, height:Int, zIndex:Int) {
		super(display, x, y, width, height, zIndex);
        this.pen = pen;
        line = this.pen.createLine("", x, y);
	}
    var line:Line<TextStyle>;
    var style:TextStyle;
	var pen:FontProgram<TextStyle>;

    public function setText(text:String){
        pen.lineSetChars(line, text);
        pen.updateLine(line);
    }

    override public function updateByLayout(layoutContainer:LayoutContainer) {
		super.updateByLayout(layoutContainer);
        pen.lineSetPosition(line, x, y);
		pen.updateLine(line);
	}
}
