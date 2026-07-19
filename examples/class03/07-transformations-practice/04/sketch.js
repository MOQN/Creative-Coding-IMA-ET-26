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

  // 3rd
  push();
  translate(300, 300);
  rotate(frameCount * 2);
  fill(255, 255, 0);
  noStroke();
  ellipse(0, 0, 30, 100);
  ellipse(0, 0, 100, 30);
  pop();

  // 4th
  push();
  translate(100, 300);
  rotate(frameCount * 2);
  circle(0, 0, 30);
  circle(-30, 0, 30);
  circle(30, 0, 30);
  pop();
}