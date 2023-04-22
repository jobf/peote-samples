package;

import peote.view.Element;
import peote.view.Color;

class Sprite implements Element {
	@posX @formula("x + x_offset") public var x_position:Int = 0;
	@posY @formula("y + y_offset") public var y_position:Int = 0;

	@custom @varying public var x:Int = 0;
	@custom @varying public var y:Int = 0;
	@custom @varying public var x_offset:Int;
	@custom @varying public var y_offset:Int;

	@varying @sizeX public var w:Int;
	@varying @sizeY public var h:Int;

	@texSlot() public var tile:Int;

	public function new(x:Int, y:Int, width:Int, height:Int, texSlot:Int, x_offset:Int, y_offset:Int) {
		this.x = x;
		this.y = y;
		this.w = width;
		this.h = height;
		tile = texSlot;
		this.x_offset = x_offset;
		this.y_offset = y_offset;
	}
}
