let leftEyeX = 120;
let rightEyeX = 280;
let eyeY = 150;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  ellipse(leftEyeX, eyeY, 100, 50);
  ellipse(leftEyeX, eyeY, 50, 50);

  ellipse(rightEyeX, eyeY, 100, 50);
  ellipse(rightEyeX, eyeY, 50, 50);
}
