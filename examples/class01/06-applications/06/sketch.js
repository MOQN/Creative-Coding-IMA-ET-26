// More applications
// by Prof. Marcela Godoy
// from Creative Coding Lab
// IMA, NYU Shanghai

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);

  noStroke();
  fill(255, 255, 0);
  circle(100, 150, 10);
  circle(300, 150, 10);
  arc(200, 200, 50, 50, PI * 0.0, PI * 1.0);

  // draw circles with diverse colors names
  noFill();
  strokeWeight(2);
  stroke("Pink");
  circle(width / 2, height / 2, 350);
  stroke("LightPink");
  circle(width / 2, height / 2, 370);
  stroke("HotPink");
  circle(width / 2, height / 2, 390);
  stroke("DeepPink");
  circle(width / 2, height / 2, 410);
  stroke("MediumVioletRed");
  circle(width / 2, height / 2, 430);
  stroke("PaleVioletRed");
  circle(width / 2, height / 2, 450);
}