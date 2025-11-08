function reset(){
  background(0);

  // timing for one full loop + blinking
  runEnd = millis();
  blinkEnd = millis();

  // scene zero: face
  displayFace = new face(); // face
  miniSceneOne = new bounce(70, 180, 0, 2, color(255, 0, 0), 10); // mini version of scene 1 - ball bounce
  miniBrainLineOne = new lines(10, 350, 150, color(255, 0, 0)); // mini version of scene 3 - lines

  // brain + lines in brain
  brain = new bubble(230, 235, 0, 0.5);
  brain.size = 0;
  brainLineOne = new lines(50, 240, 250, color(255, 0, 0));
  brainLineTwo = new lines(50, 240, 250, color(255, 0, 0));

  // 4 thought bubbles + growing bubble transitioning to scenes 1-4
  bubbleOne = new bubble(230, 235, 0, 0.4);
  bubbleTwo = new bubble(230, 235, 0, 0.4);
  bubbleThree = new bubble(230, 235, 0, 0.4);
  bubbleFour = new bubble(230, 235, 0, 0.4);
  bubbleOneGrow = new bubble(70, 180, 0.4, 5);

  // scene one part 1: one ball bouncing
  sceneOneBall = new bounce(width/2, height/2, 0, 20, color(255, 0, 0), 150);

  // scene one part 2: array of 50 balls
  for(let i = 0; i<50; i++){
    let x = random(250,350);
    let y = random(250,350);
    let xSpeed = random (-30, 30);
    let ySpeed = random (-30, 30);
    let c = color(random(180,230), random(0,100), random(0,100));
    sceneOneBalls.push(new bounce(x, y, xSpeed, ySpeed, c, 40));
  } 

  // scene two: spring

  // scene three: lines
  for(let i = 0; i<20; i++){
    let x = random(250, 350);
    let y = random(250, 350);
    let c = color(random(100,230), random(0,20), random(0,20));
    sceneThreeLines.push(new lines(100, x, y, c));
  }

  // scene four: stick figure
  sceneFourStick = new stick(); 

  lowCircleSize = 650; // resetting lowest circle size for transitions

}