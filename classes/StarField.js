/**
 * Based on @maxpowa_'s (maxpowa.us) code pen: https://codepen.io/maxpowa/pen/VKXmrW
 */
class StarField {
	constructor(width = 100, height = 100) {
		this.numberOfStars = 100;
		this.width = width;
		this.height = height;
		this.step = 0.05;
		this._stars = [];
		this.setUp();
	}

	setUp() {
		this._stars = [];
		for (let i = 0; i < this.numberOfStars; i++) {
			this._stars.push({
				x: random(0, this.width),
				y: random(0, this.height),
				speed: random([2, 4, 8]),
				radius: Math.random() * 2
			});
		}
	}

	update() {
		for (let i = 0; i < this._stars.length; i++) {
			let s = this._stars[i];
			s.x = s.x + this.step * s.speed;
			s.y = s.y + this.step * s.speed;

			if (s.x > this.width || s.y > this.height) {
				this._generateRandomPointOnAxis(s);
			}
		}
	}

	_generateRandomPointOnAxis(s) {
		s.x = random(0, this.width);
		s.y = random(0, this.height);
		if (s.x > s.y) { // point starts on the x axis
			s.x = s.x - s.y;
			s.y = 0;
		} else if (s.y > s.x) { // point starts on y axis
			s.y = s.y - s.x;
			s.x = 0;
		} else { // point starts on origin
			s.x = 0;
			s.y = 0;
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
