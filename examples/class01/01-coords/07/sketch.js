function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // environment variables
  circle(width / 2, height / 2, 100);
  circle(mouseX, mouseY, 50);

  text(frameCount, 10, 20);
}