class bubble {
  constructor(x, y, size, maxSize) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.maxSize = maxSize;
  }

  display() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, 200 * this.size, 200 * this.size);
    ellipse(this.x - 120 * this.size, this.y - 25 * this.size, 120 * this.size+5, 120 * this.size+5);
    ellipse(this.x - 140 * this.size, this.y + 50 * this.size, 100 * this.size+5, 100 * this.size+5);
    ellipse(this.x + 100 * this.size, this.y, 150 * this.size+5, 150 * this.size+5);
    ellipse(this.x - 50 * this.size, this.y - 50 * this.size, 150 * this.size+5, 150 * this.size+5);
    ellipse(this.x + 50 * this.size, this.y - 65 * this.size, 120 * this.size+5, 120 * this.size+5);
    ellipse(this.x - 50 * this.size, this.y + 50 * this.size, 170 * this.size+5, 170 * this.size+5);
    ellipse(this.x + 20 * this.size, this.y + 75 * this.size, 130 * this.size+5, 130 * this.size+5);
    ellipse(this.x + 100 * this.size, this.y + 60 * this.size, 120 * this.size+5, 120 * this.size+5);

    fill(0);   
    ellipse(this.x, this.y, 200 * this.size, 200 * this.size);
    ellipse(this.x - 120 * this.size, this.y - 25 * this.size, 120 * this.size, 120 * this.size);
    ellipse(this.x - 140 * this.size, this.y + 50 * this.size, 100 * this.size, 100 * this.size);
    ellipse(this.x + 100 * this.size, this.y, 150 * this.size, 150 * this.size);
    ellipse(this.x - 50 * this.size, this.y - 50 * this.size, 150 * this.size, 150 * this.size);
    ellipse(this.x + 50 * this.size, this.y - 65 * this.size, 120 * this.size, 120 * this.size);
    ellipse(this.x - 50 * this.size, this.y + 50 * this.size, 170 * this.size, 170 * this.size);
    ellipse(this.x + 20 * this.size, this.y + 75 * this.size, 130 * this.size, 130 * this.size);
    ellipse(this.x + 100 * this.size, this.y + 60 * this.size, 120 * this.size, 120 * this.size);
  }

  move(newX, newY, speed) {
    this.x += (newX - this.x) * speed;
    this.y += (newY - this.y) * speed;
  }

  grow(growSpeed){
    this.size = min(this.size + growSpeed, this.maxSize);
  }
}