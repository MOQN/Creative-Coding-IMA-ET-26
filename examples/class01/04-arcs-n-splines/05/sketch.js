function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  noFill();
  stroke(0, 0, 255);
  strokeWeight(10);

  // spline() requires 4 points, each with an x and y coordinate!
  // spline(x1, y1, x2, y2, x3, y3, x4, y4)
  spline(100, 200, 300, 350, 500, 50, 700, 200);
}