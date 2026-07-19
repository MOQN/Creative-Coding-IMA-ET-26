function setup() {
  createCanvas(400, 400);
}

function draw() {
  // 0, width   input: the range of mouseX
  // 0, 255     output: the range of color
  let b = map(mouseX, 0, width, 0, 255);
  background(b); // brightness
}