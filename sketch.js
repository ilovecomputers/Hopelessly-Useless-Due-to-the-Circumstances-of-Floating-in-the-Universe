let binary1, binary2, binary3, randomVector, randomAngle;
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	binary1 = new BinarySphere(PI / 6);
	binary2 = new BinarySphere();
	binary3 = new BinarySphere(PI / 4);
	randomVector =  p5.Vector.random3D();
	randomAngle = random(0, PI);
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
	rotate(randomAngle, randomVector);
	binary2.draw();
	pop();

	binary3.rotate();
	push();
	translate(0, -150);
	binary3.draw();
	pop();
}
