function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let freq = frameCount * 0.05; // time
  let sinValue = sin(freq);

  let x = width / 2;
  let y = height / 2;

  // map the sine value to a color range
  let r = map(sinValue, -1, 1, 0, 255);
  let g = 255;
  let b = map(sinValue, -1, 1, 255, 150);

  noStroke();
  fill(r, 0, b);
  circle(x, y, 300);
}