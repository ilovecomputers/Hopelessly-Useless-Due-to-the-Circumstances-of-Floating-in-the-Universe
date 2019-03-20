class StarBlob {
	constructor(maxLength = 420) {
		this.OFFSET_MAX = 60;
		this.resize(maxLength);
		this.blob.radianStep = 0.5;
	}

	draw() {
		this.blob.draw();
		this.stars.update();
		this.stars.draw();
		this.graphic = this.stars.graphic.get();
		this.graphic.mask(this.blob.graphic);
	}

	resize(maxLength = 420) {
		this.maxLength = maxLength;
		this.blob = new Blob(this.radius, this.OFFSET_MAX);
		this.stars = new StarField(this.maxLength, this.maxLength);
	}

	get radius() {
		return this.maxLength/2 - this.OFFSET_MAX;
	}
}
