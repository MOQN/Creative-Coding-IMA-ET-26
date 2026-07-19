let x, y;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(50);

  noFill();
  stroke(255);
  circle(x, y, 50);
  circle(x, y, 100);
  circle(x, y, 150);
  circle(x, y, 200);
  circle(x, y, 250);
  circle(x, y, 300);

  noLoop(); // stop draw() from looping
}