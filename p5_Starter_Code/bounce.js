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

  linearbounce(lowY, highY){
    this.y += this.ySpeed;
    if(this.y<=lowY || this.y >= highY){
      this.ySpeed *= -1;
    }
  }

  wallbounce(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if(this.x<=0 || this.x >= width){
      this.xSpeed *= -1;
    }
    if(this.y<=0 || this.y >= height){
      this.ySpeed *= -1;
    }

  }
}  