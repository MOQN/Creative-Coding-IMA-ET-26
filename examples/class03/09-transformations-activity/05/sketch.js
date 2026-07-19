let x, y, w, h;
let angle;
let r, g, b;
let thickness;


function setup() {
  createCanvas(800, 800);
  background(20, 20, 40);
  angleMode(DEGREES);

  x = 0;
  y = 0;
  w = 100;
  h = 100;

  angle = 0;

  r = 255;
  g = 255;
  b = 255;

  thickness = 1;
}

function draw() {
  // no background() here so that the pattern builds up over time!

  // update values
  x = x - 0.5;

  w = w + 1;
  h = h - 0.5;

  angle = angle + 72.1;

  r = map(mouseX, 0, 360, 0, 255);
  g = 10;
  b = map(mouseY, 0, 360, 100, 200);

  // display the pattern
  push();
  blendMode(ADD);
  translate(width / 2, height / 2);
  rotate(angle);
  noFill();
  stroke(r, g, b, 100);
  strokeWeight(thickness);
  rect(x, y, w, h);
  pop();
}