function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(245);

  noStroke();
  fill(0);

  // focus on the range and increment (or decrement) of the angle!
  for (let deg = 0; deg < 360; deg += 30) {
    let angle = radians(deg);
    let radDist = 100; // Radial Distance
    let x = 200 + cos(angle) * radDist;
    let y = 150 + sin(angle) * radDist;
    ellipse(x, y, 8, 8);
  }

  // Let's use nested loops for the increment of the radian distance and diameter!
  for (let i = 0; i < 3; i++) {
    for (let deg = 0; deg < 360; deg += 30) {
      let angle = radians(deg);
      let radDist = 50 + i * 25; // ***
      let x = 200 + cos(angle) * radDist;
      let y = 450 + sin(angle) * radDist;
      let dia = 10 - i * 2; // ***
      ellipse(x, y, dia, dia);
    }
  }
}