function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  noFill();
  stroke(255, 0, 255);

  beginShape();
  splineVertex(100, 100);
  splineVertex(300, 120);
  splineVertex(100, 140);
  splineVertex(300, 160);
  splineVertex(100, 180);
  splineVertex(300, 200);
  splineVertex(100, 220);
  splineVertex(300, 240);
  splineVertex(100, 260);
  splineVertex(300, 280);
  splineVertex(100, 300);
  endShape();
}