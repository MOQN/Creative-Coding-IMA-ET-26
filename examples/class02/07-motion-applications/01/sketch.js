let r, g, b;

function setup() {
  createCanvas(400, 400);
  background(220);

  r = 255;
  g = 0;
  b = 255;
}

function draw() {
  background(220);

  // update the red value by mouse input
  if (mouseIsPressed) {
    // if mouse is pressed, increase the red value
    r = r + 3;
  } else {
    // if not, reduce it
    r = r - 2;
  }

  // limit the value in the range 0 to 255
  r = constrain(r, 0, 255);

  // display the circle with the updated color
  noStroke();
  fill(r, g, b);
  circle(width / 2, height / 2, 200);
}
