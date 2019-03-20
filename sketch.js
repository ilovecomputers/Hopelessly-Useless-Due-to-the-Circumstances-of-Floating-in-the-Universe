const PERCENTAGE_OF_WINDOW_LENGTH = 0.65;
let starBlob, sadPerson;

function setup() {
	createCanvas(windowWidth, windowHeight);
	starBlob = new StarBlob(getMaxLength());
	sadPerson = loadImage('images/sad person.png');
}

function draw() {
	background("purple");
	starBlob.draw();
	image(starBlob.graphic,
		windowWidth / 2 - starBlob.maxLength / 2, windowHeight / 2 - starBlob.maxLength / 2,
		starBlob.maxLength, starBlob.maxLength);
	image(sadPerson,
		windowWidth / 2 - widthInBlob() / 2, windowHeight / 2 - starBlob.radius / 2,
		widthInBlob(), starBlob.radius);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	starBlob.resize(getMaxLength());
}

function getMaxLength() {
	let percentageOfWindowLength = PERCENTAGE_OF_WINDOW_LENGTH;
	if (windowWidth < 600) { // make it look good on mobile
		percentageOfWindowLength = 1;
	}

	let maxLength = windowWidth * percentageOfWindowLength;
	if (maxLength > windowHeight * percentageOfWindowLength) { // make it look good in landsacpe mode
		maxLength = windowHeight * percentageOfWindowLength;
	}
	if (maxLength > 700) { // prevent image pixelation
		maxLength = 700;
	}

	return maxLength;
}

function widthInBlob() {
	return (sadPerson.width / sadPerson.height) * starBlob.radius;
}
