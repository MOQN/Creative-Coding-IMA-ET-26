function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  circle(mouseX, mouseY, 50);

  // get the mouse position
  text("x: " + round(mouseX), 10, 20);
  text("y: " + round(mouseY), 10, 40);
}