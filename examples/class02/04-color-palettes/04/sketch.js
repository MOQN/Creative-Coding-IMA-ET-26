let color1 = "#af43be";
let color2 = "#fd8090";
let color3 = "#c4ffff";
let color4 = "#08deea";
let color5 = "#1261d1";

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