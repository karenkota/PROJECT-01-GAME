// Our class that will generate virus instances.
class Virus {
  constructor(virus){
    this.virusImage = new Image();
    this.virusImage.src = ("./images/virus.png");
    this.width = 20;
    this.height = 20;
    this.y = 0;
    this.xPos = Math.random() * canvas.width - 50;
    this.speed = 1;
  }

  move() {
    this.y += this.speed;
    this.y %= canvas.height;
  }
        
  draw() {
    ctx.drawImage(this.virusImage, this.xPos,  this.y, this.width, this.height);
  }
}

// Our class that will generate vacin instances.
class Vacin {
  constructor(vacin){
    this.vacinImage = new Image();
    this.vacinImage.src = ("./images/medicine.png");
    this.width = 30;
    this.height = 30;
    this.y = 0;
    this.xPos = Math.random() * canvas.width - 50;
    this.speed = 1;
  }

  move() {
    this.y += this.speed;
    this.y %= canvas.height;
  }
        
  draw() {
    ctx.drawImage(this.vacinImage, this.xPos,  this.y, this.width, this.height);
  }
}

