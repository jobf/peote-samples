package;

import peote.view.Element;
import peote.view.Color;

class Particle implements Element {
	@posX public var x:Float;
	@posY public var y:Float;
	@sizeX public var w:Int;
	@sizeY public var h:Int;
	@rotation public var r:Float;
	@color public var c:Color;

	// pivot x (rotation offset)
	@pivotX public var px:Int = 0;
	// pivot y (rotation offset)
	@pivotY public var py:Int = 0;
	// z-index
	@zIndex public var z:Int = 0;

	var OPTIONS = {alpha: true};

	var velX:Float;
	var velY:Float;
	var decayRate:Float;
	var angularVelocity:Float;

	var configuration:ParticleConfiguration;
	var init:Void->ParticleConfiguration;

	public function new(init:Void->ParticleConfiguration) {
		this.init = init;
		renew();
		reset();
	}

	public function update() {
		// move particle by velocity
		x += velX;
		y += velY;

		// fade opacity until 0
		if (this.c.alpha > 0) {
			this.c.alpha -= Std.int(decayRate);
			if (this.c.alpha < 10) {
				this.c.alpha = 0;
			}
		}

		// rotate particle
		this.r += angularVelocity;
	}

	public function isExpired():Bool {
		return this.c.alpha <= 0;
	}

	public function reset() {
		x = configuration.x;
		y = configuration.y;

		w = configuration.width;
		h = configuration.height;
		px = Std.int(configuration.width * 0.5);
		py = Std.int(configuration.height * 0.5);

		velX = configuration.velocityX;
		velY = configuration.velocityY;

		r = configuration.rotation;
		angularVelocity = configuration.angularVelocity;

		c = configuration.color;
		decayRate = configuration.decayRate;
	}

	public function renew() {
		configuration = init();
	}
}

@:structInit
class ParticleConfiguration {
	public var lifeTime:Int;
	public var decayRate:Float;
	public var width:Int;
	public var height:Int;
	public var color:Color;
	public var velocityX:Float;
	public var velocityY:Float;
	public var x:Int;
	public var y:Int;
	public var rotation:Float;
	public var angularVelocity:Float;
}
