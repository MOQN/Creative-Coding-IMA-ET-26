function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);

  // fill is the inside of a shape
  // stroke is the outline of a shape

  fill(0, 0, 255, 150); // blue with alpha
  stroke(0, 255, 0); // green
  circle(width / 2, height / 2, 250);
}