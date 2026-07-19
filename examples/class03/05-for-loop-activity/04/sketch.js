let r, g, b;
let thickness;
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
  for (let i = 0; i < 500; i++) {
    let x = width / 2 + random(-300, 300);
    let y = height / 2 - 50 + random(-250, 250);

    r = map(y, 100, 600, 255, 0);
    g = 255;
    b = map(y, 100, 600, 0, 255);

    fill(r, g, b);
    //stroke(r, g, b);

    // if (random() < 0.50) {
    //   noStroke();
    //   fill(r, g, b);
    // } else {
    //   noFill();
    //   stroke(r, g, b);
    // }

    // thickness = map(y, 100, 600, 1, 8);
    // strokeWeight(thickness);

    shapeSize = random(3, 100);
    // shapeSize = map(y, 100, 600, 20, 5);

    // rectMode(CENTER);
    // rect(x, y, shapeSize, shapeSize);

    circle(x, y, shapeSize);

  }

  fill(0);
  noStroke();
  textSize(32);
  text("Random.", 100, 700);

  noLoop();
}