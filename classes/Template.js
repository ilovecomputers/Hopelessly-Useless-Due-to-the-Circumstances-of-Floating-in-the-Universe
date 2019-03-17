class Template {
	constructor(manipulable = 1) {
		this.resize(manipulable);
	}

	draw() {
		this.graphic.ellipse(this._private, this._private, this._private);
	}

	get maxLength() {
		return this._private * 2 * this.manipulable;
	}

	resize(manipulable = 1) {
		this.manipulable = manipulable;
		this._private = 50;
		this.graphic = createGraphics(this.maxLength, this.maxLength);
		this.graphic.pixelDensity(1);
		this.graphic.scale(this.manipulable);
	}
}
