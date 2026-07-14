let x, y;

function setup() {
  createCanvas(400, 400);
  background(100);

  x = 0;
  y = height / 2;
}

function draw() {
  //background(100);

  x = x + 1;
  y = height / 2 + sin(x * 0.03) * 100;

  ellipse(x, y, 20, 20);
}
