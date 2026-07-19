function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  let gridSize = 25;
  for (let y = 50; y <= 350; y += gridSize) {
    for (let x = 50; x <= 350; x += gridSize) {
      push();
      translate(x, y);
      let angle = map(x, 50, 350, 0, 30);
      rotate(angle);
      //rotate(random(360));
      rectMode(CENTER);
      rect(0, 0, 20, 20);
      pop();
    }
  }

  noLoop();
}
