let x1 = 100;
let x2 = 300;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);

  stroke(255);
  line(x1, 100, x2, 100);
  line(x1, 150, x2, 150);
  line(x1, 200, x2, 200);
  line(x1, 250, x2, 250);
  line(x1, 300, x2, 300);
}