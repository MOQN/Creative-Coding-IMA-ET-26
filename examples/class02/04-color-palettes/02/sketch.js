//https://p5js.org/reference/p5/color/

let color1;
let color2;
let color3;
let color4;
let color5;

function setup() {
  createCanvas(400, 400);

  color1 = color(255, 255, 255);
  color2 = color(224, 207, 225);
  color3 = color(134, 139, 205);
  color4 = color(122, 79, 161);
  color5 = color(79, 76, 121);
}

function draw() {
  background(200);

  noStroke();
  fill(color1);
  rect(75, 50, 50, 300);
  fill(color2);
  rect(125, 50, 50, 300);
  fill(color3);
  rect(175, 50, 50, 300);
  fill(color4);
  rect(225, 50, 50, 300);
  fill(color5);
  rect(275, 50, 50, 300);
}
