import peote.view.Display;
import peote.view.Program;
import peote.view.Buffer;
import lime.graphics.Image;
import peote.view.Element;
import peote.view.Texture;

class ImageLayoutElement implements Element {
	public function new(display:Display, positionX:Int, positionY:Int, width:Int, height:Int) {
		this.display = display;
		x = positionX;
		y = positionY;
		w = width;
		h = height;
		buffer = new Buffer<ImageLayoutElement>(1);
		buffer.addElement(this);
		program = new Program(buffer);
		texture = new Texture(w, h);
	}

	public function setImage(image:Image, identifier:String="id") {
		texture.setImage(image);
		program.setTexture(texture, identifier);
		display.addProgram(program);
	}

	// Element implementation begin
	@posX public var x:Int;
	@posY public var y:Int;
	@sizeX public var w:Int;
	@sizeY public var h:Int;
	// Element implementation end

	var display:Display;
	var buffer:Buffer<ImageLayoutElement>;
	public var program(default, null):Program;
	var texture:Texture;
}
