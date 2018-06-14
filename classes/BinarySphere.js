class BinarySphere {
	constructor() {
		this._angle = 0;
		this._deltaRotate = 0.07;
		this._binaryDistance = 200;
		this._radius = 100;
	}

	rotate() {
		this._angle += this._deltaRotate;
	}

	draw() {
		fill(0);

		push();
		rotateY(this._angle);

		push();
		translate(this._binaryDistance / 2, 0);
		sphere(this._radius);
		pop();

		push();
		translate(-(this._binaryDistance / 2), 0);
		sphere(this._radius);
		pop();
		pop();
	}
}
