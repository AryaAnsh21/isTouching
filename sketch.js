var fixedRect, movingRect;
var box1, box2, box3
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1 = createSprite(200,100,50,50)
  box2 = createSprite(350,100,50,50)
  box3 = createSprite(550,200,50,50)
  box1.shapeColor = "green";
  box2.shapeColor = "green";
  box3.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  box2.x = World.mouseX;
  box2.y = World.mouseY;

  if(isTouching(box3,box2))
  {
    box3.shapeColor="red"
    box2.shapeColor="red"
  }
  else 
  {
    box3.shapeColor="green"
    box2.shapeColor="green"
  }
  drawSprites();
}

function isTouching(object1,object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y <object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true;
}
else {
  return false;
}
}