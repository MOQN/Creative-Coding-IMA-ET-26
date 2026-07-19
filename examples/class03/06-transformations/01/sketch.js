function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  circle(mouseX - 30, mouseY - 30, 40);
  circle(mouseX + 30, mouseY - 30, 40);
  circle(mouseX - 30, mouseY + 30, 40);
  circle(mouseX + 30, mouseY + 30, 40);
}