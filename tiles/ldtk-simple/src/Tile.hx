package;

import peote.view.Element;
import peote.view.Color;

class Tile implements Element
{
	// position in pixel (relative to upper left corner of Display)
	@posX public var x:Int = 0;
	@posY public var y:Int = 0;
	
	// size in pixel
	@sizeX public var w:Int = 0;
	@sizeY public var h:Int = 0;
	
	// rotation around pivot point
	@rotation public var r:Float;
	
	// pivot x (rotation offset)
	@pivotX public var px:Int = 0;

	// pivot y (rotation offset)
	@pivotY public var py:Int = 0;
	
	// z-index
	@zIndex public var z:Int = 0;

	// the tile from the texture which this element should render
	@texTile() public var tileId:Int = 0;

	public function new() {}
}
