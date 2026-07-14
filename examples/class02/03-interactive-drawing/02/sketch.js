let r, g, b;

function setup() {
  createCanvas(400, 400);
  background(100);

  // generate a random color
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  if (keyIsPressed) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
  noStroke();
  fill(r, g, b);
  ellipse(mouseX, mouseY, 30, 30);
}
