import peote.view.Program;
import peote.view.Buffer;
import peote.layout.LayoutContainer;
import peote.view.Element;
import peote.layout.ILayoutElement;
import lime.graphics.Image;
import peote.view.Texture;

class ImageElement implements Element implements ILayoutElement {
	public function new(buffer:Buffer<ImageElement>, program:Program, positionX:Int, positionY:Int, width:Int, height:Int, zIndex:Int) {
		this.buffer = buffer;
		this.program = program;
		this.buffer.addElement(this);
		x = positionX;
		y = positionY;
		w = width;
		h = height;
		z = zIndex;
		texture = new Texture(w, h);
	}

	public function setImage(image:Image, identifier:String="id") {
		texture.setImage(image);
		program.setTexture(texture, identifier);
	}

	var buffer:Buffer<ImageElement>;
	var program:Program;
	var texture:Texture;

	@posX public var x:Int;
	@posY public var y:Int;
	@sizeX public var w:Int;
	@sizeY public var h:Int;
	@zIndex public var z:Int;	

	public inline function updateGeometry(layoutContainer:LayoutContainer) {
		x = Math.round(layoutContainer.x);
		y = Math.round(layoutContainer.y);
		w = Math.round(layoutContainer.width);
		h = Math.round(layoutContainer.height);
	}
	
	public function updateByLayout(layoutContainer:LayoutContainer) {
		updateGeometry(layoutContainer);
		buffer.updateElement(this);
	}

	public function showByLayout() {}

	public function hideByLayout() {}

}
