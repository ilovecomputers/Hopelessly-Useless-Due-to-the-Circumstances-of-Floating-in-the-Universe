let blob, stars;

function setup() {
	blob = new Blob(undefined, 60);
	blob.radianStep = 0.5;
	stars = new StarField(blob.maxLength, blob.maxLength);
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background("purple");
	blob.draw();
	stars.update();
	stars.draw();
	let starsImage = stars.graphic.get();
	starsImage.mask(blob.graphic.get());
	image(starsImage, windowWidth/2 - stars.width/2, windowHeight/2 - stars.height/2, stars.width, stars.height);
}