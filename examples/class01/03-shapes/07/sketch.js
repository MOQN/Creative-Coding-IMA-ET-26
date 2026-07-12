function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // draw rectangles with rectMode(CENTER)
  rectMode(CENTER);
  rect(width / 2, height / 2, 150, 150);
  rect(width / 2, height / 2, 100, 100);
}