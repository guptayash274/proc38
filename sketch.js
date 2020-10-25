
var monkey, monkeyimage;

var jungle, jungleimage, jungleimg2;

var banana, bananaimage, bananaGroup;

var stone, stoneimage, stoneGroup;

var invisible;

var gameState = 1;



function preload() {
 monkeyimage = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
 jungleimage = loadImage("jungle.png"); 
  
 bananaimage = loadImage("banana.png");
  
 stoneimage = loadImage("stone.png");

 jungleimg2 = loadImage("gameOver.jpg");
  
 }

function setup() {
  createCanvas(400, 400);
  
 jungle = createSprite(200, 200, 400, 400);
 jungle.addAnimation("back", jungleimage);
 jungle.scale = 1.45;
  
 monkey = createSprite(50, 350, 20, 20);
 monkey.addAnimation("Walk", monkeyimage);
 monkey.scale = 0.08;
 monkey.velocityY = 0; 
  
  invisible = createSprite(50, 365, 30, 30);
 invisible.visible = false;
  
 bananaGroup = new Group();
  
 stoneGroup = new Group(); 
  
score = 0;  
}

function draw() {
  background(jungleimage);
  
  
  if(gameState === 1) {
    if(keyDown("space")) {
      monkey.velocityY = -20;
     }   
       monkey.velocityY = monkey.velocityY + 0.8;
       
       edges = createEdgeSprites();
       
       monkey.collide(invisible);
       
       Banana();
       
       Stone();
         
      if(monkey.isTouching(stoneGroup)){
       monkey.scale = 0.08;
          
     }
      if(monkey.isTouching(bananaGroup)) {
         score = score + 1;
        bananaGroup.destroyEach();
     }
       
      if(monkey.isTouching(stoneGroup)) {
        gameState = 2;
     }

     drawSprites();
 
  } else if(gameState === 2) {
    background(jungleimg2);
    bananaGroup.velocityX = 0;
    bananaGroup.destroyEach();
   
    stoneGroup.velocityX = 0;
    stoneGroup.destroyEach();
   
   score = 0;
   
   /*fill("red");
   textSize(15);
   text("Game Over", 180, 200);*/
  }
  
    
  stroke("white");
  textSize(20);
  fill("red");
  text("Score: " + score, 180, 50);
}

function Banana() {
 if(frameCount % 100 === 0) {
  banana = createSprite(420, 200, 10, 10);
  banana.addAnimation("fruit", bananaimage);
  banana.scale = 0.05;
  
  banana.velocityX = -6;
  camera.velocityX = 10;
  camera.visible = false;
  bananaGroup.add(banana);
 }
}

function Stone() {
 if(frameCount % 120 === 0) {  
  stone = createSprite(420, 350, 10, 10);
  stone.addAnimation("stone", stoneimage);
  stone.scale = 0.2;
  
  stone.velocityX = -7;
  
  stoneGroup.add(stone);
      
    }
}

