let angle = 0;
let angleVel = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  angle += angleVel;

  // WRONG!
  // this will rotate the ellipse
  // around the origin (0, 0)

  rotate(radians(angle));
  ellipse(mouseX, mouseY, 80, 30);
}