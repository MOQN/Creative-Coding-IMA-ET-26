function setup() {
  createCanvas(800, 400);

  // you can set the angle mode to DEGREES for using degrees instead of radians.
  angleMode(DEGREES);
}

function draw() {
  background(220);

  // if you successfully draw an arc, you can simply comment out the ellipse() function,
  // as it is just a guide for the arc.

  //stroke(255, 0, 255);
  //strokeWeight(1);
  //ellipse(width / 2, height / 2, 300, 200); // ellipse(x, y, w, h)

  fill(255, 100); // indicate the fill area of the arc
  stroke(0, 0, 255);
  strokeWeight(10);
  arc(width / 2, height / 2, 300, 200, 0, 180);

  // draw two points for eyes
  point(width / 2 - 50, 150);
  point(width / 2 + 50, 150);
}