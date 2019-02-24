/**
 * Based on @maxpowa_'s (maxpowa.us) code pen: https://codepen.io/maxpowa/pen/VKXmrW
 */
class StarField {
	constructor(width = 100, height = 100) {
		this.numberOfStars = 100;
		this.width = width;
		this.height = height;
		this._stars = [];
		this.setUp();
	}

	setUp() {
		// Push stars to array
		this._stars = [];
		for (let i = 0; i < this.numberOfStars; i++) {
			this._stars.push({
				x: 0,
				y: 0,
				offset: Math.random() * 360,
				// Weight orbit a little to be outside origin
				orbit: (Math.random()+0.01) * max(this.width, this.height),
				radius: Math.random() * 2,
				vx: Math.floor(Math.random() * 10) - 5,
				vy: Math.floor(Math.random() * 10) - 5
			});
		}
	}

	update() {
		let originX = this.width / 2;
		let originY = this.height / 2;

		for (let i = 0, x = this._stars.length; i < x; i++) {
			let s = this._stars[i];


			let rad = (frameCount * (1/(s.orbit*2 + s.offset)) + s.offset) % TAU;
			s.x = (originX + cos(rad)*(s.orbit*2));
			s.y = (originY + sin(rad)*(s.orbit));
		}
	}

	draw() {
		push();
		noFill();
		stroke('white');
		strokeWeight(2);
		for (let i = 0, x = this._stars.length; i < x; i++) {
			let s = this._stars[i];
			ellipse(s.x, s.y, s.radius, 0);
		}
		pop();
	}
}
