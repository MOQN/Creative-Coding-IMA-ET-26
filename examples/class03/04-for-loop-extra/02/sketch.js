function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(245);

  noStroke();
  fill(0);

  let distance = dist(width / 2, height / 2, mouseX, mouseY);
  let numberOfIterations = floor(distance / 30);
  text(numberOfIterations, 10, 20);

  for (let i = 0; i < numberOfIterations; i++) {
    for (let deg = 0; deg < 360; deg += 30) {
      let angle = radians(deg);
      let radDist = 15 + i * 30; // ***
      let x = width / 2 + cos(angle) * radDist;
      let y = height / 2 + sin(angle) * radDist;
      let dia = map(i, 0, numberOfIterations, 5, 30);
      ellipse(x, y, dia, dia);
    }
  }
}
