class Blob {
	constructor() {
		this.radianStep = 1;
		this.offsetMax = 25;
		this.radius = 150;
		this._noiseCylinderSliceZ = 0;
	}

	draw() {
		push();

		// This is done so the input to noise are:
		//     * non-zero
		//     * are unique pairs
		//     * go in circle so they smoothly return
		//       to their original point
		// Learned this technique from this sketch: http://p5ide.herokuapp.com/editor#?sketch=57d45de23b7b6903001548c4﻿
		const noiseCircleCenterOffset = 1;

		stroke(255);
		noFill();
		beginShape();
		for (let pointAlongCircle = 0; pointAlongCircle < TWO_PI; pointAlongCircle += radians(this.radianStep)) {
			let noiseCircleX = noiseCircleCenterOffset + cos(pointAlongCircle);
			let noiseCircleY = noiseCircleCenterOffset + sin(pointAlongCircle);
			let offset = map(
							 noise(noiseCircleX, noiseCircleY, this._noiseCylinderSliceZ),
							 0, this.radianStep,
							 -this.offsetMax, this.offsetMax
							);
			let r = this.radius + offset;
			let x = r * cos(pointAlongCircle);
			let y = r * sin(pointAlongCircle);
			vertex(x, y);
		}
		endShape(CLOSE);

		this._noiseCylinderSliceZ += 0.01;
		pop();
	}
}
