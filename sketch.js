var fixedRect, movingRect;
var box1, box2;
var b1, b2, b3, b4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1 = createSprite(600,600,50,50);
  box2 = createSprite(600,200,50,50);
  b1 = createSprite(0,400,50,50);
  b1.velocityX = 5;
  b2 = createSprite(1200,400,50,50);
  b2.velocityX = -5;
  b3 = createSprite(600,0,50,50);
  b3.velocityY = 5;
  b4 = createSprite(600,1200,50,50);
  b4.velocityY = -5;


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  box1.x = World.mouseX;
  box1.y = World.mouseY;


  drawSprites();
 if(collide(box1,box2)){
   box1.shapeColor = "white";
   box2.shapeColor = "white";
 }
 else {
   box1.shapeColor = "grey";
   box2.shapeColor = "grey";
 }
 console.log(collide(box1,box2));
 
 bounceOff(b3,b4);
}

