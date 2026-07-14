let x, y;
let xSpeed, ySpeed;

function setup() {
  createCanvas(400, 400);
  background(220);

  x = width / 2;
  y = height / 2;
  xSpeed = random(-5, 5);
  ySpeed = random(-5, 5);
}

function draw() {
  //background(220);

  // update the position
  x = x + xSpeed;
  y = y + ySpeed;

  // display the circle
  circle(x, y, 50);
}
