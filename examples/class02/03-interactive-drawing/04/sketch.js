let shapeMode = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(50);

  if (keyIsPressed) {
    if (key == "c") {
      // circle
      shapeMode = 0;
    } else if (key == "r") {
      // rect
      shapeMode = 1;
    } else if (key == "t") {
      // triangle
      shapeMode = 2;
    }
  }

  fill(255);
  noStroke();
  if (shapeMode == 0) {
    ellipse(mouseX, mouseY, 40, 40);
  } else if (shapeMode == 1) {
    rect(mouseX, mouseY, 40, 40);
  } else if (shapeMode == 2) {
    triangle(
      mouseX + 0,
      mouseY - 20,
      mouseX - 20,
      mouseY + 20,
      mouseX + 20,
      mouseY + 20
    );
  }

  text("Press c, r, or t!", 10, 20);
}
