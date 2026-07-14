let color1R;
let color1G;
let color1B;

let color2R;
let color2G;
let color2B;

let color3R;
let color3G;
let color3B;

let color4R;
let color4G;
let color4B;

let color5R;
let color5G;
let color5B;

function setup() {
  createCanvas(400, 400);

  color1R = 255;
  color1G = 204;
  color1B = 0;

  color2R = random(255);
  color2G = random(255);
  color2B = random(255);

  color3R = 176;
  color3G = 7;
  color3B = 210;

  color4R = random(255);
  color4G = random(255);
  color4B = random(255);

  color5R = 3;
  color5G = 182;
  color5B = 251;
}

function draw() {
  background(200);

  noStroke();
  fill(color1R, color1G, color1B);
  rect(75, 50, 50, 300);
  fill(color2R, color2G, color2B);
  rect(125, 50, 50, 300);
  fill(color3R, color3G, color3B);
  rect(175, 50, 50, 300);
  fill(color4R, color4G, color4B);
  rect(225, 50, 50, 300);
  fill(color5R, color5G, color5B);
  rect(275, 50, 50, 300);
}
