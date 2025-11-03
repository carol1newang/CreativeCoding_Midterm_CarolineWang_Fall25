class lines {
  constructor(length, startX, startY, c) {
    this.length = length;
    this.c = c;
    this.x = new Array(length);
    this.y = new Array(length);

    for (let i = 0; i < length; i++) {
      this.x[i] = startX;
      this.y[i] = startY;
    }
  }

  update(lowX, highX, lowY, highY, distance) {
    let newX = this.x[0] + random(-distance, distance);
    let newY = this.y[0] + random(-distance, distance);

    newX = constrain(newX, lowX, highX);
    newY = constrain(newY, lowY, highY);

    for (let i = this.length - 1; i > 0; i--) {
      this.x[i] = this.x[i - 1];
      this.y[i] = this.y[i - 1];
    }

    this.x[0] = newX;
    this.y[0] = newY;
  }

  display() {
    stroke(this.c);
    strokeWeight(1.5);
    for (let i = 1; i < this.length; i++) {
      line(this.x[i - 1], this.y[i - 1], this.x[i], this.y[i]);
    }
  }
}