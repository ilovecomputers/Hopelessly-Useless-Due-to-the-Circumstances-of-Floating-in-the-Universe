let noiseCylinderSliceZ = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);

	translate(width / 2, height / 2);

	let radius = 150;

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
	for (let pointAlongCircle = 0; pointAlongCircle < TWO_PI; pointAlongCircle += radians(1)) {
		let noiseCircleX = noiseCircleCenterOffset + cos(pointAlongCircle);
		let noiseCircleY = noiseCircleCenterOffset + sin(pointAlongCircle);
		let offset = map(noise(noiseCircleX, noiseCircleY, noiseCylinderSliceZ), 0, 1, -25, 25);
		let r = radius + offset;
		let x = r * cos(pointAlongCircle);
		let y = r * sin(pointAlongCircle);
		vertex(x, y);
	}
	endShape();

	noiseCylinderSliceZ += 0.01;
}