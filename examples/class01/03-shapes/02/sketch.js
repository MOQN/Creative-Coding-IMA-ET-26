function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // draw a line from the center to the mouse
  line(width / 2, height / 2, mouseX, mouseY);
}