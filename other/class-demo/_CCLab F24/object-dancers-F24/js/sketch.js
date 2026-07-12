//Dancers array - all objects will appear here
let dancers = [];

//The index to look in the array
let nextDancerIndex = 0;

//Array to store the smoke objects
let smoke = [];

//Variables for the strobe light effect
let strobe = false;
let strobePeriod = 4;

let gif;

function preload() {
  gif = loadImage("assets/discoball.gif");
}

function setup() {
  //Set the size of the canvas to the whole window
  createCanvas(windowWidth, windowHeight);

  //Set the height of the floor
  floorY = height * 0.6;
}

function draw() {
  background(0);

  //Draw functions for floor, dancers, lights, and smoke
  drawFloor();
  drawDancers();
  drawDiscoBall();
  drawLights();
  drawSmoke();
}

function keyPressed() {
  if (key == "a" || key == "A") {
    //When "a" is pressed, a new dancer will appear on mouseX and mouseY position
    let newDancer = new dancerClasses[nextDancerIndex](mouseX, mouseY);
    console.log(newDancer.constructor.name + " entered!");

    //Push a new dancer in the dancers array
    dancers.push(newDancer);

    //Accumulate +1 on the nextDancerIndex (reset to the lenght of the array)
    nextDancerIndex = (nextDancerIndex + 1) % dancerClasses.length;
  }
  //If "d" is pressed the last dancer will be removed
  if (key == "d" || key == "D") {
    if (0 < dancers.length) {
      for (let i = 0; i < dancers.length; i++) {
        dancers.splice(i, 1);
        break;
      }
    }
  }

  if (key == "s" || key == "S") {
    //Push new smoke
    for (let i = 0; i < 10; i++) {
      smoke.push(new Smoke(width, height));
    }
    //If there are more than 200 smoke objects, start removing from start
    if (200 < smoke.length) {
      smoke.shift();
    }
  }

  //Switch the strobe mode
  if (key == "l" || key == "L") {
    //Toggle the lights
    strobe = !strobe;
  }
  if (keyCode == DOWN_ARROW) {
    //Slower strobe
    strobePeriod += 1;
  }
  if (keyCode == UP_ARROW) {
    //Faster strobe
    if (strobePeriod > 2) {
      strobePeriod -= 1;
    }
  }
}

function drawFloor() {
  push();
  //Set up the floor lines
  let perspY = height * 0.3;
  let tileW = width / 30;

  for (let x = -150; x <= width + 150; x += tileW) {
    stroke(255);
    line(width / 2, perspY, x, height);
  }
  let dy = 5;
  let y = floorY;
  while (y <= height) {
    line(0, y, width, y);
    dy *= 1.05;
    y += dy;
  }

  fill(0);
  noStroke();

  //Masking shapes
  beginShape();
  vertex(-151, height);
  vertex(width / 2, perspY);
  vertex(-151, perspY);
  endShape();

  beginShape();
  vertex(width + 151, height);
  vertex(width / 2 + 1, perspY);
  vertex(width + 151, perspY);
  endShape();

  rect(0, 0, width, floorY);
  pop();
}

function drawDancers() {
  //For loop to update and display all dancers
  for (let i = 0; i < dancers.length; i++) {
    push();
    dancers[i].update();
    dancers[i].display();
    angleMode(RADIANS);

    // HACK: this is for push() without
    // a matching pop() in dancers
    while (0 < this._styles.length) {
      pop();
    }
  }
}

function drawLights() {
  push();
  //Control the strobing light effect (fast white rects on screen)
  if (strobe && frameCount % strobePeriod == 0) {
    fill(255, 127);
    rect(0, 0, width, height);
  }
  pop();
}

function drawSmoke() {
  push();
  //Run this to update and display the smoke objects
  for (let i = smoke.length - 1; i >= 0; i--) {
    let s = smoke[i];
    s.update();
    s.display();
    if (s.isDone) {
      smoke.splice(i, 1);
    }
  }
  pop();
}

function drawDiscoBall() {
  push();
  imageMode(CENTER);
  translate(width / 2, 70);
  scale(0.5);
  image(gif, 0, 0);
  pop();
}

//Class for the smoke
class Smoke {
  //Setup contructor properties
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.speedX = random(-width * 0.003, -width * 0.008); //keep moving towards to the left
    this.speedY = random(width * 0.001, -width * 0.003); //keep moving upwards
    this.size = random(width * 0.03, width * 0.15);
    this.opacity = random(120, 180);
    this.lifespan = 1.0;
    this.lifeReduction = random(0.002, 0.008);
    this.isDone = false;
  }
  //Update moves the objects from
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedX *= 0.99;
    this.speedY *= 0.99;
    //
    if (this.lifespan > 0) {
      this.lifespan -= this.lifeReduction;
    } else {
      this.lifespan = 0;
      this.isDone = true;
    }
  }
  display() {
    //The object disappears over time (transparency)
    //The object disappears over time (transparency)
    fill(255, this.opacity * this.lifespan);
    noStroke();
    ellipse(this.x, this.y, this.size * this.lifespan);
  }
}
