let x, y;
let xSpeed, ySpeed;

function setup() {
  createCanvas(400, 400);
  background(220);

  x = 50;
  y = 200;
  xSpeed = random(-5, 5);
  ySpeed = random(-5, 5);
}

function draw() {
  //background(220);

  // update the position
  x = x + xSpeed;
  y = y + ySpeed;

  // set x (or y) at the other edge of canvas
  // when the circle move out of the canvas
  if (x < 0) {
    x = width;
  } else if (x > width) {
    x = 0;
  }
  if (y < 0) {
    y = height;
  } else if (y > height) {
    y = 0;
  }

  // display the circle
  circle(x, y, 50);
}
