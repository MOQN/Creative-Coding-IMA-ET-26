function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);
  // time, frequency
  let t = frameCount * 0.1;

  let x1 = 100;
  let y1 = height / 2 + sin(t);
  ellipse(x1, y1, 30, 30);

  let x2 = 200;
  let y2 = height / 2 + sin(t) * 100;
  // 100 increases the amplitude
  ellipse(x2, y2, 30, 30);

  let x3 = 300;
  let y3 = map(sin(t), -1, 1, 0, 200);
  // the output range is mapped
  // between 0 and 200.
  ellipse(x3, y3, 30, 30);
}
