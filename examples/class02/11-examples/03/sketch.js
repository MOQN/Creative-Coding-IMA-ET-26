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
    noStroke();
    fill(random(255), 0, 255);

    let size = random(5, 100);
    ellipse(mouseX, mouseY, size, size * 0.5);
    ellipse(mouseX, mouseY, size * 0.5, size);
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