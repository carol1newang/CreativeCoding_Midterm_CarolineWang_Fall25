let sceneOneBalls = [];
let sceneTwoBall; 
let runTime, runEnd;
let sceneTwoSpeed = 10;
let ySpring = 550;
let yAdd = 5;
let goingDown = false;


function setup(){
  createCanvas(600,600);
  reset();

  sceneTwoBall = new bounce(width/2, height/2, 0, sceneTwoSpeed, color(255, 0, 0), 150);
}

function draw(){
  runTime = millis() - runEnd;

  if (runTime < 2000){
    background(0);
    sceneTwoBall.display();
    sceneTwoBall.run(280, 320, 280, 320);
  }
  else if (runTime < 4000){
    background(0);
    for (let i = 0; i < sceneOneBalls.length; i++) {
    sceneOneBalls[i].display();
    sceneOneBalls[i].run(0, width, 0, height);
  }}
  else if (runTime < 10000){
    sceneFour();
  }
  else {
    runEnd = millis ();
    reset();
  }
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

  run(lowX, highX, lowY, highY){
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
  sceneOneBalls =[];
  for(let i = 0; i<50; i++){
    let x = random(250,350);
    let y = random(250,350);
    let xSpeed = random (-30, 30);
    let ySpeed = random (-30, 30);
    let c = color(random(180,230), random(0,100), random(0,100));
    sceneOneBalls.push(new bounce(x, y, xSpeed, ySpeed, c, 50));
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