let rectSize = 20;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);

  noStroke();
  for (let y = 0; y < height; y += rectSize) {
    for (let x = 0; x < width; x += rectSize) {
      fill(random(255), random(255), random(255));
      rect(x, y, rectSize, rectSize);
    }
  }

  noLoop(); // stop draw() from looping
}