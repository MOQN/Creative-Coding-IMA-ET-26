function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let freq = frameCount * 0.15; // time
  let sinValue = sin(freq);

  let x = width / 2;
  let y = height / 2;

  // map the sine value to a diameter range
  let dia = map(sinValue, -1, 1, 250, 300);

  noStroke();
  fill(0, 255, 255);
  circle(x, y, dia);
}