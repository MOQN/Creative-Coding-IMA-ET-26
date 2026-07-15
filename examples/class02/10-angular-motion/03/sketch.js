let angle;
let angleVel;
let radDist;
let dia;

function setup() {
  frameRate(10);
  createCanvas(400, 400);
  background(220);

  angle = 0;
  angleVel = 0.2; // angular velocity
  radDist = 100; // radial distance
  dia = 30; // diameter
}

function draw() {
  //background(220);

  // update the angle
  angle = angle + angleVel;

  // calculate the position
  x = width / 2 + cos(angle) * radDist;
  y = height / 2 + sin(angle) * radDist;

  // display the circle
  circle(x, y, dia);
}
