function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  let x = 90; // radial distance

  // try 60, 72, 90, or 120 angle increment!
  for (let angle = 0; angle < 360; angle += 72) {
    push();
    translate(width / 2, height / 2);
    rotate(angle);
    ellipse(x, 0, 30, 120);
    pop();
  }
}
