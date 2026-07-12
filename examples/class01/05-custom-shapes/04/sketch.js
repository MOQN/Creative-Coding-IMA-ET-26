function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  noStroke();
  fill(0, 255, 255);

  beginShape();
  vertex(200, 100);
  vertex(100, 300);
  vertex(300, 300);
  endShape(CLOSE);
}