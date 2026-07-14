// https://www.w3schools.com/colors/colors_names.asp
// https://htmlcolorcodes.com/color-names/

let color1 = "LightCoral";
let color2 = "Moccasin";
let color3 = "DarkOrchid";
let color4 = "SeaGreen";
let color5 = "PowderBlue";

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);

  noStroke();
  fill(color1);
  ellipse(width / 2, height / 2, 300, 300);
  fill(color2);
  ellipse(width / 2, height / 2, 250, 250);
  fill(color3);
  ellipse(width / 2, height / 2, 200, 200);
  fill(color4);
  ellipse(width / 2, height / 2, 150, 150);
  fill(color5);
  ellipse(width / 2, height / 2, 100, 100);
}