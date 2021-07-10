var bath,brush,drink,eat,gym,bg,move,sleep,astronaut;
var edges;
function preload(){
  bath = loadAnimation("./Astronaut's daily routine/bath1.png","./Astronaut's daily routine/bath2.png");
  brush = loadAnimation("./Astronaut's daily routine/brush.png");
  drink = loadAnimation("./Astronaut's daily routine/drink1.png","./Astronaut's daily routine/drink2.png");
  eat =  loadAnimation("./Astronaut's daily routine/eat1.png","./Astronaut's daily routine/eat2.png");
  gym = loadAnimation("./Astronaut's daily routine/gym1.png","./Astronaut's daily routine/gym2.png","./Astronaut's daily routine/gym11.png","./Astronaut's daily routine/gym12.png");
  bg = loadImage("./Astronaut's daily routine/iss.png");
  sleep = loadAnimation("./Astronaut's daily routine/sleep.png");
  move = loadAnimation("./Astronaut's daily routine/move.png","./Astronaut's daily routine/move1.png");

}
function setup() {
  createCanvas(800,400);

  //iss=createSprite(800,400);
  //iss.addImage("image",bg);

  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleep",sleep);
  astronaut.scale=0.1;

 
  
}

function draw() {
   background(bg);  
    drawSprites();

   fill("white");
    textSize(25);
      text("Instructions :",20,35);

    textSize(15);
    text("Up Arrow = Brushing",20,55);
    text("Down Arrow = Gymming",20,70);
    text("Left Arrow = Eating ",20,85);
    text("Right Arrow = Bathing",20,100);
    text("m key = Moving",20,115);

    edges =  createEdgeSprites();
    astronaut.bounceOff(edges);

    if(keyDown("UP_ARROW")){
      astronaut.addAnimation("brushing",brush);
      astronaut.changeAnimation("brushing");
      astronaut.y=350;
      astronaut.velocityX=0;
      astronaut.velocityY=0;
      }
  
      if(keyDown("DOWN_ARROW")){
      astronaut.addAnimation("gymming",gym);
      astronaut.changeAnimation("gymming");
      astronaut.y=350;
      astronaut.velocityX=0;
      astronaut.velocityY=0;
     }
  
      if(keyDown("LEFT_ARROW")){
      astronaut.addAnimation("eating",eat);
      astronaut.changeAnimation("eating");
      astronaut.y=350;
      astronaut.velocityX=0;
      astronaut.velocityY=0;
      }
  
      if(keyDown("RIGHT_ARROW")){
      astronaut.addAnimation("bathing",bath);
      astronaut.changeAnimation("bathing");
      astronaut.y=350;
      astronaut.velocityX=0;
      astronaut.velocityY=0;
      }
  
      if(keyDown("m")){
      astronaut.addAnimation("moving",move);
      astronaut.changeAnimation("moving");
      astronaut.velocityX=1;
      astronaut.velocityY=1;
      }
   
    

  }