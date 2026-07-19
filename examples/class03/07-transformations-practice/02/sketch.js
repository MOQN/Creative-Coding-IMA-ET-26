let angle = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(220);

  angle += 1;

  // the 1st shape
  push();
  translate(width / 2, height / 2);
  rotate(angle);
  fill(255, 0, 0);
  rect(0, 0, 120, 80);
  pop();

  // 2nd
  push();
  translate(100, 100);
  rotate(angle * -3);
  noFill();
  strokeWeight(4);
  stroke(0, 255, 255);
  rect(0, 0, 200, 20);
  pop();
}