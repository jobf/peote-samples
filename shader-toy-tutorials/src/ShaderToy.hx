package;

import peote.view.Texture;
import lime.graphics.Image;
import peote.view.Element;
import peote.view.Display;
import peote.view.Program;
import peote.view.Buffer;
import peote.view.Color;

class ShaderToy implements Element
{
	// position in pixel (relative to upper left corner of Display)
	@posX public var x:Int;
	@posY public var y:Int;
	
	// size in pixel
	@sizeX @varying public var w:Int;
	@sizeY @varying public var h:Int;

    // mouse position
	@custom("fMouseX") @varying var mouseX:Float;
	@custom("fMouseY") @varying var mouseY:Float;

	// time fake (until injection not works)
	@custom("fTime") @varying @constStart(0.0) @constEnd(0.00001) @anim("", "constant") var fakedTime:Float;
	
	static var buffer:Buffer<ShaderToy>;
	static var program:Program;
    
    static var functionTemplate:String = "
            void mainImage( out vec4 fragColor, in vec2 fragCoord )
            {
            }
    ";

    static public function injectShader(mainImageFunction:String=""){
        var hasFunctionToInject:Bool = mainImageFunction.length > 0;
        var mainFunction = hasFunctionToInject ? mainImageFunction : functionTemplate;
        
        var glslScript = '
            #define PI 3.14159265359
            #define TWOPI 6.28318530718

            vec2 iResolution;
            float iTime;
            vec2 iMouse;

            float frameRate = 1.0 / 60.0;
            
            vec4 texture(sampler2D sampler, vec2 coord){
                return texture2D(sampler, coord);
            }

            $mainFunction

            
            vec4 compose(vec2 coord, vec2 size, float time, vec2 mouse){
                // set a default colour
                vec4 fragmentColor = vec4(1.0, 1.0, 1.0, 1.0);
                
                // set up variables as in shader toy
                iResolution = size;
                iTime = time * frameRate;
                iMouse = mouse;
                
                // conver coord to what shader toy expects
                vec2 translatedCoord = vec2(coord.x * size.x, (1.0 - coord.y) * size.y);

                // call shader toy function
                mainImage(fragmentColor, translatedCoord);
                
                // return colour
                return fragmentColor;
            }
        ';

        // trace('injected script is \n $glslScript');
        
        program.injectIntoFragmentShader(glslScript);
    }
	
	static public function init(display:Display, images:Array<Image>, mainImageFunction:String="")
	{	
		buffer = new Buffer<ShaderToy>(1, 1, true);
		program = new Program(buffer);

        for(i => image in images){
            var texture = new Texture(image.width, image.height);
            texture.setImage(image);
            program.addTexture(texture, 'iChannel$i');
        }

        injectShader(mainImageFunction);

        program.setColorFormula('compose(vTexCoord, vSize, fTime, vec2(fMouseX, fMouseY))');
		display.addProgram(program);
	}

    public function onMouseMove (x:Float, y:Float) {
        // trace('mouse $x $y');
        mouseX = x;

        // conversion required to be compatible with shader toy
        mouseY = h - y;
        // trace('iMouse $mouseX $mouseY');
    }
	
	public function new(x:Int = 0, y:Int = 0, w:Int = 100, h:Int = 100) 
	{
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		buffer.addElement(this);
	}

}
