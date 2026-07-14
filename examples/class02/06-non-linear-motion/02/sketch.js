let x, y;
let speed;
let acceleration;

function setup() {
  createCanvas(400, 400);
  background(220);

  x = 50;
  y = 200;
  speed = 10;
  acceleration = 30;
}

function draw() {
  //background(220);

  // update the speed
  speed = speed + acceleration;

  // update the position
  x = x + speed;

  // display the circle
  circle(x, y, 50);
}
