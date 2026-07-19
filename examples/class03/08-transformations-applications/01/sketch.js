let angle = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(20, 20, 40);

  angle = angle + 1;

  push();

  // the origin to the center of the canvas
  translate(width / 2, height / 2);
  rotate(angle);

  // the Sun (?)
  fill(255, 200, 0);
  stroke(255, 0, 0);
  circle(random(-1, 1), random(-1, 1), 80);

  // the Earth (?)
  fill(50, 150, 255);
  stroke(0, 255, 0);
  circle(150, 0, 30); // x is 150!

  pop();
}