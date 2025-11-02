let sceneOneBall; 
let sceneTwoBalls = [];
let runTime, runEnd;
let ySpring = 550;
let yAdd = 5;
let goingDown = false;
let sceneFiveLines = [];

function setup(){
  createCanvas(600,600);
  reset();
  runEnd = millis();
  sceneOneBall = new bounce(width/2, height/2, 0, 20, color(255, 0, 0), 150);
}

function draw(){
  /*
    start();
    brain(); */
  runTime = millis() - runEnd;

  if (runTime < 10000){
    start();
    brain();
  }
  else if (runTime < 2000){
    background(0);
    sceneOneBall.display();
    sceneOneBall.linearbounce();
  }
  else if (runTime < 4000){
    background(0);
    for (let i = 0; i < sceneTwoBalls.length; i++) {
      sceneTwoBalls[i].display();
      sceneTwoBalls[i].wallbounce();
    }
  }
  else if (runTime <6000){
    sceneFour();
  }
  else if (runTime < 8000){
    for (let i = 0; i < sceneFiveLines.length; i++) {
      sceneFiveLines[i].update();
      sceneFiveLines[i].display();
    }
  }
  else {
    runEnd = millis ();
    reset();
  }
}

function start(){
  noStroke();

  fill(180, 200, 255);
  beginShape();
  vertex(0, 180);
  vertex(600, 160);
  vertex(600, 600);
  vertex(0, 600);
  endShape(CLOSE);

  fill(255);
  beginShape();
  vertex(50, 220);
  vertex(440, 200);
  vertex(460, 450);
  vertex(70, 470);
  endShape(CLOSE);

  fill(100, 50, 255);
  beginShape();
  vertex(120, 220);
  bezierVertex(70, 290, 160, 330, 110, 380);
  bezierVertex(80, 430, 170, 480, 130, 520);
  bezierVertex(100, 570, 150, 560, 150, 580);

  vertex(380, 580);
  vertex(360, 400);
  endShape(CLOSE);

  fill(150, 200, 255);
  beginShape();
  vertex(130, 250);
  vertex(130, 340);
  bezierVertex(130, 580, 370, 580, 370, 340);
  vertex(370, 250);
  endShape();

  beginShape();
  vertex(220, 400);
  vertex(310, 400);
  vertex(320, 550);
  vertex(230, 550);
  endShape();

  fill(100, 50, 255);
  beginShape();
  vertex(110, 280);
  bezierVertex(90, 120, 380, 120, 380, 280);
  bezierVertex(370, 290, 190, 260, 180, 250);
  bezierVertex(180, 260, 115, 290, 110, 280);
  endShape(); 

  beginShape();
  vertex(330, 220);
  bezierVertex(280, 290, 370, 330, 320, 380);
  bezierVertex(290, 430, 380, 480, 340, 520);
  bezierVertex(310, 570, 360, 560, 360, 580);

  bezierVertex(370, 560, 350, 580, 390, 480);
  bezierVertex(400, 410, 350, 400, 380, 350);
  bezierVertex(400, 300, 380, 290, 380, 280);
  endShape(CLOSE);

  fill(255);
  beginShape();
  vertex(0, 550);
  vertex(600, 530);
  vertex(600, 600);
  vertex(0, 600);
  endShape(CLOSE);

  stroke(100, 50, 255);
  strokeWeight(5);
  line(155, 320, 180, 310);
  line(290, 310, 260, 305);

  ellipse(165, 340, 5, 5);
  ellipse(270, 335, 5, 5);
}


function brain(){
  stroke(255);
  fill(0);
  strokeWeight(2);
  ellipse(225, 230, 200, 100);
}

class bounce{
  constructor(x, y, xSpeed, ySpeed, c, size){
    this.x = x;
    this.y = y;
    this.c = c;
    this.size = size;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  display(){
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.size, this.size);
  }

  linearbounce(){
    this.y += this.ySpeed;
    if(this.y<=250 || this.y >= 350){
      this.ySpeed *= -1;
    }
  }

  wallbounce(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if(this.x<=0 || this.x >= width){
      this.xSpeed *= -1;
    }
    if(this.y<=0 || this.y >= height){
      this.ySpeed *= -1;
    }

  }
}  

function reset(){
  background(0);
  sceneTwoBalls =[];
  for(let i = 0; i<50; i++){
    let x = random(250,350);
    let y = random(250,350);
    let xSpeed = random (-30, 30);
    let ySpeed = random (-30, 30);
    let c = color(random(180,230), random(0,100), random(0,100));
    sceneTwoBalls.push(new bounce(x, y, xSpeed, ySpeed, c, 40));
  } 

  sceneFiveLines = [];
  for(let i = 0; i<20; i++){
    let x = random(250, 350);
    let y = random(250, 350);
    let c = color(random(100,230), random(0,20), random(0,20));
    sceneFiveLines.push(new lines(x, y, c));
  }
}

function sceneFour(){
  background(0);
  stroke(255);
  strokeWeight(1);
  fill(0,0);

  beginShape();
  vertex(300+50, ySpring-4*yAdd);
  bezierVertex(300+50, ySpring-6*yAdd, 300-50, ySpring-6*yAdd, 300-50, ySpring-4*yAdd);
  bezierVertex(300-50,ySpring-2*yAdd, 300+50, ySpring-2*yAdd, 300+50, ySpring-3*yAdd);
  
  bezierVertex(300+50, ySpring-5*yAdd, 300-50, ySpring-5*yAdd, 300-50, ySpring-3*yAdd);
  bezierVertex(300-50,ySpring-yAdd, 300+50, ySpring-yAdd, 300+50, ySpring-2*yAdd);
  
  bezierVertex(300+50, ySpring-4*yAdd, 300-50, ySpring-4*yAdd, 300-50, ySpring-2*yAdd);
  bezierVertex(300-50,ySpring, 300+50, ySpring, 300+50, ySpring-yAdd);  
  
  bezierVertex(300+50, ySpring-3*yAdd, 300-50, ySpring-3*yAdd, 300-50, ySpring-yAdd);
  bezierVertex(300-50,ySpring+yAdd, 300+50, ySpring+yAdd, 300+50, ySpring);

  endShape();

  if (goingDown) {
    yAdd -= 3; 
    ySpring += 15;
  } else {
    yAdd += 4;   
    ySpring -= 20;
  }

  if (yAdd > 25) {
    goingDown = true;
  } 
  if (yAdd < 5) {
    goingDown = false;
  }
}

class lines {
  constructor(x, y, c) {
    this.x = x;
    this.y = y;
    this.c = c;
    this.newX = x;
    this.newY = y;
  }

  randomize() {
    this.x = random(280, 320);
    this.y = random(280, 320);
    this.newX = this.x;
    this.newY = this.y;
    this.c = color(random(200, 255), random(0, 100), random(0, 100));
  }

  update() {
    this.x = this.newX;
    this.y = this.newY;

    this.newX += random(-20, 20);
    this.newY += random(-20, 20);

    this.newX = constrain(this.newX, 0, width);
    this.newY = constrain(this.newY, 0, height);
  }

  display() {
    strokeWeight(1);
    stroke(this.c);
    line(this.x, this.y, this.newX, this.newY);  
  }
}