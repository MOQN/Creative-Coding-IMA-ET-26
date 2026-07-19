let r, g, b;
let shapeSize;

function setup() {
  createCanvas(800, 800);
  r = 0;
  g = 0;
  b = 0;
  thickness = 1;
  shapeSize = 15;
}

function draw() {
  background(240);

  let gridSize = 30;
  for (let i = 0; i < 100; i++) {
    r = random(0, 255);
    g = 0;
    b = random(0, 255);

    stroke(r, g, b);

    thickness = random(0.1, 1.5);
    strokeWeight(thickness);

    line(100, random(100, 600), 700, random(100, 600));

  }

  fill(0);
  noStroke();
  textSize(32);
  text("Random.", 100, 700);

  noLoop();
}