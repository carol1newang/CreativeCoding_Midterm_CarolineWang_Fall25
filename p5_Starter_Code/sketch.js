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
  start();
  /*
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
  }*/
}

function start(){
  noStroke();
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