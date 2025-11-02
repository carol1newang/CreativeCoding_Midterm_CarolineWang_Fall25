let sceneOneBall; 
let sceneTwoBalls = [];
let runTime, runEnd, blinkTime, blinkEnd, eyesOpenTime;
let ySpring = 550;
let yAdd = 5;
let goingDown = false;
let sceneFiveLines = [];
let miniOneScale = 1;

function setup(){
  createCanvas(600,600);
  reset();
  runEnd = millis();
  blinkEnd = millis();
  eyesOpenTime = random(1000, 2000);
  sceneOneBall = new bounce(width/2, height/2, 0, 20, color(255, 0, 0), 150);

  miniSceneOne = new bounce(70, 180, 0, 2, color(255, 0, 0), 10);

  brain = new bubble(230, 235, 0.5);
  brainLineOne = new lines(10, 230, 240, color(255, 0, 0));
  brainLineTwo = new lines(10, 230, 240, color(255, 0, 0));

  miniBrainLineOne = new lines(10, 350, 150, color(255, 0, 0));

  bubbleOne = new bubble(230, 235, 0, 0.4);
  bubbleTwo = new bubble(230, 235, 0, 0.4);
  bubbleThree = new bubble(230, 235, 0, 0.4);
  bubbleFour = new bubble(230, 235, 0, 0.4);
  bubbleOneGrow = new bubble(70, 180, 0.4, 5);

  one = new start();

  transitionBubble = new bubble(300, 300, 0, 10);
}

function draw(){
  background(0);
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

  if(runTime < 30000){
    brain.display();
    brainLineOne.display();
    brainLineOne.update(160, 290, 200, 290, 10);

    brainLineTwo.display();
    brainLineTwo.update(160, 290, 200, 290, 10);
  }
  else if (runTime < 40000){
    background(0);
    for (let i = 0; i < sceneTwoBalls.length; i++) {
      sceneTwoBalls[i].display();
      sceneTwoBalls[i].wallbounce();
    }
  }
  else if (runTime <50000){
    background (0);
    sceneFour();
  }
  else if(runTime < 50002){
    background(0);
  }
  else if (runTime < 60000){
    background (0);
    for (let i = 0; i < sceneFiveLines.length; i++) {
      sceneFiveLines[i].update(0, width, 0, height, 20);
      sceneFiveLines[i].display();
    }
  }
  else {
    runEnd = millis ();
    reset();
  } 
  if(runTime > 5000 && runTime < 30000){
    bubbleOne.move(70, 180, 0.02, 0.01);
    bubbleOne.grow(0.01);
    bubbleOne.display(); 
  }
  if(runTime > 6000 && runTime < 30000){
    miniSceneOne.display();
    miniSceneOne.linearbounce(180, 190);
  }
  if(runTime > 7000 && runTime < 30000){
    bubbleTwo.move(230, 100, 0.02, 0.01);
    bubbleTwo.grow(0.01);
    bubbleTwo.display();
  }
  if(runTime > 8000 && runTime < 30000){
    push();
      scale(0.25);
      translate(600, 0);
      sceneFour();
    pop()
  }
  if(runTime > 9000 && runTime < 30000){
    bubbleThree.move(400, 120, 0.01);
    bubbleThree.grow(0.01);
    bubbleThree.display();
  }
  if(runTime > 10500 && runTime < 30000){
    miniBrainLineOne.update(350, 425, 100, 150, 10);
    miniBrainLineOne.display();
  }
  if (runTime > 11000 && runTime < 30000){
    bubbleFour.move(475, 250, 0.01);
    bubbleFour.grow(0.01);
    bubbleFour.display();
  }
  if (runTime > 25000 && runTime < 30000){
    bubbleOneGrow.grow(0.015);
    bubbleOneGrow.display();
  }
  if (runTime > 27000 && runTime <30000){
    sceneOneBall.display();
    sceneOneBall.linearbounce(250, 350);
  }
  if (runTime > 39000 && runTime < 40000){
    transitionBubble.grow(0.05);
    transitionBubble.display();
  }
  if (runTime > 49000 && runTime < 50000){
    transitionBubble.grow(0.05);
    transitionBubble.display();
  } 
  if (runTime > 59000 && runTime < 60000){
    transitionBubble.grow(0.05);
    transitionBubble.display();
  } 

  if(runTime > 38900 && runTime < 39000){
    transitionBubble.size = 0;
  }
  if(runTime > 48900 && runTime < 49000){
    transitionBubble.size = 0;
  }
  if(runTime > 58900 && runTime < 59000){
    transitionBubble.size = 0;
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

  linearbounce(lowY, highY){
    this.y += this.ySpeed;
    if(this.y<=lowY || this.y >= highY){
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
    sceneFiveLines.push(new lines(200, x, y, c));
  }

  bubbleOne = new bubble(230, 235, 0, 0.4);
  bubbleTwo = new bubble(230, 235, 0, 0.4);
  bubbleThree = new bubble(230, 235, 0, 0.4);
  bubbleFour = new bubble(230, 235, 0, 0.4);
  bubbleOneGrow = new bubble(70, 180, 0.4, 5);
  transitionBubble = new bubble(300, 300, 0, 10);

}

function sceneFour(){
  stroke(255, 0, 0);
  strokeWeight(2);
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

    for (let i = 0; i < length; i++) {
      this.x[i] = startX;
      this.y[i] = startY;
    }
  }

  update(lowX, highX, lowY, highY, distance) {
    let newX = this.x[0] + random(-distance, distance);
    let newY = this.y[0] + random(-distance, distance);

    newX = constrain(newX, lowX, highX);
    newY = constrain(newY, lowY, highY);

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