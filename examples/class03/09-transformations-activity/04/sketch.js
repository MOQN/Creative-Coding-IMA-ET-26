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
  background(20, 20, 40);

  let minRadDist = map(mouseX, 0, width, 250, -300, true);
  angleAdjustment = angleAdjustment + 0.1;

  for (let angle = 0; angle < 360; angle += 72) {
    for (let radDist = minRadDist; radDist < 300; radDist += 10) {

      r = map(angle, 0, 360, 0, 255);
      g = map(angle, 0, 360, 255, 0);
      b = map(angle, 0, 360, 100, 200);

      // thickness = map(angle, 0, 360, 1, 10);

      shapeSize = map(radDist, 100, 300, 60, 5);
      // shapeSize = random(10, 60);


      push();
      blendMode(ADD);
      translate(width / 2, height / 2 - 50);
      rotate(angle + angleAdjustment);
      noFill();
      stroke(r, g, b, 100);
      strokeWeight(thickness);
      rect(radDist, 0, shapeSize, shapeSize);
      pop();
    }
  }

  fill(255);
  noStroke();
  textSize(32);
  textAlign(CENTER);
  text("Bloom.", width / 2, 700);
}