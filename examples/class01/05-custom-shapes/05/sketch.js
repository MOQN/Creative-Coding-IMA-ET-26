function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  noFill();
  stroke(255, 0, 255);

  beginShape();
  vertex(100, 100);
  vertex(300, 120);
  vertex(100, 140);
  vertex(300, 160);
  vertex(100, 180);
  vertex(300, 200);
  vertex(100, 220);
  vertex(300, 240);
  vertex(100, 260);
  vertex(300, 280);
  vertex(100, 300);
  endShape();
  // intentionally don't close the shape
}