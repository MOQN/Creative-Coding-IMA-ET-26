function setup() {
  createCanvas(400, 400);
  background(100);
}

function draw() {
  //background(100);

  // clear the background if the spacebar is pressed.
  if (keyIsPressed && key == " ") {
    background(100);
  }

  // drawing effect
  if (mouseIsPressed) {
    noStroke();
    fill(0, 255, 0);
    ellipse(mouseX, mouseY, 30, 30);
  }

  // face
  stroke(0);
  fill(255);
  ellipse(width / 2, height / 2, 180, 120);
  circle(width / 2 - 50, height / 2 - 50, 30);
  circle(width / 2 + 50, height / 2 - 50, 30);
  arc(width / 2, height / 2, 100, 100, PI * 0.15, PI * 0.85);
}
