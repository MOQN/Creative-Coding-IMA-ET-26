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

  for (let dia = 50; dia <= 300; dia += 50) {
    circle(x, y, dia);
  }

  noLoop(); // stop draw() from looping
}