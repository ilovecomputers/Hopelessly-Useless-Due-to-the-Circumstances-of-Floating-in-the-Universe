const PERCENTAGE_OF_WINDOW_LENGTH = 0.65;
const DELTA_FLOAT = 3;
const RATE_OF_CHANGE = 1;
let angle = 0;
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
		windowWidth / 2 - widthInBlob() / 2,
		(windowHeight / 2 - heightInBlob() / 2) + map(sin(radians(angle + 90)), 0, 1, -DELTA_FLOAT, DELTA_FLOAT * 2),
		widthInBlob(), heightInBlob());
	angle += RATE_OF_CHANGE;
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
	return (sadPerson.width / sadPerson.height) * heightInBlob();
}

// Trying to fit a rectangle in a circle with this formula.
// I tried my best to algebra, but idk if it's a correct formula
// I also shrank the image by the delta float to give it wiggle room
function heightInBlob() {
	return (sqrt((4 * sq(starBlob.blob.minLength)) / (1 + sq(sadPerson.width / sadPerson.height))) / 2) - DELTA_FLOAT * 3;
}
