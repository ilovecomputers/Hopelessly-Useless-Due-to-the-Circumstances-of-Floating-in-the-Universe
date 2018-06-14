let binary1, binary2, binary3;
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	binary1 = new BinarySphere();
	binary2 = new BinarySphere();
	binary3 = new BinarySphere();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(175);
	binary1.rotate();
	binary1.draw();

	binary2.rotate();
	push();
	translate(0, 150);
	binary2.draw();
	pop();

	binary3.rotate();
	push();
	translate(0, -150);
	binary3.draw();
	pop();
}
