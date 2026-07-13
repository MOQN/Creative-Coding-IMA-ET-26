function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  strokeWeight(10);
  stroke(255, 255, 0);
  fill(0, 255, 255);

  beginShape();
  splineVertex(433, 30);
  splineVertex(561, 88);
  splineVertex(680, 110);
  splineVertex(580, 158);
  splineVertex(694, 193);
  splineVertex(611, 206);
  splineVertex(680, 263);
  splineVertex(561, 267);
  splineVertex(587, 366);
  splineVertex(469, 296);
  splineVertex(398, 352);
  splineVertex(371, 251);
  splineVertex(288, 313);
  splineVertex(325, 226);
  splineVertex(184, 230);
  splineVertex(295, 120);
  splineVertex(186, 63);
  splineVertex(353, 76);
  splineVertex(383, 13);
  endShape(CLOSE);
}

// an event function that is called when the mouse is pressed
function mousePressed() {
  // Please copy and paste this code into p5.js web editor, check the Console!
  // Log the coordinates of the mouse click in the console with the format of a splineVertex() function!
  console.log("splineVertex(" + round(mouseX) + "," + round(mouseY) + ");");
}
