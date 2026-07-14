let y = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);

  // Four circles are horizontally aligned
  // by the variable y.
  ellipse(width * 0.2, y, 30, 30); // 20% of width
  ellipse(width * 0.4, y, 30, 30); // 40% of width
  ellipse(width * 0.6, y, 30, 30); // 60% of width
  ellipse(width * 0.8, y, 30, 30); // 80% of width
}
