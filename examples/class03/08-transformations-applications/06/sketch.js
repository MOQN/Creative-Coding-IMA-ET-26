function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  // try 60, 72, 90, or 120 angle increment!
  for (let angle = 0; angle < 360; angle += 60) {
    for (let x = 30; x <= 150; x += 30) {
      push();
      translate(width / 2, height / 2);
      rotate(angle);
      let dia = 25;
      //dia = map(x, 30, 150, 30, 5);
      circle(x, 0, dia);
      pop();
    }
  }
}
