class BinarySphere {
	constructor(startingAngle = 0) {
		this.deltaRotate = 0.07;
		this.binaryDistance = 99;
		this.scale = 1;
		this._radius = 50;
		this._angle = startingAngle;
	}

	rotate() {
		this._angle += this.deltaRotate;
	}

	draw() {
		fill(0);

		push();
		rotateY(this._angle);
		scale(this.scale);

		push();
		translate(this.binaryDistance / 2, 0);
		sphere(this._radius);
		pop();

		push();
		translate(-(this.binaryDistance / 2), 0);
		sphere(this._radius);
		pop();
		pop();
	}
}
