function circles(lowCircleSize,highCircleSize){
  noFill();
  stroke(150, 0, 0, 200);
  strokeWeight(3);

    circleX[0] = random(250, 350);
    circleY[0] = random(250, 350);

    for(let i = 0; i < circleX.length ; i++){
        ellipse(circleX[i], circleY[i], random(lowCircleSize,highCircleSize));
    }
    for(let i = circleX.length - 1;  i > 0; i-- ){
        circleX[i] = circleX[i-1];
        circleY[i] = circleY[i-1];
    }
}