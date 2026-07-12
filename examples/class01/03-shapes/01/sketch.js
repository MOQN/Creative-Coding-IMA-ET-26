function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // strokeWeight(px)
  strokeWeight(5);

  // point(x, y)
  point(100, 200);
  point(300, 200);

  // line(x1, y1, x2, y2)
  line(100, 100, 300, 300);
}