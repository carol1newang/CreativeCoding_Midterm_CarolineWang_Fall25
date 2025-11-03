class stick {
  constructor(){
    this.footY = 430;
    this.stickTime = millis();
    this.stickInterval = 100;
  }

  display(){
    fill(0);
    stroke(255);
    strokeWeight(4);
    line(325, 225, 325, 450);
    line(325, 355, 240, 355);
    line(240, 355, 240, 450);

    stroke(255,0,0);
    strokeWeight(2);


    ellipse(300, 200, 80, 80);
    line(310, 239, 315, 350);

    line(315, 350, 240, 355);
    line(240, 355, 220, 430);
    line(220, 430, 205, this.footY);

    line(315, 350, 245, 360);
    line(245, 360, 230, 450);
    line(230, 450, 215, 450);

    line(310, 250, 290, 310);
    line(290, 310, 245, 355);

    line(310, 250, 295, 315);
    line(295, 315, 250, 360);
  }

  update(){
    let currentTime = millis();
    let elapsed = currentTime - this.stickTime;

    if (elapsed < this.stickInterval) {
      this.footY = 425;
    }
    else if (elapsed < this.stickInterval*2){
      this.footY = 430;
    }
    else{
      this.stickTime = currentTime;
    }
  }

}