// CREATE BACKGROUND
// Getting the DOM element.
var canvas = document.getElementById('canvas');
// Getting the 2d context.
var ctx = canvas.getContext('2d');

// Play Music.
let audio = new Audio(src='./images/mp3/IssoTitas.mp3');
let audioVerify = true;
function play(){
  if (audioVerify){
    audio.play();
    audioVerify = !audioVerify;
} else {
    audio.pause();
    audioVerify = !audioVerify;
  }
}

var img = new Image();
img.src = './images/background.jpg';
img.width = 800;
img.height = 500;

var backgroundImage = {
  img: img,
  y: 0,
  speed: 1,

  move: function() {
  this.y += this.speed;
  this.y %= canvas.height;
  },

  draw: function() {
    ctx.drawImage(this.img, 0,  this.y, 800, 500);
    if (this.speed < 0) {
      ctx.drawImage(this.img, 0, this.y + canvas.height, 800, 500);
    } else {
      ctx.drawImage(this.img, 0, this.y - this.img.height, 800, 500);
    }
  },
};

// VIRUS_STORE
const VIRUS_STORE = [];
// Animation frames counter.
let frames = 0;
const createVirus = () => {
  //if frames = odd.
    if (frames % 70 === 0) {
    VIRUS_STORE.push(new Virus());
  }
}
// This functions performs a loop in the virus array and draw each virus.
const drawVirus = () => {
  VIRUS_STORE.forEach(virusVariola => virusVariola.draw());
}
const moveVirus = () => {
  VIRUS_STORE.forEach(virusVariola => virusVariola.move());
}

// VACIN_STORE
const VACIN_STORE= [];
const createVacin = () => {
  if (frames % 35 === 0) {
  VACIN_STORE.push(new Vacin()); 
  }
}
const drawVacin = () => {
  VACIN_STORE.forEach(vacininha => vacininha.draw());
}
const moveVacin = () => {
  VACIN_STORE.forEach(vacininha => vacininha.move());
}

// Colission checker.
function CollisionVirus() {
  for (let i=0; i < VIRUS_STORE.length; i += 1){
  if ((newBaby.y <= VIRUS_STORE[i].y + VIRUS_STORE[i].height) && (newBaby.x + newBaby.width-20 >= VIRUS_STORE[i].xPos) && (newBaby.x <= VIRUS_STORE[i].xPos + VIRUS_STORE[i].width)){
     gameOver()
    }
  }
} 

// print game over message.
function gameOver(){
  document.getElementById('THE-END').style.display ='block'; 
  document.querySelector('.container').style.display ='none';
}

function restartGame(){
  document.location.reload(true);
}

//Count points.
let points = 0;
  function CollisionVacin() {
    for (let i = 0; i < VACIN_STORE.length; i += 1){
      //verify collision's height, collision's rigth side and collision's left side. 
    if ((newBaby.y <= VACIN_STORE[i].y + VACIN_STORE[i].height) && (newBaby.x + newBaby.width+20 >= VACIN_STORE[i].xPos) && (newBaby.x <= VACIN_STORE[i].xPos + VACIN_STORE[i].width)){
    points +=1;
    VACIN_STORE.splice(i, 1);
    } 
    if (points % 21 === 0){
      VIRUS_STORE.splice(0, 1);
    }
  } 
} 


// MOTOR.
function updateCanvas() {
  ctx.clearRect(0, 0, 800, 500);
  backgroundImage.draw();
  backgroundImage.move(); 
  createVacin();
  createVirus();
  drawVacin();
  drawVirus();
  newBaby.draw();
  moveVirus();
  moveVacin();
  CollisionVacin();
  document.getElementById('count').innerText = points;
  CollisionVirus();
  frames += 1;
  if (running) {
  window.requestAnimationFrame(updateCanvas);
  }
}

// Starting animation.
running = true;
updateCanvas();

img.onload = updateCanvas;