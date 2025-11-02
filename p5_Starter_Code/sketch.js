let sceneOneBall; 
let sceneTwoBalls = [];
let runTime, runEnd, blinkTime, blinkEnd, eyesOpenTime;
let ySpring = 550;
let yAdd = 5;
let goingDown = false;
let sceneFiveLines = [];

function setup(){
  createCanvas(600,600);
  reset();
  runEnd = millis();
  blinkEnd = millis();
  eyesOpenTime = random(1000, 2000);
  sceneOneBall = new bounce(width/2, height/2, 0, 20, color(255, 0, 0), 150);

  brain = new bubble(230, 240, 0.5);
  brainLine = new lines(25, 230, 240, color(255));

  bubbleOne = new bubble(250, 250, 0.45);
  bubbleTwo = new bubble(250, 200, 0.45);
  bubbleThree = new bubble(250, 200, 0.45);
  bubbleFour = new bubble(250, 200, 0.45);

  one = new start();
}

function draw(){
  runTime = millis() - runEnd;
  blinkTime = millis() - blinkEnd;


  one.display();
  if (blinkTime<eyesOpenTime){
    one.blink();

  }
  else if (blinkTime<eyesOpenTime+50){
    one.display();
  }
  else{
    eyesOpenTime = random(500,2500);
    blinkEnd = millis();
  }

  if(runTime<10000){
    brain.display();
    brainLine.display();
    brainLine.update(150, 300, 200, 300);
  }
  else if (runTime < 20000){
    bubbleOne.move(100, 180, 0.02);
    bubbleOne.display();

    bubbleTwo.move(230, 100, 0.02);
    bubbleTwo.display();

    bubbleThree.move(475, 250, 0.02);
    bubbleThree.display();

    bubbleFour.move(400, 120, 0.02);
    bubbleFour.display();
  }
  else if (runTime < 30000){
    background(0);
    sceneOneBall.display();
    sceneOneBall.linearbounce();
  }
  else if (runTime < 40000){
    background(0);
    for (let i = 0; i < sceneTwoBalls.length; i++) {
      sceneTwoBalls[i].display();
      sceneTwoBalls[i].wallbounce();
    }
  }
  else if (runTime <40002){
    sceneFour();
  }
  else if(runTime < 50000){
    background(0);
  }
  else if (runTime < 60000){
    for (let i = 0; i < sceneFiveLines.length; i++) {
      sceneFiveLines[i].update(0, width, 0, height);
      sceneFiveLines[i].display();
    }
  }
  else {
    runEnd = millis ();
    reset();
  } 
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
    sceneFiveLines.push(new lines(100, x, y, c));
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
  constructor(length, startX, startY, c) {
    this.length = length;
    this.c = c;
    this.x = new Array(length);
    this.y = new Array(length);

    // initialize all points at the starting position
    for (let i = 0; i < length; i++) {
      this.x[i] = startX;
      this.y[i] = startY;
    }
  }

  update(lowX, highX, lowY, highY) {
    // move the head randomly
    let newX = this.x[0] + random(-20, 20);
    let newY = this.y[0] + random(-20, 20);

    newX = constrain(newX, lowX, highX);
    newY = constrain(newY, lowY, highY);

    // shift all points down the array
    for (let i = this.length - 1; i > 0; i--) {
      this.x[i] = this.x[i - 1];
      this.y[i] = this.y[i - 1];
    }

    this.x[0] = newX;
    this.y[0] = newY;
  }

  display() {
    stroke(this.c);
    strokeWeight(1);
    for (let i = 1; i < this.length; i++) {
      line(this.x[i - 1], this.y[i - 1], this.x[i], this.y[i]);
    }
  }
}