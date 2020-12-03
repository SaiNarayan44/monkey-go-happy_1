
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;


var banana,food;
var survival = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas(600,600)
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width/2;
}


function draw() 
{
 background("white");
  
  text("Score: "+ score, 500,50);
  
   if (ground.x < 150)
    {
      ground.x = ground.width/2;
    }
   
  if(keyDown("space")) 
   {
        monkey.velocityY = -12;
   }     
   monkey.velocityY= monkey.velocityY+0.8;
  
  spawnFood();
   spawnObstacle();
   monkey.collide(ground);
     
     stroke("white");
     textSize(20);
     fill("white");
     text("score: "+ score,500,50);
     
     stroke("black");
     textSize(20);
     fill("black");
     survivalTime=Math.ceil(frameCount/frameRate())
     text("Survival Time: "+ survivalTime,100,50);
  
  
  
  switch(score)
  {
    case 10:monkey.scale=0.12;
      break;
      
      case 20:monkey.scale=0.14;
      break;
      
      case 30:monkey.scale=0.16;
      break;
      
      case 10:monkey.scale=0.18;
      break;
      
      default:break;
  }
  
  if (obstacleGroup.isTouching(monkey))
    {
      monkey.scale=0.2;
    }
  
  score = score + Math.round(getFrameRate()/60);
  
  drawSprites();
 
}
 function spawnFood()
{
   if (frameCount % 80 === 0)
   {
    banana = createSprite(600,290,20,20);
    banana.y= Math.round(random(120,200)); 
    banana.addImage(bananaImage);
    banana.lifetime=200;
    banana.scale=0.05;
     banana.velocityX = -5;
     FoodGroup.add(banana);
     
   if (FoodGroup.isTouching(monkey))
     {
       score = +2;
       banana.destroyEach();
       
     }
  
   }
}

 function spawnObstacle()
{
  if(frameCount%300 === 0)
  {
    obstacle = createSprite(800,320,20,20)
    obstacle.lifetime=300;
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-6;
    obstacle.scale=0.15
    obstacleGroup.add(obstacle);
    
    
  }
}

