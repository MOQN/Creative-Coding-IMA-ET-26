let x, y, dia;
let r, g, b, a;

function setup() {
  createCanvas(400, 400);
  background(220);

  x = width / 2;
  y = height / 2;
  dia = 150;

  r = 255;
  g = 255;
  b = 255;
  a = 255;
}

function draw() {

  // Comment in the following lines, and
  // Experiment with the output range values!

  // x = map(mouseX, 0, width, 300, 100);
  // dia = map(mouseY, 0, height, 50, 400);

  r = map(mouseX, 0, width, 255, 0);
  g = map(mouseX, 0, width, 0, 255);
  // b = map(mouseY, 0, height, 0, 255);
  // a = map(mouseY, 0, height, 255, 0);

  stroke(r, g, b);
  fill(r, g, b, a);
  circle(x, y, dia);
}