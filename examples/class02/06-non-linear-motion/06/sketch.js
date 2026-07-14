let x, y;
let xSpd, ySpd;
let xAcc, yAcc;

function setup() {
  createCanvas(800, 400);
  background(220);

  x = width / 2;
  y = height / 2;
  xSpd = 0;
  ySpd = 0;
  xAcc = 1;
  yAcc = 0;
}

function draw() {
  background(220);

  if (keyIsPressed) {
    // if key is pressed, increase the acceleration.
    if (key == 'w') {
      yAcc = yAcc - 0.1;
    }
    if (key == 's') {
      yAcc = yAcc + 0.1;
    }
    if (key == 'a') {
      xAcc = xAcc - 0.1;
    }
    if (key == 'd') {
      xAcc = xAcc + 0.1;
    }
  } else {
    // if not, remove the acceleration.
    xAcc = 0;
    yAcc = 0;
  }

  // update the speed
  xSpd = xSpd + xAcc;
  ySpd = ySpd + yAcc;

  // limit the speed
  xSpd = constrain(xSpd, -10, 10);
  ySpd = constrain(ySpd, -10, 10);

  // update the position
  x = x + xSpd;
  y = y + ySpd;

  // make it reappear
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

  // display the speed and acceleration on x
  text("xSpd: " + xSpd, 10, 20);
  text("ySpd: " + ySpd, 10, 40);
  text("xAcc: " + xAcc, 10, 70);
  text("yAcc: " + yAcc, 10, 90);
}
