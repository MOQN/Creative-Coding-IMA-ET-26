let r, g, b;
let thickness;

function setup() {
  createCanvas(800, 800);
  r = 0;
  g = 0;
  b = 0;
  thickness = 1;
}

function draw() {
  background(240);

  for (let y = 100; y <= 600; y += 30) {
    //r = map(y, 100, 600, 0, 255);
    //g = map(y, 100, 600, 0, 255);
    //b = map(y, 100, 600, 0, 255);
    stroke(r, g, b);

    //thickness = map(y, 100, 600, 1, 8);
    strokeWeight(thickness);

    line(100, y, 700, y);
  }

  fill(0);
  noStroke();
  textSize(32);
  text("Rhythm.", 100, 670);

  noLoop();
}