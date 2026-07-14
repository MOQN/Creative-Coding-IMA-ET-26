let x, y;
let speed;

function setup() {
  createCanvas(400, 400);
  background(220);

  x = 50;
  y = 200;
  speed = 40;
}

function draw() {
  //background(220);

  // update the position
  x = x + speed;

  // display the circle
  circle(x, y, 50);
}
