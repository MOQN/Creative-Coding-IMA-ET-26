function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  let r = map(mouseX, 0, width, 255, 0);
  let g = 0;
  let b = map(mouseY, 0, height, 0, 255);

  noStroke();
  fill(r, g, b);
  circle(mouseX, mouseY, 50);
}
