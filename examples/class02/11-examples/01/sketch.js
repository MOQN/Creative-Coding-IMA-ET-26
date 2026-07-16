function setup() {
  createCanvas(800, 400);
  background(220);
}

function draw() {
  // we don't draw the background
  // so that new visuals are drawn on top of the previous frames
  // background(220);

  if (mouseIsPressed) {
    // draw your own visuals here!
    circle(mouseX, mouseY, random(5, 50));
  }
}

// run once when a key is pressed
function keyPressed() {
  if (key === "Backspace") {
    // clear the canvas when the backspace key is pressed
    background(220);
  }

  // save the canvas as a PNG file when the 's' key is pressed
  if (key === 's' || key === 'S') {
    saveCanvas('drawing', 'png');
  }
}