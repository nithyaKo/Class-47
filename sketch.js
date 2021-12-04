

function preload()
{
  coin1 = createSprite 
  coin1 = createSprite
  coin1 = createSprite
  coin1 = createSprite
  coin1 = createSprite
  coin1 = createSprite
  coin1 = createSprite
  coin1 = createSprite
  coin1 = createSprite
  coin1 = createSprite
  coin1 = createSprite
  coin1 = createSprite
  coin1 = createSprite
  coin1 = createSprite
  coin1 = createSprite
  coin1 = createSprite
  coin1 = createSprite
  coin1 = createSprite
  coin1 = createSprite
  coin1 = createSprite
  coin1 = createSprite
  coin1 = createSprite
  coin1 = createSprite
  coin1 = createSprite
  
  
  pacman = loadImage("Pacman.png")
Background = loadImage("Pacman Background.png")
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  pacman = createSprite(100,50,30,30)
  pacman.addImage(pacman)
  pacman.scale = 0.5;
  pacman.setCollider("rectangle",0,0,200,200)

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background.addImage(Background)
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;

if(keyDown(LEFT_ARROW)){
  pacman.x = pacman.x - 2
}
else if(keyDown(RIGHT_ARROW)){
pacman.x = pacman.x + 2
}
else if(keyDown(UP_ARROW)){
pacman.y = pacman.y - 2
}
else if(keyDown(DOWN_ARROW)){
  pacman.y = pacman.y + 2
}
  drawSprites();
}



  


