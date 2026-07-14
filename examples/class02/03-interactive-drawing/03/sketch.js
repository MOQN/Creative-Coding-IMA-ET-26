let r, g, b;

function setup() {
  createCanvas(800, 400);
  background(100);

  r = 255;
  g = 255;
  b = 255;

  // display instructions
  fill(255);
  text("Press R, G or B to change the color", 10, 20);
}

function draw() {
  //background(100);

  if (keyIsPressed) {
    if (key == "r" || key == "R") {
      r = 255;
      g = 0;
      b = 0;
    } else if (key == "g" || key == "G") {
      r = 0;
      g = 255;
      b = 0;
    } else if (key == "b" || key == "B") {
      r = 0;
      g = 0;
      b = 255;
    } else if (key == " ") {
      background(100);
    }
  }

  // drawing effect
  noStroke();
  fill(r, g, b);
  ellipse(mouseX, mouseY, 30, 30);

  // face
  stroke(0);
  fill(255);
  ellipse(width / 2, height / 2, 180, 120);
  circle(width / 2 - 50, height / 2 - 50, 30);
  circle(width / 2 + 50, height / 2 - 50, 30);
  arc(width / 2, height / 2, 100, 100, PI * 0.15, PI * 0.85);
}
