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

  let dia = 50;

  circle(x, y, dia);
  dia += 50; // dia = dia + 50;

  circle(x, y, dia);
  dia += 50;

  circle(x, y, dia);
  dia += 50;

  circle(x, y, dia);
  dia += 50;

  circle(x, y, dia);
  dia += 50;

  circle(x, y, dia);
  dia += 50;

  noLoop(); // stop draw() from looping
}