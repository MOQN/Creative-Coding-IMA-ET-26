let r, g, b;
let thickness;
let shapeSize;
let angleAdjustment;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  r = 255;
  g = 255;
  b = 255;
  thickness = 1;
  shapeSize = 25;
  angleAdjustment = 0;
}

function draw() {
  background(240);

  for (let angle = 0; angle < 360; angle += 45) {
    for (let radDist = 100; radDist < 300; radDist += 50) {
      // r = map(angle, 0, 360, 0, 255);
      // g = map(angle, 0, 360, 255, 0);
      // b = map(angle, 0, 360, 100, 200);

      // thickness = map(angle, 0, 360, 1, 10);

      shapeSize = map(radDist, 100, 300, 60, 5);
      // shapeSize = random(10, 60);

      // angleAdjustment = map(radDist, 100, 300, 0, 30);

      push();
      translate(width / 2, height / 2 - 50);
      rotate(angle + angleAdjustment);
      fill(r, g, b);
      stroke(0);
      strokeWeight(thickness);
      ellipse(radDist, 0, shapeSize, shapeSize);
      pop();
    }
  }

  fill(0);
  noStroke();
  textSize(32);
  textAlign(CENTER);
  text("Bloom.", width / 2, 700);

  noLoop();
}