let r, g, b;
let button1X, button1Y;
let button2X, button2Y;
let buttonSize;

function setup() {
  createCanvas(800, 400);
  background(100);

  r = 255;
  g = 255;
  b = 255;

  button1X = 10;
  button1Y = 10;
  button2X = 10;
  button2Y = 50;
  buttonSize = 40;
}

function draw() {
  if (mouseIsPressed) {
    if (
      mouseX > button1X &&
      mouseX < button1X + buttonSize &&
      mouseY > button1Y &&
      mouseY < button1Y + buttonSize
    ) {
      // pink
      r = 255;
      g = 0;
      b = 255;
    } else if (
      mouseX > button2X &&
      mouseX < button2X + buttonSize &&
      mouseY > button2Y &&
      mouseY < button2Y + buttonSize
    ) {
      r = 0;
      g = 255;
      b = 0;
    }
  }

  // draw an ellipse
  noStroke();
  fill(r, g, b);
  ellipse(mouseX, mouseY, 30, 30);

  // display rects for the area
  stroke(255);
  fill(255, 0, 255);
  rect(10, 10, 40, 40);
  fill(0, 255, 0);
  rect(10, 50, 40, 40);

  // face
  stroke(0);
  fill(255);
  ellipse(width / 2, height / 2, 180, 120);
  circle(width / 2 - 50, height / 2 - 50, 30);
  circle(width / 2 + 50, height / 2 - 50, 30);
  arc(width / 2, height / 2, 100, 100, PI * 0.15, PI * 0.85);
}
