let angle = 0;
let radDist = 10;

function setup() {
  createCanvas(400, 500);
  background(50);
}

function draw() {
  background(50, 10);

  angle = angle + radians(72.8); // freq
  radDist = radDist + 0.5; // radial distance, amp

  let sinValue = sin(angle) * radDist;
  let cosValue = cos(angle) * radDist;
  let x = width / 2 + cosValue;
  let y = height / 2 + sinValue;

  noStroke();
  circle(x, y, 3);
}