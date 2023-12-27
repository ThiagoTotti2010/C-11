
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  sea = createSprite (400,200);
  ship = createSprite (130,200,30,30);
  ship.addAnimation("Navegando",shipImg1)
  ship.scale = 0.2
  createCanvas(400,400);
  sea.addImage(seaImg);
  sea.velocityX = -5;
sea.scale = 0.3;
}

function draw() {
  background("blue");

  if(sea.x < 0){
    sea.x = sea.width/2;
  }
   drawSprites();
 
}
