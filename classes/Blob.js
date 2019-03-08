class Blob {
	constructor(radius = 150, offsetMax = 25) {
		this.radianStep = 1;
		this.resize(radius, offsetMax);
		this._noiseCylinderSliceZ = 0;
	}

	draw() {
		// This is done so the input to noise are:
		//     * non-zero
		//     * are unique pairs
		//     * go in circle so they smoothly return
		//       to their original point
		// Learned this technique from this sketch: http://p5ide.herokuapp.com/editor#?sketch=57d45de23b7b6903001548c4﻿
		const noiseCircleCenterOffset = 1;

		this.graphic.clear();
		this.graphic.stroke(255);
		this.graphic.fill(255);
		this.graphic.beginShape();
		for (let pointAlongCircle = 0; pointAlongCircle < TWO_PI; pointAlongCircle += radians(this.radianStep)) {
			let noiseCircleX = noiseCircleCenterOffset + cos(pointAlongCircle);
			let noiseCircleY = noiseCircleCenterOffset + sin(pointAlongCircle);
			let offset = map(
							 noise(noiseCircleX, noiseCircleY, this._noiseCylinderSliceZ),
							 0, 1,
							 -this.offsetMax, this.offsetMax
							);
			let r = this.radius + offset;
			let x = r * cos(pointAlongCircle);
			let y = r * sin(pointAlongCircle);
			this.graphic.vertex(x, y);
		}
		this.graphic.endShape(CLOSE);

		this._noiseCylinderSliceZ += 0.01;
	}

	get maxLength() {
		return (this.radius + this.offsetMax) * 2;
	}

	resize(radius = 150, offsetMax = 25) {
		this.offsetMax = offsetMax;
		this.radius = radius;
		this.graphic = createGraphics(this.maxLength + 1, this.maxLength + 1);
		this.graphic.pixelDensity(1);
		this.graphic.translate(this.maxLength / 2, this.maxLength / 2);
	}
}
