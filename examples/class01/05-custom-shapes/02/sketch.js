function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  beginShape();
  vertex(100, 100);
  vertex(300, 100);
  vertex(300, 300);
  vertex(mouseX, mouseY);
  endShape(CLOSE);
  // CLOSE the shape,
  // connecting the last vertex to the first vertex, 
}