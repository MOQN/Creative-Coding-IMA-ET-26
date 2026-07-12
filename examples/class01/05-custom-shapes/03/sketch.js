function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // the order of the vertices matters!

  beginShape();
  vertex(100, 100);
  vertex(300, 100);
  vertex(mouseX, mouseY);
  vertex(300, 300);
  endShape(CLOSE);
}