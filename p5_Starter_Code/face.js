class face {
  constructor() {

  }

  display() {
    noStroke();

    // bed
    fill(180, 200, 255);
    beginShape();
    vertex(0, 180);
    vertex(600, 160);
    vertex(600, 600);
    vertex(0, 600);
    endShape(CLOSE);

    // pillow
    fill(255);
    beginShape();
    vertex(50, 220);
    vertex(440, 200);
    vertex(460, 450);
    vertex(70, 470);
    endShape(CLOSE);

    // hair left
    fill(100, 50, 255);
    beginShape();
    vertex(120, 220);
    bezierVertex(70, 290, 160, 330, 110, 380);
    bezierVertex(80, 430, 170, 480, 130, 520);
    bezierVertex(100, 570, 150, 560, 150, 580);
    vertex(380, 580);
    vertex(360, 400);
    endShape(CLOSE);

    // face
    fill(150, 200, 255);
    beginShape();
    vertex(130, 250);
    vertex(130, 340);
    bezierVertex(130, 580, 370, 580, 370, 340);
    vertex(370, 250);
    endShape();

    // neck
    beginShape();
    vertex(220, 400);
    vertex(310, 400);
    vertex(320, 550);
    vertex(230, 550);
    endShape();

    // hair top
    fill(100, 50, 255);
    beginShape();
    vertex(110, 280);
    bezierVertex(90, 120, 380, 120, 380, 280);
    bezierVertex(370, 290, 190, 260, 180, 250);
    bezierVertex(180, 260, 115, 290, 110, 280);
    endShape();

    // hair right
    beginShape();
    vertex(330, 220);
    bezierVertex(280, 290, 370, 330, 320, 380);
    bezierVertex(290, 430, 380, 480, 340, 520);
    bezierVertex(310, 570, 360, 560, 360, 580);
    bezierVertex(370, 560, 350, 580, 390, 480);
    bezierVertex(400, 410, 350, 400, 380, 350);
    bezierVertex(400, 300, 380, 290, 380, 280);
    endShape();

    // blanket
    fill(255);
    beginShape();
    vertex(0, 550);
    vertex(600, 530);
    vertex(600, 600);
    vertex(0, 600);
    endShape(CLOSE);
  }

 blink() {
      fill(100, 50, 255);
      noStroke();
      ellipse(165, 340, 5, 5);
      ellipse(270, 335, 5, 5);
  }

  brows(browY) {
    stroke(100, 50, 255);
    strokeWeight(5);
    line(155, browY, 180, 310);
    line(290, browY-10, 260, 305);
  }
}