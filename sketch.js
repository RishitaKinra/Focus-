

var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(displayWidth-50, displayHeight-200)
  
  // creating bow to shoot arrow
  bow = createSprite(displayWidth-150,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 2;
  
   score = 0  

   arrowGroup = createGroup();
  redBalloonGroup = createGroup();
  greenBalloonGroup = createGroup();
  blueBalloonGroup = createGroup();
  pinkBalloonGroup = createGroup();
 
  
}

function draw() {

  background(backgroundImage);

  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }

  if(arrowGroup.isTouching(redBalloonGroup)){
    redBalloonGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 3;
  }
  
  if(arrowGroup.isTouching(greenBalloonGroup)){
    greenBalloonGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  }
  
  if(arrowGroup.isTouching(blueBalloonGroup)){
    blueBalloonGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 2;
  }
  
  if(arrowGroup.isTouching(pinkBalloonGroup)){
    pinkBalloonGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 4;
  }
  
  drawSprites();

  textSize(25);
  fill("white");
  textFont("Lucida Calligraphy");
  text("Score: "+ score, (displayWidth-50)/2,50);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 600;
  red.scale = 0.1;
  redBalloonGroup.add(red);
  return red
  
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 700;
  blue.scale = 0.1;
  blueBalloonGroup.add(blue);
  return blue;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 800;
  green.scale = 0.1;
  greenBalloonGroup.add(green);
  return green;   
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 400;
  pink.scale = 1
  pinkBalloonGroup.add(pink);
  return pink;
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = displayWidth-150;
  arrow.y=bow.y;
  arrow.velocityX = -15;
  arrow.lifetime = 1000;
  arrow.scale = 0.3;
  arrowGroup.add(arrow)
  return arrow;
   
}
