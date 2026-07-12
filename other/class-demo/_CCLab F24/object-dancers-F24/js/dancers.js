class MarlenaDancer {
  constructor(startX, startY) {
    this.originX = startX;
    this.originY = startY;
    this.x = startX;
    this.y = startY;
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.counter = 0;
    this.directionX = random(-10, 10);
    this.directionY = random(-10, 10);
  }

  update() {
    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);

    this.x += this.directionX;
    this.y += this.directionY;

    if (this.x + 30 > this.originX + 100) {
      this.directionX = random(-10, -1);
      this.counter++;
    }
    if (this.x - 30 < this.originX - 100) {
      this.directionX = random(1, 10);
      this.counter++;
    }
    if (this.y + 30 > this.originY + 100) {
      this.directionY = random(-10, -1);
      this.counter++;
    }
    if (this.y - 30 < this.originY - 100) {
      this.directionY = random(1, 10);
      this.counter++;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    this.drawFace(0, 0);
    pop();
    push()
    translate(this.originX, this.originY)
    //this.drawReferenceShapes();
    pop()
  }

  drawFace(x, y) {
    push();
    translate(x, y);
    fill(this.r, this.g, this.b);
    circle(0, 0, 50);
    fill(0);
    ellipse(-10, -10, 5, 10);
    ellipse(10, -10, 5, 10);
    noFill();
    stroke(0);
    strokeWeight(4);
    let mouthStart = 0
    if (this.counter < 10) {
      mouthStart = 0
    }
    if (this.counter >= 10) {
      mouthStart = PI
    }
    let mouthEnd = 0
    if (this.counter < 10) {
      mouthEnd = PI
    }
    if (this.counter >= 10) {
      mouthEnd = TWO_PI
    }
    if (this.counter == 20) {
      this.counter = 0
    }
    arc(0, 10, 25, 15, mouthStart, mouthEnd);
    pop();
  }
}

class SherylDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.r = 250;
    this.b = 0;
    this.movementX = 0
    this.movementY = 0;
  }
  update() {
    this.r = map(sin(frameCount * 0.01), -1, 1, 10, 255);
    this.b = map(mouseY, height / 3, (height * 2) / 3, 100, 250);
    if (mouseIsPressed) {
      this.movementX = cos(frameCount * 0.13) * 15;
      this.movementY = sin(frameCount * 0.13) * 80;
    } else {
      this.movementY = sin(frameCount * 0.13) * 15;
    }
  }
  display() {
    push();
    translate(this.x, this.y);

    this.drawStar(0, 0, 100, 50);
    this.drawEyes(-15, -10, 5);
    this.drawEyes(20, 0, 5);
    this.drawFace();

    pop();
  }

  drawStar(x, y, convex, concave) {
    push();
    translate(x, y);
    noStroke();
    fill(this.r, 200, this.b);
    beginShape();
    for (let angle = 0; angle <= 2 * PI; angle += PI / 5) {
      let xConvex = cos(angle) * convex;
      let yConvex = sin(angle) * convex;
      curveVertex(xConvex + this.movementX, yConvex + this.movementY);
      angle += PI / 5;
      let xConcave = cos(angle) * concave;
      let yConcave = sin(angle) * concave;
      curveVertex(xConcave + this.movementX, yConcave + this.movementY / 2);
    }
    endShape(CLOSE);
    pop();
  }

  drawEyes(x, y, dia) {
    fill(0);
    circle(x + this.movementX, y + (this.movementY * 2) / 3, dia);
  }
  drawFace() {
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(0 + this.movementX, 0 + (this.movementY * 2) / 3, 20, 25, 0 + (1 / 5) * PI, PI - (1 / 5) * PI, OPEN);
    line(-18 + this.movementX, -25 + (this.movementY * 2) / 3, -8 + this.movementX, -20 + (this.movementY * 2) / 3)
    line(18 + this.movementX, -15 + (this.movementY * 2) / 3, 28 + this.movementX, -20 + (this.movementY * 2) / 3)
  }


}

class FlorenceDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.size = 40;
    this.xMove = 0;
    this.xSpeed = 0.05;
    this.yMove = 0;
    this.ySpeed = 0.1;
    this.armAngle = 0;
    this.armSpeed = 0.1;
  }
  update() {
    this.dance();
    this.bounce();
    this.arm();
  }
  dance() {
    this.xMove = sin(frameCount * this.xSpeed) * 20;
  }

  bounce() {
    this.yMove = cos(frameCount * this.ySpeed) * 20;
  }

  arm() {
    this.armAngle = sin(frameCount * this.armSpeed) * PI / 16;
    this.armAngleTwo = cos(frameCount * this.armSpeed) * PI / 16;
  }

  display() {
    //Arm
    push();
    translate(this.x + this.xMove - this.size / 2, this.y + this.yMove + 10);
    rotate(this.armAngle);
    fill(192, 217, 166);
    rect(25, -15, 30, 8);
    fill(29, 84, 78);
    circle(55, -12, 13)
    rotate(this.armAngleTwo);
    fill(192, 217, 166);
    rect(-20, -15, 30, 8);
    fill(29, 84, 78);
    circle(-20, -12, 13);
    pop();

    //Body
    fill(192, 217, 166);
    ellipse(this.x + this.xMove, this.y + this.yMove, this.size, this.size * 0.6);
    fill(29, 84, 78);
    ellipse(this.x + this.xMove, this.y + this.yMove, this.size / 1.7, this.size * 0.6);

    //Head
    fill(192, 217, 166);
    ellipse(this.x + this.xMove, this.y - this.size / 2 + this.yMove, this.size * 0.6, this.size * 0.6);

    //Ears
    fill(29, 84, 78);
    ellipse(this.x + this.xMove - 11, this.y - this.size / 2 - 7 + this.yMove, 10, 20);
    ellipse(this.x + this.xMove + 11, this.y - this.size / 2 - 7 + this.yMove, 10, 20);

    //Eyes
    fill(255);
    circle(this.x + this.xMove - 5, this.y - this.size / 2 - 5 + this.yMove, 7);
    circle(this.x + this.xMove + 5, this.y - this.size / 2 - 5 + this.yMove, 7);
    fill(0);
    circle(this.x + this.xMove - 5, this.y - this.size / 2 - 5 + this.yMove, 2);
    circle(this.x + this.xMove + 5, this.y - this.size / 2 - 5 + this.yMove, 2);

    //Mouth
    noFill();
    stroke(0);
    arc(this.x + this.xMove, this.y - this.size / 2 + 5 + this.yMove, 10, 5, 0, PI);
    noStroke();
  }
}

class EmiMonkeDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;

    // Initial angles for arms, legs, and tail to simulate dancing motion
    this.armAngle = 0;
    this.legAngle = 0;
    this.tailAngle = 0;

    // Swing directions
    this.armSwingDirection = 1;
    this.legSwingDirection = -1;
    this.tailSwingDirection = 1;
  }

  update() {
    // Swing the arms and legs back and forth
    this.armAngle += 0.05 * this.armSwingDirection;
    this.legAngle += 0.03 * this.legSwingDirection;
    this.tailAngle += 0.02 * this.tailSwingDirection;

    // Reverse direction when reaching a certain angle
    if (this.armAngle > QUARTER_PI || this.armAngle < -QUARTER_PI) {
      this.armSwingDirection *= -1;
    }
    if (this.legAngle > PI / 8 || this.legAngle < -PI / 8) {
      this.legSwingDirection *= -1;
    }
    if (this.tailAngle > PI / 16 || this.tailAngle < -PI / 16) {
      this.tailSwingDirection *= -1;
    }
  }

  display() {
    push();
    translate(this.x, this.y);

    // Body
    fill(139, 69, 19);
    ellipse(0, 0, 60, 80); // body

    // Head with ears
    fill(160, 82, 45);
    ellipse(0, -50, 50, 50); // head

    // Ears
    fill(160, 82, 45);
    ellipse(-30, -50, 20, 30); // left ear
    ellipse(30, -50, 20, 30);  // rihgt ear

    // Eyes and mouth on head
    fill(0);
    ellipse(-10, -55, 5, 5); // left eye
    ellipse(10, -55, 5, 5);  // right eye
    noFill();
    arc(0, -45, 20, 15, 0, PI); // mouth

    // Arms
    fill(139, 69, 19);
    push();
    rotate(this.armAngle);
    rect(-50, -20, 50, 10, 5); // left arm
    pop();
    push();
    rotate(-this.armAngle);
    rect(0, -20, 50, 10, 5); // right arm
    pop();

    // Legs
    fill(139, 69, 19);
    push();
    rotate(this.legAngle);
    rect(-30, 40, 10, 50, 5); // left leg
    pop();
    push();
    rotate(-this.legAngle);
    rect(20, 40, 10, 50, 5); // right leg
    pop();

    // Tail
    push();
    rotate(this.tailAngle);
    stroke(160, 82, 45);
    strokeWeight(4);
    noFill();
    arc(-20, 40, 40, 60, 0, PI); // curved tail
    pop();

    pop();
  }
}

class ZaraDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.angle = 0;
    this.angleArm = 0;
    this.angleArmDirection = 1;
    this.tutuSway = 0;

    this.spots = [];
    for (let i = 0; i < 6; i++) {
      let spotX = random(-20, 20);
      let spotY = random(-40, 30);
      let spotSize = random(2, 5);
      this.spots.push({ x: spotX, y: spotY, size: spotSize })
    }
  }
  update() {
    this.angle += 0.02;

    if (this.angleArm >= PI) {
      this.angleArm = PI;
      this.angleArmDirection = -1;
    } else if (this.angleArm <= 0) {
      this.angleArm = 0;
      this.angleArmDirection = 1;
    }
    this.angleArm += 0.03 * this.angleArmDirection;

    this.tutuSway = sin(this.angle) * 4;
  }
  display() {

    push();
    let sinValue = sin(this.angle) * 0.5;

    translate(this.x, this.y + sinValue * 80);

    let armMove = this.angleArm;

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    this.drawBody();

    this.drawFace();

    this.drawArm(35, 0, armMove + radians(90));
    this.drawArm(-35, 0, + radians(180));

    this.drawTutu(0, 40);

    this.drawLeg(15, 60, 0);
    this.drawLeg(-15, 60, radians(90) - sinValue * 2.5);

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes()

    pop();
  }

  drawArm(x, y, angle) {
    push();
    translate(x, y);
    rotate(angle);
    strokeWeight(2);
    stroke("#8b623a");
    line(0, 0, 35, 0);
    pop();
  }
  drawFace(x, y, angle) {
    push();
    translate(x, y);
    rotate(angle);
    strokeWeight(2);
    stroke("#896746");
    noFill()
    arc(-15, -5, 10, 15, PI, TWO_PI);
    arc(15, -5, 10, 15, PI, TWO_PI);
    // smile
    arc(0, 8, 10, 15, 0, PI);
    pop();

  }
  drawBody() {
    push();
    noStroke();
    fill(222, 184, 135);
    ellipse(0, 0, 70, 100);

    fill(139, 69, 19, 90);
    stroke(89, 49, 8, 80);
    strokeWeight(0.2);
    for (let i = 0; i < this.spots.length; i++) {
      let spot = this.spots[i];
      ellipse(spot.x, spot.y, spot.size, spot.size);
    }

    pop();
  }
  drawTutu(x, y) {
    push();
    translate(x, y);
    noStroke();
    fill(255, 182, 193, 150);
    beginShape();
    curveVertex(-50 + this.tutuSway, 20);
    curveVertex(-40, 0);
    curveVertex(-20 + this.tutuSway, -15);
    curveVertex(20, -15);
    curveVertex(40, 0);
    curveVertex(50 + this.tutuSway, 20);
    endShape(CLOSE);
    pop();
  }
  drawLeg(x, y, angle) {
    push();
    translate(x, y);
    rotate(angle);
    strokeWeight(2)
    stroke("#8b623a")
    line(0, 0, 0, 30);

    // shoes
    fill(255, 182, 193);
    noStroke();
    ellipse(0, 30, 10, 15);
    // bow
    stroke(231, 197, 216);
    noFill();
    ellipse(-5, 30, 4, 8);
    ellipse(5, 30, 4, 8);
    rect(-2, 30, 4, 5);

    pop();
  }
}


class LinyiDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.startX = startX;
    this.fish = startY;
    this.arms = 0;
  }

  update() {
    this.x = map(cos(frameCount / 30), -1, 1, this.startX, this.startX + 100);
    this.y = -abs(sin(frameCount / 30)) * 100 + height / 2;
    this.fish = map(sin(frameCount / 15), -1, 1, -50, 50);
    if (frameCount % 120 < 60) {
      this.arms += PI / 60;
    }
    else {
      this.arms -= PI / 60;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    this.drawLArm();
    this.drawRArm();
    this.drawBody();
    pop();
    push();
    translate(this.startX + 50, this.fish + 205);
    this.drawFish();
    pop();
  }

  drawBody() {
    noStroke();
    fill(50);
    arc(0, 100, 120, 300, PI, 0);
    fill(255);
    arc(0, 100, 90, 180, PI, 0);
    ellipse(20, 0, 30, 50);
    ellipse(-20, 0, 30, 50);
    fill(0);
    circle(20, 0, 10);
    circle(-20, 0, 10);
    fill(252, 186, 3);
    triangle(-10, 5, 10, 5, 0, 20);
    triangle(-40, 100, -20, 100, -30, 110);
    triangle(40, 100, 20, 100, 30, 110);
  }

  drawLArm() {
    fill(200);
    push();
    translate(-40, 30);
    rotate(this.arms);
    arc(0, 0, 20, 100, 0, PI);
    pop();
  }

  drawRArm() {
    fill(200);
    push();
    translate(40, 30);
    rotate(this.arms);
    arc(0, 0, 20, 100, PI, 0);
    pop();
  }

  drawFish() {
    fill(72, 198, 212);
    ellipse(0, 0, 80, 30);
    triangle(40, 0, 60, -15, 60, 15);
    triangle(-10, 0, 0, 5, 0, -5);
    fill(0);
    circle(-25, 0, 5);
  }
}

class SadullaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:

    // Properties for body parts
    //this.angle = 0;
    this.armLength = 10;
    //this.mainBody
    //this.smile?????????????
    this.mouthHeight = 20;

    this.bodyW = 200;

    this.bodyH = 60;

    this.legHeight = 60;
    this.eyeSize = 20;
    this.mouthWidth = 80; // wid

    this.angleSpeed = 10;

    this.jumpHeight = 30; //jump like in a  disco
    this.jumpSpeed = 2;
    this.isJumpingUp = true;

    this.armAngle = 0; // угол наклона
    this.armWavingSpeed = 0.15; // armsss wave speed?
  }

  update() {

    // this.angle += this.angleSpeed;
    this.armAngle = cos(frameCount * this.armWavingSpeed) * 0.05; // ruki dvijeniye
    // breakdance effect
    if (this.isJumpingUp) {
      this.y -= this.jumpSpeed;
      if (this.y <= height / 2 - this.jumpHeight) {
        this.isJumpingUp = false;
      }
    } else {
      this.y += this.jumpSpeed;
      if (this.y >= height / 2) {
        this.isJumpingUp = true;
      }
    }
  }

  display() {

    push();
    translate(this.x, this.y);

    fill(150, 100, 255);
    noStroke();
    arc(0, 0, this.bodyW, this.bodyH, PI, 0, CHORD); // u-shaped body mosters university inspiration
    rotate(this.armAngle);
    // Arms??? (rectangular random shape)
    push();
    translate(-this.bodyW / 5, -this.bodyH / 1);
    rotate(this.armAngle);
    fill(150, 100, 255);
    rect(0, 0, this.armLength, 50); // left arm
    ellipse(this.armLength - 5, 5, 15, 15); // left hand
    pop();

    push();
    translate(this.bodyW / 5, -this.bodyH / 1);
    rotate(-this.armAngle);
    fill(150, 100, 255);
    rect(0, 0, this.armLength, 50); // right ar
    ellipse(this.armLength - 5, 5, 15, 15); // right hand
    pop();




    // hands- circualr shaped top of the arms
    // ellipse(-this.bodyW / 4.5 - th
    // ellipse()

    //bodymain


    // legzzz liangge rectangles
    rect(-30, this.bodyH / 2, 20, this.legHeight); // l
    rect(10, this.bodyH / 2, 20, this.legHeight); // r

    // eyesssss two ellipses
    fill(255);
    ellipse(-30, -this.bodyH / 3, this.eyeSize, this.eyeSize); // l
    ellipse(30, -this.bodyH / 3, this.eyeSize, this.eyeSize); // right

    fill(0); // color of the retina
    ellipse(-30, -this.bodyH / 3, this.eyeSize / 3, this.eyeSize / 3); // l
    ellipse(30, -this.bodyH / 3, this.eyeSize / 3, this.eyeSize / 3); //r

    // MOUTH
    fill(255);
    arc(0, 10, this.mouthWidth, this.mouthHeight, 0, PI);

    pop();
  }

}

class AngelicaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.framecount = 0
    this.amplitude = new p5.Amplitude()
    this.level = 0
  }
  update() {
    angleMode(DEGREES)
    this.framecount += 4
    this.level = this.amplitude.getLevel()
  }
  display() {
    push();
    translate(this.x, this.y);
    stroke('white')
    //checking the position of the shape
    //text(mouseX - this.x, -90, -89)
    //text(mouseY - this.y, -60, -89)

    //-----------------------------------------------------------------//
    //1st Long hair
    fill('#791313')
    this.backHair(23, 100, -24, 27, 20 * sin(this.framecount))
    fill('#c28888')
    this.backHair(23, 100, -19.5, 22.5, 20 * sin(this.framecount))

    //Body of the octopus cat
    this.body(4 + 2 * sin(this.framecount), 3 * sin(this.framecount))

    //2nd Long hair
    fill('#791313')
    this.backHair(27, 120, 27.5, 25.5, 20 * sin(this.framecount))


    //Face & fur
    push()
    rotate(14)
    fill('white')
    ellipse(0, 0, 55, 50)
    pop()
    fill('white')
    triangle(-18, -17, -33, -19, -27, -1)
    triangle(-26, -2, -40, 0, -16, 18)
    triangle(22, -4, 40, 9, 20, 14)
    triangle(20, 12, 36, 22, 6, 25)

    //Ears
    this.leftEar(3 * sin(this.framecount), 3 * sin(this.framecount))
    this.rightEar(3 * sin(this.framecount), 3 * sin(this.framecount))

    //Back hair
    stroke('#461212')
    fill('#461212')
    ellipse(14.5, -37.5, 20, 10)
    ellipse(3.5, -38.5, 15, 13)

    //tentacles (as front hair)
    push()
    rotate(6)
    this.middleHair(0, 3 * sin(this.framecount))
    this.rightHair(0, 3 * sin(this.framecount), 5 * sin(this.framecount))
    this.leftHair(0, 3 * sin(this.framecount), 5 * sin(this.framecount))
    pop()


    //Big shiny eyes
    fill('black')
    noStroke()
    circle(-12.5, -3, 20)
    circle(14.5, 2, 20)

    //highlight moving with the sound
    let a = map(this.level, 0, 1, -3, 3)
    ellipse(-3.5, 10, 3, 2)
    fill('white')
    circle(-14.5, -6 - a, 10 + a)
    circle(-13.5, 0 - a, 6 + a)
    circle(12.5, -1 - a, 10 + a)
    circle(14.5, 6 - a, 6 + a)

    //Tie
    this.tie(sin(this.framecount), 1 * sin(this.framecount), sin(this.framecount))

    pop();
  }

  middleHair(x, y) {
    push()
    translate(x, y)
    stroke('#791313')
    fill('#791313')
    rotate(12)
    ellipse(1.5, -22, 23, 43)
    pop()
  }

  rightHair(x, y, a) {
    push()
    translate(x, y)
    stroke('#791313')
    fill('#791313')
    rotate(-20 - a)
    ellipse(30.5, -9, 24, 50)
    pop()
  }

  leftHair(x, y, a) {
    push()
    translate(x, y)
    stroke('#791313')
    fill('#791313')
    rotate(40 + a)
    ellipse(-27.5, -8, 24, 50)
    pop()
  }

  body(x, y) {
    push()
    translate(2 + x, y)
    noStroke()
    fill('white')
    beginShape()
    vertex(-17.5, 14)
    vertex(-22.5, 49)
    vertex(13.5, 60)
    vertex(3.5, 19)
    endShape(CLOSE)
    triangle(-22.5, 49, -32.5, 55, -8.5, 52)
    triangle(-3.5, 54, 10.5, 65, 13.5, 59)
    pop()
  }

  tie(x, y, a) {
    fill('black')
    noStroke()
    push()
    translate(2 + x, 5 + y)
    rotate(4 + a)
    triangle(-1.5, 20, -12.5, 14, -12.5, 29)
    triangle(-1.5, 20, 10.5, 15, 8.5, 29)
    pop()
  }

  leftEar(x, y) {
    push()
    beginShape()
    curveVertex(12.5, -22.5)
    curveVertex(42.5 + x, -40.10 + y)
    curveVertex(32.5, 0.5)
    endShape(CLOSE)
    pop()
  }
  rightEar(x, y) {
    push()
    beginShape()
    curveVertex(-1.5, -28.5)
    curveVertex(-10.5 + x, -49.5 + y)
    curveVertex(-25.5, -12.5)
    endShape(CLOSE)
    pop()
  }

  backHair(w, l, x, y, a) {
    noStroke()
    push()
    rotate(a - 10)
    translate(x, y)
    ellipse(0, 0, w, l)
    pop()
  }


  drawReferenceShapes() {
    translate(0, 0)
    noFill();
    stroke(255, 0, 0);
    //line(-5, 0, 5, 0);
    //line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

class YerkeDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    //arms movement
    this.armAngle = 0;
    this.direction = 1;
    this.amplitude = 40;
    this.speed = 2;
    // body movement
    this.bodyMove = 0;
    this.bodyAmplitude = 20;
    this.bodySpeed = 0.08;
  }

  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    // arms go up and down
    this.armAngle += this.direction * this.speed;
    if (this.armAngle > this.amplitude || this.armAngle < -this.amplitude) {
      this.direction *= -1; // go up and down
    }
    // body goes up and down
    this.bodyMove = sin(frameCount * this.bodySpeed) * this.bodyAmplitude;
  }

  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.

    push();
    //body
    translate(this.x, this.y + this.bodyMove);

    this.drawBody();
    // arms
    this.drawLimb(40, 0, radians(-10 + this.armAngle)); // right arm
    this.drawLimb(-40, 0, radians(190 - this.armAngle)); // left arm

    pop();
  }
  drawLimb(x, y, angle) {
    push();
    translate(x, y);
    rotate(angle)
    strokeWeight(4);
    stroke(102, 51, 0);
    line(0, 0, 80, 0);
    // gloves
    noStroke();
    fill(255);
    ellipse(80, 0, 25, 15);
    // fill(255);
    // ellipse(80, 2, 10, 5); // 

    pop();

  }
  drawBody() {
    //body

    noStroke();
    fill(255);
    circle(0, 50, 100);
    circle(0, 0, 93);
    circle(0, -50, 85);
    //eyes
    fill(0);
    ellipse(-15, -65, 10, 10); // left
    ellipse(15, -65, 10, 10);  // right
    //nose
    fill("orange");
    triangle(0, -55, -15, -45, 5, -45);
    //hat
    fill(200, 0, 0);
    rect(-40, -110, 80, 30);
    fill(255);
    rect(-40, -100, 80, 5); // bottom part
    fill(200, 0, 0);
    rect(-25, -150, 50, 40); // upper part

    // scarf
    fill(200, 0, 0);
    rect(-45, -35, 90, 15);
    rect(15, -25, 15, 40);

    // buttons
    fill(200, 0, 0);
    ellipse(0, -10, 10, 10);
    ellipse(0, 15, 10, 10);
    ellipse(0, 40, 10, 10);

  }
}

let dancerClasses = [
  MarlenaDancer,
  SherylDancer,
  FlorenceDancer,
  EmiMonkeDancer,
  ZaraDancer,
  LinyiDancer,
  SadullaDancer,
  AngelicaDancer,
  YerkeDancer
];
