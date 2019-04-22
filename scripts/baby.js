class Baby {
    constructor(){
      this.babyImage = new Image();
      this.babyImage.src = ("./images/baby1.png");
      this.width = 100;
      this.height = 100;
      this.y = 400;
      this.x = 400;
    }
    draw() {
      ctx.drawImage(this.babyImage, this.x,  this.y, this.width, this.height);
    }
  }

let newBaby = new Baby();
window.addEventListener("keyup", function(e){
    if (e.keyCode === 37){
        console.log ("moveLeft, baby!");
        if (newBaby.x <= 0) return;
        newBaby.x -= 80;
    } else if (e.keyCode === 39){
        console.log ("moveRight, baby!");
        if (newBaby.x >= 800 - 80) return;
        newBaby.x += 80;
    }
})

function left(){
    console.log ("moveLeft, baby!");
        //limits for move - into the canvas's width.
        if (newBaby.x <= 0) return;
        newBaby.x -= 80;
}

function right(){
    console.log ("moveRight, baby!");
        if (newBaby.x >= 800 - 80) return;
        newBaby.x += 80;
}
