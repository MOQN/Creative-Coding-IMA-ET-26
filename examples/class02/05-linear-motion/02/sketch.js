let x, y;
let xSpeed, ySpeed;

function setup() {
  createCanvas(400, 400);
  background(220);

  x = 50;
  y = 200;
  xSpeed = 40;
  ySpeed = -10;
}

function draw() {
  //background(220);

  // update the position
  x = x + xSpeed;
  y = y + ySpeed;

  // display the circle
  circle(x, y, 50);
}
