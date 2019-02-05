class Template {
	constructor() {
		this.manipulable = 1;
		this._private = 50;
	}

	draw() {
		push();
		scale(this.manipulable);
		sphere(this._private);
		pop();
	}
}
