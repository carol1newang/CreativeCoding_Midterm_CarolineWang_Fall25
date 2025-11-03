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
    eyesOpenTime = random(1000,2000);
    blinkEnd = millis();
  }

  if (runTime < 5000){

  }
  else if(runTime < 30000){
    brain.grow(0.01);
    brain.display();
    brainLineOne.display();
    brainLineOne.update(160, 290, 200, 280, 10);

    brainLineTwo.display();
    brainLineTwo.update(160, 290, 200, 280, 10);
  }
  else if (runTime < 35000){
    background(0);
    for (let i = 0; i < sceneTwoBalls.length; i++) {
      sceneTwoBalls[i].display();
      sceneTwoBalls[i].wallbounce();
    }
  }
  else if (runTime <40000){
    background (0);
    sceneFour();
  }
  else if (runTime < 50000){
    background (0);
    for (let i = 0; i < sceneFiveLines.length; i++) {
      sceneFiveLines[i].update(0, width, 0, height, 20);
      sceneFiveLines[i].display();
    }
  }
  else if (runTime < 60000){
    background(0);
    sceneFive.display();
    sceneFive.update();
  }
  else {
    runEnd = millis ();
    reset();
  } 
  if(runTime > 10000 && runTime < 30000){
    bubbleOne.move(70, 180, 0.02, 0.01);
    bubbleOne.grow(0.01);
    bubbleOne.display(); 
  }
  if(runTime > 11000 && runTime < 30000){
    miniSceneOne.display();
    miniSceneOne.linearbounce(180, 190);
  }
  if(runTime > 12000 && runTime < 30000){
    bubbleTwo.move(230, 100, 0.02, 0.01);
    bubbleTwo.grow(0.01);
    bubbleTwo.display();
  }
  if(runTime > 13000 && runTime < 30000){
    push();
      scale(0.25);
      translate(600, 0);
      sceneFour();
    pop()
  }
  if(runTime > 14000 && runTime < 30000){
    bubbleThree.move(400, 120, 0.02);
    bubbleThree.grow(0.01);
    bubbleThree.display();
  }
  if(runTime > 15500 && runTime < 30000){
    miniBrainLineOne.update(350, 425, 100, 150, 10);
    miniBrainLineOne.display();
  }
  if (runTime > 16000 && runTime < 30000){
    bubbleFour.move(475, 250, 0.03);
    bubbleFour.grow(0.01);
    bubbleFour.display();
  }
  if (runTime > 17500 && runTime < 30000){
    push();
      scale(0.25);
      translate(1600, 725);
      sceneFive.display();
      sceneFive.update();
    pop();
  }
  if (runTime > 25000 && runTime < 30000){
    bubbleOneGrow.grow(0.05);
    bubbleOneGrow.display();
  }
  if (runTime > 26000 && runTime <30000){
    sceneOneBall.display();
    sceneOneBall.linearbounce(250, 350);
  }
  if (runTime > 34000 && runTime < 35000){
    transitionBubble.grow(0.05);
    transitionBubble.display();
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

  if(runTime > 33900 && runTime < 34000){
    transitionBubble.size = 0;
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

  runEnd = millis();
  blinkEnd = millis();
  sceneOneBall = new bounce(width/2, height/2, 0, 20, color(255, 0, 0), 150);

  miniSceneOne = new bounce(70, 180, 0, 2, color(255, 0, 0), 10);

  brain = new bubble(230, 235, 0, 0.5);
  brain.size = 0;
  brainLineOne = new lines(50, 240, 250, color(255, 0, 0));
  brainLineTwo = new lines(50, 240, 250, color(255, 0, 0));

  miniBrainLineOne = new lines(10, 350, 150, color(255, 0, 0));

  bubbleOne = new bubble(230, 235, 0, 0.4);
  bubbleTwo = new bubble(230, 235, 0, 0.4);
  bubbleThree = new bubble(230, 235, 0, 0.4);
  bubbleFour = new bubble(230, 235, 0, 0.4);
  bubbleOneGrow = new bubble(70, 180, 0.4, 5);

  one = new start();

  transitionBubble = new bubble(300, 300, 0, 10);

  sceneFive = new stick();
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