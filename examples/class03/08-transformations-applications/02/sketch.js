function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(240, 10);

  let angle = map(mouseY, 0, height, 0, 360);
  let scl = map(mouseX, 0, width, 0.1, 2.5);

  push();

  translate(width / 2, height / 2);
  rotate(angle);
  scale(scl);

  noFill();
  stroke(0, 150, 200);
  rect(0, 0, 200, 200);

  pop();
}