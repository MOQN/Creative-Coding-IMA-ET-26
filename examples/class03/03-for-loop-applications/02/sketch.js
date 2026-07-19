function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(245);

  // focus on the range and
  // increment (or decrement) value
  stroke(0);
  strokeWeight(1);
  for (let x = 50; x <= 350; x += 20) {
    line(x, 100, x, 200);
  }

  for (let x = 50; x <= 350; x += 20) {
    let y = map(x, 50, 350, 250, 300);
    line(x, y, x, 350);
  }

  for (let x = 50; x <= 350; x += 20) {
    let sw = map(x, 50, 350, 2, 10);
    strokeWeight(sw);
    line(x, 400, x, 500);
  }
}