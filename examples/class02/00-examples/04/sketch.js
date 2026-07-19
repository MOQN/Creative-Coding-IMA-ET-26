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

    strokeWeight(random(3, 10));
    stroke(0, random(100, 255), random(100, 255));
    // draw a line from the previous mouse position to the current mouse position
    line(mouseX, mouseY, pmouseX, pmouseY);
    // mirrored!
    line(width - mouseX, mouseY, width - pmouseX, pmouseY);
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