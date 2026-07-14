let r, g, b;

function setup() {
  createCanvas(400, 400);
  background(200);

  r = 255; //red
  g = 255; //green
  b = 255; //blue   // white color
}

function draw() {
  //background(200);

  // change the color based on mouseY
  if (mouseY < 100) {
    // salmon color
    r = 250;
    g = 128;
    b = 144;
  } else if (mouseY > 300) {
    // purple
    r = 142;
    g = 68;
    b = 173;
  } else {
    // white
    r = 255;
    g = 255;
    b = 255;
  }

  noStroke();
  fill(r, g, b);
  ellipse(mouseX, mouseY, 30, 30);
}
