function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(245);

  noStroke();
  fill(0);

  // 3 times!
  for (let i = 0; i < 3; i++) {
    let x = 50;
    let y = 100 + i * 50;
    circle(x, y, 30);
  }

  // 5 times!
  for (let i = 0; i < 5; i++) {
    let x = 150;
    let y = 100 + i * 50;
    let dia = 30 + i * 5;
    circle(x, y, dia);
  }

  // 5 times!
  for (let i = 0; i < 5; i++) {
    let x = 250;
    let y = 100 + i * 50;
    let dia = map(i, 0, 4, 25, 5);
    // 0 to 4 as 5 is not included in the loop!
    circle(x, y, dia);
  }

  // we can make it dynamic with mouseY!
  let num = map(mouseY, 0, height, 0, 6);
  for (let i = 0; i < num; i++) {
    let x = 350;
    let y = 100 + i * 50;
    let dia = 20;
    circle(x, y, dia);
  }
}