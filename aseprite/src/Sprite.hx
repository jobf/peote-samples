package;

import peote.view.Element;
import peote.view.Color;

class Sprite implements Element {
	@posX public var x:Int;
	@posY public var y:Int;

	@varying @sizeX public var w:Int;
	@varying @sizeY public var h:Int;

	@texSlot() public var tile:Int;

	public function new(x:Int, y:Int, width:Int, height:Int, texSlot:Int) {
		this.x = x;
		this.y = y;
		this.w = width;
		this.h = height;
		tile = texSlot;
	}
}
