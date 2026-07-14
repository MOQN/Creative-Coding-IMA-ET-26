let dia = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);

  // change the diameter based on mouseX
  if (mouseX < 100) {
    dia = 50;
  } else if (mouseX < 200) {
    dia = 100;
  } else if (mouseX < 300) {
    dia = 70;
  } else {
    dia = 150;
  }

  fill(255, 255, 0); // yellow
  ellipse(mouseX, mouseY, dia, dia);
}
