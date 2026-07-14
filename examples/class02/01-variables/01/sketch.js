function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // center position
  fill(255, 0, 255); // pink
  ellipse(width / 2, height / 2, 20, 20);

  // relative positions from the center
  fill(0, 255, 255); // cyan
  ellipse(width / 2 - 100, height / 2, 50, 50);
  ellipse(width / 2 + 100, height / 2, 50, 50);
}
