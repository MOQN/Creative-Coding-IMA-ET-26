function setup() {
  createCanvas(800, 400);
  background(0);
}

function draw() {
  // we don't draw the background
  // so that new visuals are drawn on top of the previous frames
  // background(0);

  if (mouseIsPressed) {
    // draw your own visuals here!
    stroke(255, 50);
    line(0, height / 2, mouseX, mouseY);
    line(width, height / 2, mouseX, mouseY);
  }
}

// run once when a key is pressed
function keyPressed() {
  if (key === "Backspace") {
    // clear the canvas when the backspace key is pressed
    background(0);
  }

  // save the canvas as a PNG file when the 's' key is pressed
  if (key === 's' || key === 'S') {
    saveCanvas('drawing', 'png');
  }
}