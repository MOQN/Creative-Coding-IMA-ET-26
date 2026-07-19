let angle = 0;
let angleVel = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  angle += angleVel;

  // GOOD!
  // use translate()
  // before rotate() or scale()!

  translate(mouseX, mouseY);
  rotate(radians(angle));
  ellipse(0, 0, 80, 30);
}