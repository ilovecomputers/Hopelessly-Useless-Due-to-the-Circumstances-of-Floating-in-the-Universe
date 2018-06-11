let angle = 0;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(175);

	fill(0);
	rotateY(angle);

	push();
	translate(100, 0);
	sphere(100);
	pop();

	push();
	translate(-100, 0);
	sphere(100);
	pop();

	angle += 0.07;
}
