let r, g, b;
let thickness;

function setup() {
  createCanvas(400, 400);
  background(50);

  r = 255;
  g = 100;
  b = 120;
  thickness = 10;
}

function draw() {
  if (mouseIsPressed) {
    stroke(r, g, b);
    strokeWeight(thickness);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}