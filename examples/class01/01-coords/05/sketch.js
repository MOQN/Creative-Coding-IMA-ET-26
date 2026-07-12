function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // circle(x, y, dia);
  circle(0, 0, 100);     // left top
  circle(400, 400, 100); // right bottom
  circle(350, 100, 50);  // right top
  circle(200, 200, 150); // center
}