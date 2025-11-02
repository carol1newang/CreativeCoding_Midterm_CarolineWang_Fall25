let sceneOneBall; 
let sceneTwoBalls = [];
let runTime, runEnd;
let sceneTwoSpeed = 10;
let ySpring = 550;
let yAdd = 5;
let goingDown = false;

function setup(){
  createCanvas(600,600);
  reset();

  sceneOneBall = new bounce(width/2, height/2, 0, sceneTwoSpeed, color(255, 0, 0), 150);
  sceneFiveLines = new lines(300, 300, 2, 2, color(255,0,0));
}

function draw(){
  sceneFiveLines.update();
  sceneFiveLines.display();
  /*
    start();
    brain(); */
/*  runTime = millis() - runEnd;

  if (runTime < 10000){
    start();
    brain();
  }
  else if (runTime < 12000){
    background(0);
    sceneOneBall.display();
    sceneOneBall.bounce(280, 320, 280, 320);
  }
  else if (runTime < 14000){
    background(0);
    for (let i = 0; i < sceneTwoBalls.length; i++) {
    sceneTwoBalls[i].display();
    sceneTwoBalls[i].bounce(0, width, 0, height);
  }}
  else if (runTime <16000){
    sceneFour();
  }
  else {
    runEnd = millis ();
    reset();
  }*/
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

  bounce(lowX, highX, lowY, highY){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if(this.x<=lowX || this.x >= highX){
      this.xSpeed *= -1;
    }
    if(this.y<=lowY || this.y >= highY){
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
    sceneTwoBalls.push(new bounce(x, y, xSpeed, ySpeed, c, 50));
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
  constructor(x, y, xSpeed, ySpeed, c) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.c = c;
  }

  randomize() {
    this.x = random(width);
    this.y = random(height);
    this.xSpeed = random(1, 6);
    this.ySpeed = random(1, 6);
    this.c = color(random(150, 255), random(50, 200), random(50, 200));
  }

  update() {
    this.x += random(-this.xSpeed, this.xSpeed);
    this.y += random(-this.ySpeed, this.ySpeed);

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  display() {
    strokeWeight(2);
    stroke(this.c);
    point(this.x, this.y);  
  }
}