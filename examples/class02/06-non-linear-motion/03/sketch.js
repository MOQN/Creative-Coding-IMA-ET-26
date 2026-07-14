let x, y;
let xSpd, ySpd;
let xAcc, yAcc;

function setup() {
  createCanvas(400, 400);
  background(220);

  x = 50;
  y = 50;
  xSpd = 0;
  ySpd = 0;
  xAcc = 30;
  yAcc = 10;
}

function draw() {
  //background(220);

  // update the speed
  xSpd = xSpd + xAcc;
  ySpd = ySpd + yAcc;

  // update the position
  x = x + xSpd;
  y = y + ySpd;

  // display the circle
  circle(x, y, 50);
}
