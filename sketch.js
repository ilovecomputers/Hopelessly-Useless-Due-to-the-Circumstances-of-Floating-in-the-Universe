const PERCENTAGE_OF_WINDOW_LENGTH = 0.65;
let starBlob;

function setup() {
	createCanvas(windowWidth, windowHeight);
	starBlob = new StarBlob(getMaxLength());
}

function draw() {
	background("purple");
	starBlob.draw();
	image(starBlob.graphic,
		windowWidth / 2 - starBlob.maxLength / 2, windowHeight / 2 - starBlob.maxLength / 2,
		starBlob.maxLength, starBlob.maxLength)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	starBlob.resize(getMaxLength());
}

function getMaxLength() {
	let percentageOfWindowLength = PERCENTAGE_OF_WINDOW_LENGTH;
	if (windowWidth < 600) {
		percentageOfWindowLength = 1;
	}

	let maxLength = windowWidth * percentageOfWindowLength;
	if (maxLength > windowHeight * percentageOfWindowLength) {
		maxLength = windowHeight * percentageOfWindowLength;
	}

	return maxLength;
}
