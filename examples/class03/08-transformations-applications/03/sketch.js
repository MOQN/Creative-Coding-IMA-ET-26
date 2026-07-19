function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  for (let angle = 0; angle < 360; angle += 30) {
    push();
    translate(width / 2, height / 2);
    rotate(angle);
    rect(0, 0, 120, 20);
    pop();
  }
}
