function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  // x will work as radial distance
  // from the center of the canvas
  let x = map(mouseX, 0, width, 0, 200);

  for (let angle = 0; angle < 360; angle += 30) {
    push();
    translate(width / 2, height / 2);
    rotate(angle);
    rect(x, 0, 30, 30);
    pop();
  }
}
