// Creative Coding Lab, IMA, NYU Shanghai
// by Prof. Gottfried Haider

let x, y;
let xSpd, ySpd;
let xAcc, yAcc;

function setup() {
  createCanvas(400, 400);
  background(220);

  x = 0;
  y = height / 2;
  xSpd = 0;
  ySpd = 0;
  xAcc = 1;
  yAcc = 0;
}

function draw() {
  background(220);

  if (x > width / 2 && xSpd > 0) {
    // change the acceleration when we go
    // right and we're past the middle line
    xAcc = -1;
  } else if (x < width / 2 && xSpd < 0) {
    // and also the other way
    xAcc = 1;
  }

  // update the speed
  xSpd = xSpd + xAcc;
  ySpd = ySpd + yAcc;

  // update the position
  x = x + xSpd;
  y = y + ySpd;

  // display the circle
  circle(x, y, 50);

  // display the speed and acceleration on x
  text("SPD: " + xSpd, 10, 20);
  text("ACC: " + xAcc, 10, 40);
}
