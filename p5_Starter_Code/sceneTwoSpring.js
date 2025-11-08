function sceneTwoSpring(){
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