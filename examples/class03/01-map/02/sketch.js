function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let x = width / 2;
  let y = height / 2;
  let w = map(mouseX, 0, width, 100, 300);
  let h = map(mouseY, 0, height, 100, 300);

  ellipse(x, y, w, h);
}
