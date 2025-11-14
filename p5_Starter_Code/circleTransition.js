function circleTransition (){
  // during balls scene
  if (runTime > 26000 && runTime < 34000){
    circles(650, 900);
  }

  // end of balls scene
  else if (runTime > 34000 && runTime < 35000){
    circlesIn();
  }

  // spring scene
  else if (runTime > 35000 && runTime < 39000){
    circlesOut();
  }

  // end of spring scene
  else if (runTime > 39000 && runTime < 40000){
    circlesIn();
  }

  // lines scene
  else if (runTime > 40000 && runTime < 49000){
    circlesOut();
  }

  // end of lines scene
  else if (runTime > 49000 && runTime < 50000){
    circlesIn();
  }

  // stick scene
  else if (runTime > 50000 && runTime < 59000){
    circlesOut();
  }

  else if (runTime > 59000 && runTime < 60000){
    circlesIn();
  }
  else if (runTime > 60000 && runTime < 62000){
    for(i=0; i<50; i++){
        lowCircleSize += 2;
    }
    circles(lowCircleSize, 900);
    displayFace.blink();
  }
}

function circlesIn(){
    for(i=0; i<100; i++){
    lowCircleSize -= 0.5;
    }
    circles(lowCircleSize, 900);
}

function circlesOut(){
    for(i=0; i<100; i++){
      if(lowCircleSize<650){
        lowCircleSize += 0.5;
      }
      else{
        lowCircleSize = 650;
      }
    }
    circles(lowCircleSize, 900);
}