let angle = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(220);

  angle += 1;

  push(); // start accumulating transformation and styling effects!
  translate(width / 2, height / 2);
  rotate(angle);
  fill(255, 0, 0);
  rect(0, 0, 120, 80); // draw a rect utilizing the effect.
  pop(); // remove the effects accumulated.
}