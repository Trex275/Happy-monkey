var bananaimage, obstacleimage, obstaclegroup, background, score;

function setup() {
  createCanvas(600, 200);
  
  Monkey = createSprite()
}

function preload() {
  background = loadImage("jungle.jpg")
  
  player_running = 
    loadAnimationMonkey()
}

function draw() {
  background(220);
  drawSprites();
}