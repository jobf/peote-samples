import Particle.ParticleConfiguration;
import peote.view.Color;
import peote.view.Buffer;

class Emitter {
	var buffer:Buffer<Particle>;
	var particleLimit:Int;
	var startX:Int;
	var startY:Int;
	var particles:Array<Particle> = [];

	public function new(buffer:Buffer<Particle>, particleLimit:Int, x:Int, y:Int) {
		this.buffer = buffer;
		this.particleLimit = particleLimit;
		startX = x;
		startY = y;
	}

	function emit() {
		var color = Color.random();
		color.r = 250;
		color.g = 120;
		if (color.b > 230) {
			color.b -= 30;
		}

		var particleInit:Void->ParticleConfiguration = () -> return {
			x: startX,
			y: startY,
			width: Std.int((Math.random() * 20 + 2)),
			height: Std.int((Math.random() * 20 + 9)),
			velocityY: (Math.random() * 3) + 1,
			velocityX: (Math.random() * 12) - 6,
			angularVelocity: Std.int((Math.random() * 10) - 5),
			rotation: (Math.random() * 360),
			lifeTime: Std.int(Math.random() * 2),
			decayRate: (Math.random() * 2) + 0.5,
			color: color
		}

		var particle = new Particle(particleInit);

		buffer.addElement(particle);
		particles.push(particle);
	}

	public function update(deltaTime:Int):Void {
		if (particles.length < particleLimit) {
			emit();
		}
		for (p in particles) {
			p.update();
			if (p.isExpired()) {
				// p.reset();
				p.renew();
			}
		}
		buffer.update();
	}
}
