let r, g, b;

function setup() {
  createCanvas(800, 400);
  background(100);

  r = 255;
  g = 255;
  b = 255;
}

function draw() {
  //background(100);

  if (mouseIsPressed) {
    if (mouseX > 10 && mouseX < 50 && mouseY > 10 && mouseY < 50) {
      // pink
      r = 255;
      g = 0;
      b = 255;
    } else if (mouseX > 10 && mouseX < 50 && mouseY > 50 && mouseY < 90) {
      r = 0;
      g = 255;
      b = 0;
    }
  }

  // draw an ellipse
  if (mouseIsPressed) {
    noStroke();
    fill(r, g, b);
    ellipse(mouseX, mouseY, 30, 30);
  }

  // display rects for the area
  stroke(255);
  fill(255, 0, 255);
  rect(10, 10, 40, 40);
  fill(0, 255, 0);
  rect(10, 50, 40, 40);

  // face
  stroke(0);
  fill(255);
  ellipse(width / 2, height / 2, 180, 120);
  circle(width / 2 - 50, height / 2 - 50, 30);
  circle(width / 2 + 50, height / 2 - 50, 30);
  arc(width / 2, height / 2, 100, 100, PI * 0.15, PI * 0.85);
}
