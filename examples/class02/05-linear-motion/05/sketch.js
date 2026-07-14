let x, y;
let xSpeed, ySpeed;
let dia;

function setup() {
  createCanvas(400, 400);
  background(220);

  x = 250;
  y = 200;
  xSpeed = random(-5, 5);
  ySpeed = random(-5, 5);
  dia = 30;
}

function draw() {
  //background(220);

  // update the position
  x = x + xSpeed;
  y = y + ySpeed;

  // change the direction
  if (x < 0 || x > width) {
    xSpeed = xSpeed * -1;
  }
  if (y < 0 || y > height) {
    ySpeed = ySpeed * -1;
  }

  // display the circle
  circle(x, y, dia);
}
