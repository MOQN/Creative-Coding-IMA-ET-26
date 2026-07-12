function setup() {
  // runs once, at the beginning
  createCanvas(400, 400);
}

function draw() {
  // loops continuously
  background(220);
  textSize(32);
  text(frameCount, 50, 100); // (txt, x, y)
}