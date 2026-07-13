function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  strokeWeight(5);
  stroke(255, 255, 0);
  fill(0, 255, 255);

  beginShape();
  vertex(406, 38);
  vertex(270, 352);
  vertex(586, 99);
  vertex(153, 104);
  vertex(536, 359);
  endShape(CLOSE);
}

// an event function that is called when the mouse is pressed
function mousePressed() {
  // Please copy and paste this code into p5.js web editor, check the Console!
  // Log the coordinates of the mouse click in the console with the format of a splineVertex() function!
  console.log("vertex(" + round(mouseX) + "," + round(mouseY) + ");");
}
