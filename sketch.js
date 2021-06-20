var vir, virImg;
var back, BackImg;
var Lockdown, covid, Group;
var LockdownImg, CovidImg, groupImg;
var Lockdown1, covid1, Group1;
var Sanitizer, mask, vitaminC;
var SanitizerImg, maskImg, vitaminCImg;
//var vitaminC1, mask1, Sanitizer1;
var MvirImg;
var Invi, Invi2, Invi3, Invi4;
var house, houseImg;
var house1;
var Imun = 100;
var feedB;
var gameMode = 0;
var vir0;
var gameOver, gameOverImg;
var Finish, FinishImg
var Code, CodeImg;

function preload(){
  
  MvirImg=loadAnimation("MVir/MVir1.png","MVir/MVir2.png","MVir/MVir3.png","MVir/MVir4.png","MVir/MVir5.png","MVir/MVir6.png","MVir/MVir7.png","MVir/MVir8.png");
  virImg=loadAnimation("Vir/VIR1.png","Vir/VIR2.png","Vir/VIR3.png","Vir/VIR4.png","Vir/VIR5.png","Vir/VIR6.png","Vir/VIR7.png","Vir/VIR8.png");
  BackImg=loadImage("bg.png");
  CovidImg=loadImage("Enemy/Covid.png");
  groupImg=loadImage("Enemy/Group.png");
  LockdownImg=loadImage("Enemy/Lockdown.png");
  houseImg=loadImage("Help/house.png");
  maskImg=loadImage("Help/Mask.png");
  SanitizerImg=loadImage("Help/Sanitizer.png");
  vir0=loadImage("Vir/VIR3.png");
  gameOverImg=loadAnimation("GameOver/red.png", "GameOver/yellow.png", "GameOver/white.png", "GameOver/blue.png")
  FinishImg=loadImage("Finish.png")
  CodeImg=loadAnimation("GameOver/blue1.png", "GameOver/red1.png", "GameOver/white1.png", "GameOver/yellow1.png");
}

function setup() {
  createCanvas(1700,750);
  
  back=createSprite(displayWidth*2.5, 750/2, 10000, 750)
  back.addImage("back", BackImg);
  back.debug=true;
  back.velocityX = -3

  vir=createSprite(120, 607, 30, 30);
  vir.addAnimation("vir",virImg);

  invi=createSprite(640,225,displayWidth,10);
  invi.visible = false;

  invi2=createSprite(28,745, displayWidth, 10);
  invi2.visible = false;

  invi3=createSprite(350, 577, 10, 350);
  invi3.visible = false;

  invi4=createSprite(40, 577, 10, 350);
  invi4.visible = false;

  Group=createSprite(1916,375,10,10);
  Group.addImage("group of people",groupImg);
  Group.scale = 0.5
  Group.velocityX=-3;
   
  covid=createSprite(1060, 550, 20, 20);
  covid.addImage("Covid", CovidImg);
  covid.scale = 0.4;  
  covid.velocityX=-3;

  Lockdown=createSprite(4000,450,10,10);
  Lockdown.addImage("Lockdown",LockdownImg);
  Lockdown.velocityX=-3;

  Lockdown1=createSprite(7000, 450, 10, 10);
  Lockdown1.addImage("Lockdown",LockdownImg)
  Lockdown1.velocityX=-3;

  house=createSprite(3500, 300, 10, 10);
  house.addImage("house", houseImg);
  house.velocityX=-3;

  house1=createSprite(6500, 300, 10, 10);
  house1.addImage("house", houseImg);
  house1.velocityX=-3

  mask=createSprite(3000, 600, 10, 10);
  mask.addImage("mask", maskImg);
  mask.velocityX=-3;

  Group1=createSprite(4700, 550, 20, 20);
  Group1.addImage("group", groupImg);
  Group1.scale = 0.5
  Group1.velocityX=-3;

  Sanitizer=createSprite(5300, 490, 20, 20);
  Sanitizer.addImage("San", SanitizerImg);
  Sanitizer.velocityX = -3

  covid1=createSprite(6000, 600, 20, 20);
  covid1.addImage("Covid", CovidImg);
  covid1.scale = 0.4;
  covid1.velocityX=-3;

  gameOver=createSprite(850, 375, displayWidth, displayHeight);
  gameOver.addAnimation("game", gameOverImg);
  gameOver.visible = false;

  Code=createSprite(850, 375, displayWidth, displayHeight);
  Code.addAnimation("Code", CodeImg)
  Code.visible = false;
  Code.scale = 0.75
  

  feedB=createSprite(1562, 70, 120, 10);

  Finish = createSprite(8000, 550, 20, 20);
  Finish.addImage("Finish", FinishImg);
  Finish.velocityX = -3;
  Finish.scale = 1.5
 

}

function draw() {

  background(0, 0, 0);  
  

  if(keyDown(UP_ARROW)){
    vir.y = vir.y-10;
  }

  if(keyDown(DOWN_ARROW)){
    vir.y = vir.y+10;
  }

  if(keyDown(RIGHT_ARROW)){
    vir.x = vir.x+10
  }

  if(keyDown(LEFT_ARROW)){
    vir.x = vir.x-10;
  }

  if(Imun >= 70){
    feedB.shapeColor = ("Green"); 
  }

  if(Imun >= 30 && Imun < 70){
    feedB.shapeColor = ("yellow");
  }

  if(Imun < 30){
    feedB.shapeColor = ("red");
  }

  if(covid.isTouching(vir)){
    gameMode = 0;
    vir.addAnimation("vir", virImg);
  }

  if(Lockdown.visible === false){
    //Imun = Imun + 10;
    gameMode = 0;
    vir.addAnimation("vir", virImg);
  }

  if(Lockdown1.visible === false){
    gameMode = 0
    vir.addAnimation("vir", virImg);
  }

  if(Group1.visible === false){
    //Imun = Imun + 20
    gameMode = 0;
    vir.addAnimation("vir", virImg);
  }

  if(covid1.isTouching(vir)){
    gameMode = 0;
    vir.addAnimation("vir", virImg);
  }

  if (keyDown('space')){
      back.velocityX = -10;
      covid.velocityX = -10;
      covid1.velocityX = -10;
      Sanitizer.velocityX = -10;
      //Sanitizer1.velocityX = 0;
      house.velocityX = -10;
      house1.velocityX = -10;
      Lockdown.velocityX = -10;
      Lockdown1.velocityX = -10;
      Group1.velocityX = -10;
      Group.velocityX = -10;
      mask.velocityX = -10
      Finish.velocityX = -10;
  }


  

  if(gameMode === 0){

    if(covid.isTouching(vir)){
      Imun = Imun - 30
      covid.visible = false;
      covid.y = 10;
    }

    if(covid1.isTouching(vir)){
      Imun = Imun - 30
      covid1.visible = false;
      covid1.y = 10;
    }

    if(Imun <= 0){
      back.velocityX = 0;
      covid.velocityX = 0;
      covid1.velocityX = 0;
      Sanitizer.velocityX = 0;
      //Sanitizer1.velocityX = 0;
      house.velocityX = 0;
      Lockdown.velocityX = 0;
      //Lockdown1.velocityX = 0;
      Group1.velocityX = 0;
      Group.velocityX = 0;
      vir.addImage("vir", vir0);
      gameOver.visible = true;
    }

    if(house.isTouching(vir)){
      house.visible = false;
      //Lockdown.visible = false;
      Lockdown.y = -10000;
      //vir.addAnimation("vir", virImg);
    }

    if(house1.isTouching(vir)){
      house1.visible = false;
      Lockdown1.y = -10000
    }

    if(Group.isTouching(vir)){
      Imun = Imun - 20
      Group.visible = false;
      Group.y = 10;
    }

    if(Group1.isTouching(vir)){
      Imun = Imun - 30
      Group1.visible = false;
      Group1.y = -1000;
    }
    if(Lockdown.isTouching(vir)){
      Imun = Imun - 40;
      Lockdown.visible = false;
      Lockdown.y = -10000;
    }

    if(Lockdown1.isTouching(vir)){
      Imun = Imun - 40;
      Lockdown1.visible = false;
      Lockdown1.y = -10000;
    }

    if(Lockdown.y === -10000){
      Lockdown.visible = true;
    }

    if(Lockdown1.y === -10000){
      Lockdown1.visible = true;
    }

    if(Sanitizer.isTouching(vir)){
      Imun = Imun + 20;
      Sanitizer.visible = false;
      Sanitizer.y = -5;
    }

    if(Group1.y === -1000){
      Group1.visible = true;
    }

    if(Finish.isTouching(vir)){
      Code.visible = true;
    }

}
  
  if(vir.isTouching(mask)){
    vir.addAnimation("vir", MvirImg);
    mask.visible = false;
    mask.y = 10;
    gameMode = 1;
  }
  
  if(gameMode === 1){
    
    if(covid.isTouching(vir)){
      Imun = Imun - 20
      covid.visible = false;
      covid.y = 10;
      vir.addAnimation("vir", virImg);
    }

    if(Imun <= 0){
      back.velocityX = 0;
      covid.velocityX = 0;
      covid1.velocityX = 0;
      Sanitizer.velocityX = 0;
      //Sanitizer1.velocityX = 0;
      house.velocityX = 0;
      Lockdown.velocityX = 0;
      //Lockdown1.velocityX = 0;
      Group1.velocityX = 0;
      Group.velocityX = 0;
      vir.addImage("vir", vir0);
      gameOver.visible = true;
    }

    if(house.isTouching(vir)){
      house.visible = false;
      //Lockdown.visible = false;
      Lockdown.y = -10000;
      //vir.addAnimation("vir", MvirImg);
      //house.y = -100;
    }

    if(house1.isTouching(vir)){
      house1.visible = false;
      //Lockdown.visible = false;
      Lockdown1.y = -10000;
      //vir.addAnimation("vir", MvirImg);
      //house.y = -100;
    }

    if(Group.isTouching(vir)){
      Imun = Imun - 10
      Group.visible = false;
      Group.y = 10;
      vir.addAnimation("vir", virImg);
    }

    if(Group1.isTouching(vir)){
      Imun = Imun - 10
      Group1.visible = false;
      Group1.y = -1000;
      vir.addAnimation("vir", virImg);
    }

    if(Lockdown.isTouching(vir)){
      Imun = Imun - 30;
      Lockdown.visible = false;
      Lockdown.y = -10000
      vir.addAnimation("vir", virImg);
    }

    if(Lockdown1.isTouching(vir)){
      Imun = Imun - 30;
      Lockdown1.visible = false;
      Lockdown1.y = -10000
      vir.addAnimation("vir", virImg);
    }

    if(Sanitizer.isTouching(vir)){
      Imun = Imun + 20;
      Sanitizer.visible = false;
      Sanitizer.y = -5;
    }

    if(Finish.isTouching(vir)){
      Code.visible = true;
    }
  }

  

  vir.collide(invi);
  vir.collide(invi2);
  vir.collide(invi3);
  vir.collide(invi4);

  
  drawSprites();

  textSize(30);
  fill("blue");
  text("Imun: "+Imun, 1500, 61)


  textSize(30);
  fill("black");
  text(mouseX+","+mouseY,mouseX,mouseY);


}