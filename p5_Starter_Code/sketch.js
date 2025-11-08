let sceneOneBall; 
let sceneOneBalls =[];
let runTime, runEnd, blinkTime, blinkEnd, eyesOpenTime;
let ySpring = 550;
let yAdd = 5;
let goingDown = false;
let sceneThreeLines = [];
let miniOneScale = 1;
let circleX = new Array(50);
let circleY = new Array(50);
let browY = 313;
let lowCircleSize = 650;

function setup(){
  createCanvas(600,600);
  background(0);
  reset();
}

function draw(){
  background(0);

  runTime = millis() - runEnd;
  blinkTime = millis() - blinkEnd;

  // --- SCENE ZERO: FACE ---
  displayFace.display();

  // face blinking
  if (blinkTime<eyesOpenTime){
    displayFace.blink();
  }
  else if (blinkTime<eyesOpenTime+50){
    displayFace.display();
  }
  else{
    eyesOpenTime = random(1000,2000);
    blinkEnd = millis();
  }

  // face brow movemnt
  if (runTime < 3000){
    displayFace.brows(browY);
  }
  else if (runTime < 5000){
    for(i=0; i<5; i++){
      if (browY<320){
        browY+=0.02;
      }
      else {
        browY = 320;
      }
    }
    displayFace.brows(browY);
  }

  // face brain appears
  else if(runTime < 30000){
    displayFace.brows(320);
    brain.grow(0.01);
    brain.display();
    brainLineOne.display();
    brainLineOne.update(160, 290, 200, 280, 10);

    brainLineTwo.display();
    brainLineTwo.update(160, 290, 200, 280, 10);
  }

  // --- SCENE ONE: BALLS ---
  else if (runTime < 35000){
    background(0);
    for (let i = 0; i < sceneOneBalls.length; i++) {
      sceneOneBalls[i].display();
      sceneOneBalls[i].wallbounce();
    }
  }

  // --- SCENE TWO: SPRING ---
  else if (runTime < 40000){
    background (0);
    sceneTwoSpring();
  }

  // --- SCENE THREE: LINES ---
  else if (runTime < 50000){
    background (0);
    for (let i = 0; i < sceneThreeLines.length; i++) {
      sceneThreeLines[i].update(0, width, 0, height, 20);
      sceneThreeLines[i].display();
    }
  }

  // --- SCENE FOUR: STICK FIGURE ---
  else if (runTime < 60000){
    background(0);
    sceneFourStick.display();
    sceneFourStick.update();
  }

  // --- RESET ---
  else if (runTime < 62000){
    displayFace.display();
    displayFace.brows(browY);
  }
  else {
    reset();
  } 

  // THOUGHT BUBBLES
  if(runTime > 10000 && runTime < 30000){ // thought bubble 1
    bubbleOne.move(70, 180, 0.02, 0.01);
    bubbleOne.grow(0.01);
    bubbleOne.display(); 
  }
  if(runTime > 11000 && runTime < 30000){ // mini scene 1 in thought bubble 1
    miniSceneOne.display();
    miniSceneOne.linearbounce(180, 190);
  }
  if(runTime > 12000 && runTime < 30000){ // thought bubble 2
    bubbleTwo.move(230, 100, 0.02, 0.01);
    bubbleTwo.grow(0.01);
    bubbleTwo.display();
  }
  if(runTime > 13000 && runTime < 30000){ // mini scene 2 in thought bubble 2
    push();
      scale(0.25);
      translate(600, 0);
      sceneTwoSpring();
    pop()
  }
  if(runTime > 14000 && runTime < 30000){ // thought bubble 3
    bubbleThree.move(400, 120, 0.02);
    bubbleThree.grow(0.01);
    bubbleThree.display();
  }
  if(runTime > 15500 && runTime < 30000){ // mini scene 3 in thought bubble 3
    miniBrainLineOne.update(350, 425, 100, 150, 10);
    miniBrainLineOne.display();
  }
  if (runTime > 16000 && runTime < 30000){ // thought bubble 4
    bubbleFour.move(475, 250, 0.03);
    bubbleFour.grow(0.01);
    bubbleFour.display();
  }
  if (runTime > 17500 && runTime < 30000){ // mini scene 4 in thought bubble 4
    push();
      scale(0.25);
      translate(1600, 725);
      sceneFourStick.display();
      sceneFourStick.update();
    pop();
  }
  if (runTime > 25000 && runTime < 30000){ // bubble 1 grows to transition into scenes 1-4
    bubbleOneGrow.grow(0.05);
    bubbleOneGrow.display();
  }

  if (runTime > 26000 && runTime <30000){ // SCENE 1 PART 1
    sceneOneBall.display();
    sceneOneBall.linearbounce(250, 350);
  }

  circleTransition();

}