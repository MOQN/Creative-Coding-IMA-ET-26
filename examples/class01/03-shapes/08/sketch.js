function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // rectMode(CENTER) is useful
  // when drawing with a circle,
  // because the circle is also drawn
  // from its center.

  rectMode(CENTER);
  rect(mouseX, mouseY, 150, 150);
  circle(mouseX, mouseY, 100);
}