function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // flipped!
  let x = map(mouseX, 0, width, width, 0);
  let y = height / 2;

  circle(x, y, 30);
}
