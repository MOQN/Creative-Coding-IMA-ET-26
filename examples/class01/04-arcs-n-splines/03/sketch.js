function setup() {
  createCanvas(800, 400);

  // you can set the angle mode to DEGREES for using degrees instead of radians.
  angleMode(DEGREES);
}

function draw() {
  background(220);

  noFill();

  // draw a ellipse as a guide for the arc
  stroke(255, 0, 255);
  strokeWeight(1);
  ellipse(width / 2, height / 2, 300, 300); // ellipse(x, y, w, h)

  // then draw an arc, adding two angles 
  stroke(0, 0, 255);
  strokeWeight(5);
  arc(width / 2, height / 2, 300, 300, 180, 270); // arc(x, y, w, h, startAngle, stopAngle)
}