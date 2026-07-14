let a = 10;
let b = 20;

let term = "Summer";
let year = 2026;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // number addition
  let result = a + b;
  text(result, 10, 20);

  // string concatenation
  let combinedText1 = term + year;
  let combinedText2 = term + year + a;

  let combinedText3 = a + year + term;
  // Be careful! This will add a + year first,
  // then concatenate with term

  text(combinedText1, 10, 60);
  text(combinedText2, 10, 80);
  text(combinedText3, 10, 120);

  noLoop();
}