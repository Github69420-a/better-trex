



var trex ,trex_running;
var ground;
var invisibleGround;
function preload()
{
  trex_running = loadAnimation("trex1.png", "trex2.png", "trex3.png");
  ground = loadImage("ground2.png");
}

function setup()
{
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(200, 150, 100, 100);
  trex.addAnimation("hello", trex_running);
  trex.scale = (0.5);
  ground1 = createSprite(300, 180, 100, 100);
  ground1.addImage("hello", ground);
  invisibleGround = createSprite(200, 190, 100, 5);
  invisibleGround.visible = false;
}

function draw()
{
  background("white");
  drawSprites();
  text(mouseX +","+ mouseY, mouseX, mouseY);
  jump();
  trex.collide(invisibleGround);
  /*if (trex.isTouching(ground1)) {
    trex.velocity = 0
  }*/
  ground1.velocityX = -2;
  if (ground1.x < 0) {
    ground1.x = ground.width / 2;
  }
}

function jump() 
{
  if (keyWentDown("space") && trex.y >= 125) {
      trex.velocityY = -10;
  }
  trex.velocityY += 0.65;
}