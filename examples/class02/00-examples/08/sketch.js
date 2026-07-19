// Please copy and paste the code from the following examples into the p5.js web editor to develop it further!
// 
// You can also modify the code, where I indicated with `draw your own visuals here!` to experiment interactive drawings.
// 
// You can also add more modes by adding more `else if` statements after the existing ones!

let mode = 1;

function setup() {
  createCanvas(800, 400);
  background(0);
}

function draw() {
  // we don't draw the background
  // so that new visuals are drawn on top of the previous frames
  // background(0);

  if (mouseIsPressed) {
    if (mode === 1) {
      // draw your own visuals here!
      noStroke();
      fill(255);
      circle(mouseX, mouseY, 50);
    }
    else if (mode === 2) {
      // draw your own visuals here!
      noFill();
      stroke(random(255), random(255), random(255));
      rect(mouseX, mouseY, random(30, 60), random(30, 60));
    }
    else if (mode === 3) {
      // draw your own visuals here!
      // ...
    }
    else if (mode === 4) {
      // draw your own visuals here!
      // ...
    }
    else if (mode === 5) {
      // draw your own visuals here!
      // ...
    }
    // feel free to add more!!
  }
}

// run once when a key is pressed
function keyPressed() {
  // change the mode
  if (key === "1") {
    mode = 1;
  } else if (key === "2") {
    mode = 2;
  } else if (key === "3") {
    mode = 3;
  } else if (key === "4") {
    mode = 4;
  } else if (key === "5") {
    mode = 5;
  } else if (key === "6") {
    mode = 6;
  } else if (key === "7") {
    mode = 7;
  } else if (key === "8") {
    mode = 8;
  } else if (key === "9") {
    mode = 9;
  }

  // clear the canvas when the backspace key is pressed
  if (key === "Backspace") {
    background(0);
  }

  // save the canvas as a PNG file when the 's' key is pressed
  if (key === 's' || key === 'S') {
    saveCanvas('drawing', 'png');
  }
}