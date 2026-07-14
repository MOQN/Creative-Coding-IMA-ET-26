let dia;

function setup() {
  createCanvas(400, 400);
  background(220);

  dia = 200;
}

function draw() {
  background(220);

  // update the dia value
  if (mouseIsPressed) {
    dia = dia - 10;
  } else {
    dia = dia + 1;
  }

  // limit the value in the range 100 to 220
  dia = constrain(dia, 100, 220);

  // display the circle with the updated color
  circle(width / 2, height / 2, dia);
}
