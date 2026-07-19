function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // transformations!
  translate(mouseX, mouseY);
  rotate(radians(frameCount));
  scale(2.0);

  circle(-30, -30, 40);
  circle(30, -30, 40);
  circle(-30, 30, 40);
  circle(30, 30, 40);
}