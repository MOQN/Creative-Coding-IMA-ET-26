let rectSize = 20;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);

  noStroke();
  for (let x = 0; x < width; x += rectSize) {
    fill(random(255), random(255), random(255));
    rect(x, 0, rectSize, height);
  }

  noLoop(); // stop draw() from looping
}