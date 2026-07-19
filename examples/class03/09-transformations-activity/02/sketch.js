let r, g, b;
let thickness;
let shapeSize;
let radialDistance;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  r = 255;
  g = 255;
  b = 255;
  thickness = 1;
  shapeSize = 25;
  radialDistance = 180;
}

function draw() {
  background(240);

  for (let angle = 0; angle < 360; angle += 10) {

    // r = map(angle, 0, 360, 0, 255);
    // g = map(angle, 0, 360, 255, 0);
    // b = map(angle, 0, 360, 100, 200);

    // thickness = map(angle, 0, 360, 1, 10);

    // radialDistance = map(angle, 0, 360, 0, 200);

    shapeSize = map(angle, 0, 360, 10, 60);
    // shapeSize = random(10, 60);

    push();
    translate(width / 2, height / 2 - 50);
    rotate(angle + 90);
    fill(r, g, b);
    stroke(0);
    strokeWeight(thickness);
    ellipse(radialDistance, 0, shapeSize, shapeSize);
    pop();
  }

  fill(0);
  noStroke();
  textSize(32);
  textAlign(CENTER);
  text("Circulate.", width / 2, 700);

  noLoop();
}