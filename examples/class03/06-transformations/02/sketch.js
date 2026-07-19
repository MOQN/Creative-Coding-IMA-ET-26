function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  translate(mouseX, mouseY);
  circle(-30, -30, 40);
  circle(30, -30, 40);
  circle(-30, 30, 40);
  circle(30, 30, 40);
}