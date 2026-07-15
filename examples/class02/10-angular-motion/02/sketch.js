function setup() {
  createCanvas(400, 400);
  fill(255);
  noStroke();
}

function draw() {
  background(220);

  let freq = frameCount * 0.05;
  let amp = 150;
  let sinValue = sin(freq) * amp;
  let cosValue = cos(freq) * amp;

  let sinX = width / 2;
  let sinY = height / 2 + sinValue;

  let cosX = width / 2 + cosValue;
  let cosY = height / 2;

  fill(255, 0, 0);
  circle(sinX, sinY, 20);
  text("sine: " + round(sinValue), sinX + 40, sinY);

  fill(0, 0, 255);
  circle(cosX, cosY, 20);
  text("cosine: " + round(cosValue), cosX, cosY + 40);

  fill(255, 255, 0);
  circle(cosX, sinY, 10); // angular motion!
}