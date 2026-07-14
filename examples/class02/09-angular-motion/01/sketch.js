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

  let x = width / 2;
  let y = height / 2 + sinValue;

  fill(255, 0, 0);
  circle(x, y, 20);

  text("sine: " + round(sinValue), x + 40, y);
}