let r, g, b;
let thickness;
let shapeSize;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  r = 0;
  g = 0;
  b = 0;
  thickness = 1;
  shapeSize = 25;
}

function draw() {
  background(240);

  let gridSize = 30;
  for (let y = 100; y <= 600; y += gridSize) {
    for (let x = 100; x <= 700; x += gridSize) {

      // r = map(y, 100, 600, 0, 255);
      // g = map(y, 100, 600, 0, 255);
      // b = map(y, 100, 600, 0, 255);

      // thickness = map(y, 100, 600, 1, 8);

      // shapeSize = random(3, 25);
      // shapeSize = map(y, 100, 600, 20, 5);

      let maxAngle = map(x, 100, 700, 0, 30);
      let randomAngle = random(-maxAngle, maxAngle);
      push();

      translate(x, y);
      rotate(randomAngle);
      // scale(random(0.8, 1.2));

      // strokeWeight(thickness);
      stroke(r, g, b);

      rectMode(CENTER);
      rect(0, 0, shapeSize, shapeSize);

      pop();
    }
  }

  fill(0);
  noStroke();
  textSize(32);
  text("Transform.", 100, 700);

  noLoop();
}