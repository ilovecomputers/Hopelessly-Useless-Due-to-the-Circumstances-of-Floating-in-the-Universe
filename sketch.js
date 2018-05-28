let angle = 0;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(175);

	rectMode(CENTER);
	noStroke(0, 0, 255);
	fill(0);

	push();
	rotateX(angle);
	rotateY(angle * 0.3);
	rotateZ(angle * 1.2);
	sphere(100);
	pop();
	angle += 0.07;

	push();
	translate(mouseX - width/2, mouseY - height/2);
	sphere(100);
	pop();
}
