import peote.view.Display;
import lime.graphics.Image;
import peote.view.Texture;

class ImageElement extends BaseElement{
	public function new(display:Display, x:Int, y:Int, width:Int, height:Int, zIndex:Int) {
		super(display, x, y, width, height, zIndex);
		texture = new Texture(w, h);
	}

	public function setImage(image:Image, identifier:String="id") {
		texture.setImage(image);
		program.setTexture(texture, identifier);
	}

	var texture:Texture;
}
