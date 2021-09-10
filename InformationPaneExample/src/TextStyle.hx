import peote.view.Color;

@packed
class TextStyle{
	public var color:Color = Color.GREEN;
	public var width:Float = 24;
	public var height:Float = 24;
	@global
	public var zIndex:Int = 2;
	public var tilt:Float = 0.0;
	public var weight:Float = 0.5;

	public function new() {}
}