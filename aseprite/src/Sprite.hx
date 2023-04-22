package;

import peote.view.Element;
import peote.view.Color;

class Sprite implements Element {
	/*
	@posX and @posY is the position which the Element is rendered
	@formula allows to calculate the position - this is glsl syntax and becomes part of the gl shader
	for the formula we set the Element render position to the x or y position plus the x_offset or y_offset
	*/
	@posX @formula("x + x_offset") public var x_position:Int = 0;
	@posY @formula("y + y_offset") public var y_position:Int = 0;

	// @sizeX and @sizeY are the width and height which the Element is rendered
	@varying @sizeX public var w:Int;
	@varying @sizeY public var h:Int;

	// @texSlot is which image slot from a texture will be rendered
	@texSlot() public var image_slot:Int;

	// x and y used together with x_offset and y_offset to determine the actual render position of the element
	// note that @custom is used to make these variable avalaible to the gl shader
	@custom @varying public var x:Int = 0;
	@custom @varying public var y:Int = 0;
	@custom @varying public var x_offset:Int;
	@custom @varying public var y_offset:Int;

	public function new(x:Int, y:Int, width:Int, height:Int, image_slot:Int, x_offset:Int, y_offset:Int) {
		this.x = x;
		this.y = y;
		this.w = width;
		this.h = height;
		this.image_slot = image_slot;
		this.x_offset = x_offset;
		this.y_offset = y_offset;
	}
}
