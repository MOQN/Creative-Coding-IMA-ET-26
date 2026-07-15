let angle = 0;

function setup() {
  createCanvas(800, 600);
  background(0);

  angleMode(DEGREES);

  noStroke();
  fill(255);
}

function draw() {
  // angle, frequency
  angle = angle + 1;

  // sine value for radial distance
  let sineValue = sin(angle * 6) * 80;

  // noise value for radial distance
  let noiseValue = noise(frameCount * 0.5) * 30;

  // amplitude, radial distance
  let radDist = 150 + sineValue + noiseValue;

  let x = width / 2 + cos(angle) * radDist;
  let y = height / 2 + sin(angle) * radDist;

  circle(x, y, 5);
}
