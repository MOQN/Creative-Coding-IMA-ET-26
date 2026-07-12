// More applications
// by Prof. Marcela Godoy
// from Creative Coding Lab
// IMA, NYU Shanghai

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(255, 0, 255);
  noStroke();

  // eyes
  circle(100, 150, 10);
  circle(300, 150, 10);

  // mouth
  arc(200, 200, 50, 50, PI * 0.0, PI * 1.0);
}