//'Masked Man in COVID WORLD' - Developed by: Ananya Yogesh.
// variables
var maskman, maskman_Image;
var road, road_Image;
var basket1, basket1_Image;
var basket2, basket2_Image;
var basket3, basket3_Image;
var junk, junk_Image;
var unmasked1, unmasked1_Image;
var unmasked2, unmasked2_Image;
var scene1, scene1_Image;
var scene2, scene2_Image;
var GoHome, GoHome_Img;
var Shower, Shower_Img;
var NoShower, NoShower_Img;
var HomeOut, HomeOut_Img;
var warning;
var immunity=100;
var riskfactor=0;
var checkOnce = false;
var start, start_Img, restart, restart_Img, hmpg, hmpg_Img; 
var HPS;
var gameState = "HP";
var ImmBoost;
var Ding, gLost;
var playOnce = false;
var Happy,Sad;
var steps,caution,sneeze;
var caOnce = false;
var jcOnce = false;
var MMGone, MMGone_Img;



function preload(){  
  //preloading sound files.
  soundFormats('mp3');
  HPS = loadSound('Home_Page_Sound.mp3');
  ImmBoost = loadSound('Imm_Boost.mp3');
  Ding = loadSound('Ding-dong.mp3');
  gLost = loadSound('Lost.mp3');
  Happy = loadSound('Happy.mp3');
  Sad = loadSound('Sad.mp3');
  steps = loadSound('steps.mp3');
  caution = loadSound('caution.mp3');
  sneeze = loadSound('Sneeze.mp3');
  
  //preloading Images.
  road_Image = loadImage("Road.jpg");
  maskman_Image = loadImage("Person_Masked1.png");
  basket1_Image = loadImage("Veg_Cart.png");
  basket2_Image = loadImage("Healthy_Food.png");
  basket3_Image = loadImage("Fruit_Veg.png");
  junk_Image = loadImage("Junk Food.png");
  unmasked1_Image =loadImage("Person_NonMasked.png");
  unmasked2_Image = loadImage("Person_Unmasked.png");
  scene1_Image = loadImage("Masked man_home_without shower.png");
  scene2_Image = loadImage("Masked Man_Taken Shower.png");
  GoHome_Img = loadImage("GoHome.jpg");
  Shower_Img = loadImage("Shower.jpg");
  NoShower_Img = loadImage("NoShower.jpg");
  HomeOut_Img = loadImage("MaskedManHomeOut.jpg");
  start_Img = loadImage("Start.png");
  restart_Img = loadImage("Restart.jpg");
  hmpg_Img = loadImage("Home_Page.jpg");  
  MMGone_Img = loadImage("MaskedMan_Gone.png");
}
  
function setup() {
  //creating canvas
  road = createSprite(300,100,400,100);
  road.addImage(road_Image);
  road.width = 8000;
  road.height = 500;
  road.scale = 3.0;
  createCanvas(road.width, road.height);
  
  //creating Masked Man
  maskman = createSprite(300,100,40,40);
  maskman.addImage(maskman_Image);
  maskman.width = 40;
  maskman.height = 40;
  
  //creating vegetable basket
  basket1 = createSprite(100,120,40,40);
  basket1.addImage(basket1_Image);
  
  //creating fruit or healthy basket
  //basket2 = createSprite(460,175,40,40);
  basket2 = createSprite(745,175,40,40);
  basket2.addImage(basket2_Image);
  basket2.scale = 0.7;
  
  //creating junk food basket
  junk = createSprite(100,440,40,40);
  junk.addImage(junk_Image);
  
  //creating unmasked persons who may be sick
  unmasked1 = createSprite(230,350,40,40);
  unmasked1.addImage(unmasked1_Image);
  unmasked1.scale = 0.5;
  
  unmasked2 = createSprite(180,375,40,40);
  unmasked2.addImage(unmasked2_Image);
  
  //creating scene where masked man prefers to relax at home without taking a shower.
  scene1 = createSprite(370,100,400,100);
  scene1.addImage(scene1_Image);
  scene1.y = scene1.height/2;
  scene1.scale = 1;
  
  //creating scene where masked man prefers to take a shower once he is back home.
  scene2 = createSprite(330,270,400,200);
  scene2.addImage(scene2_Image);
  scene2.y = scene2.height/2;
  scene2.scale = 1.0;
  
  //creating a button to press to go home.
  GoHome = createSprite(500,400,400,400);
  GoHome.addImage(GoHome_Img);
  
  //creating a scene where masked man is standing outside the house before entering the house.
  HomeOut = createSprite(420,250,400,400);
  HomeOut.addImage(HomeOut_Img);
 
  //creating a button to click if masked man wants to take shower first after returning home.
  Shower = createSprite(140,300,100,100);
  Shower.addImage(Shower_Img);
  Shower.scale = 0.75;
  
  //creating a button to click if masked man wants to relax without taking shower after returning home.
  NoShower = createSprite(500,300,400,100);
  NoShower.addImage(NoShower_Img);
  NoShower.scale = 0.75;
   
  //creating a 'Restart' button to click to restart the game, once masked man returns home.
  restart = createSprite(150,400,100,100);
  restart.addImage(restart_Img);
  
  //creating the 'Home Page' of the game with game instructions.
  hmpg = createSprite(460,265,10,10);
  hmpg.addImage(hmpg_Img);
 
  //creating 'Start' button to be placed on the 'Home Page' to start the game.
  start = createSprite(405,490,100,100);
  start.addImage(start_Img);
  
   //creating Masked Man Image on Game Ending
  MMGone = createSprite(75,390,40,40);
  MMGone.addImage(MMGone_Img);
  MMGone.width = 40;
  MMGone.height = 40;
  
  //making all the sprites invisible except 'Home Page' and 'Start' button on it, on loading the game.
  road.visible = false;
  maskman.visible = false;
  basket1.visible = false;
  basket2.visible = false;
  junk.visible = false;
  unmasked1.visible = false;
  unmasked2.visible = false;
  GoHome.visible = false;
  HomeOut.visible = false;
  restart.visible = false; 
  scene1.visible = false;
  scene2.visible = false;
  Shower.visible = false;
  NoShower.visible = false;
  hmpg.visible = true;
  start.visible = true;  
  MMGone.visible = false;
}


function draw() {
  background(147, 139, 128);
  //playing the music on loading the game or home page.
  if(gameState==="HP"){
    HPS.play();
  }
      
  //Moving masked man down on pressing 'Space' key,
  //up on pressing 'G',
  //stopping him from moving up or down on pressing 'H'
  //moving him right on pressing 'B'
  //moving him left on pressing 'Y'
  //stopping him from moving left or right on pressing 'C'
  
  if(keyDown("space"))
  {
    maskman.velocityY = 2;
    steps.play();
  }
  else if(keyDown("h"))
  {
    maskman.velocityY = 0;
    steps.stop();
  }
  
  if(keyDown("b")){
    maskman.velocityX = 2;
    steps.play();
  }
  
  if(keyDown("c")){
    maskman.velocityX = 0;
    steps.stop();
  }
  
  if(keyDown("y"))
  {
    maskman.velocityX = -2;
    steps.play();
  }
  
  if(keyDown("c"))
  {
    maskman.velocityX = 0;
    steps.stop();
  }
  
  if(keyDown("g"))
  {
    maskman.velocityY = -2;
    steps.play();
  }
  
  if(keyDown("h"))
  {
    maskman.velocityY = 0;
    steps.stop();
  }
       
  if((maskman.velocityX ===0) && (maskman.velocityY ===0))
  {
    steps.stop();
  }
  
  drawSprites();  
   
  //increasing the risk factor of masked man on not maintaing social distancing and displaying a caution message.
  if((unmasked1.y - maskman.y < 149) && (maskman.x - unmasked1.x   < 225)) 
  {  
    if(checkOnce === false)
    {
      riskfactor = riskfactor + 20;
      checkOnce = true;
    }  
    if(road.visible === true)
    {
      if(caOnce === false)
      {        
        sneeze.play();
        caOnce = true;
      }        
      stroke(255, 0, 0);
      fill(204, 101, 192, 127); 
      circle(325, 380, 200);
      text("CAUTION!!!",285,350);
      text("Social Distancing not maintained",240,390);
    }
   }  
  else
  {
    checkOnce = false;
    caOnce = false;
  }
   
         
  //adjusting masked man's depth when he comes near fruits basket    
    if((maskman.x > 695) && (maskman.x<827) && (maskman.y < 168))
  {
    maskman.velocityY=0; 
    basket2.depth = basket2.depth+1; 
   
  //if key 'j' is pressed when masked man is near or in front of the fruits basket, assuming that he is buyin/eating fruits or healthy food, increasing his immunity. 
    if(keyWentDown("j"))
    {
      ImmBoost.play();
      immunity = immunity + 5;
      riskfactor = riskfactor - 2;
    }
   }
  else
  {
    basket2.depth = 1;
    maskman.depth = basket2.depth+1;
  }
 
  
  //restricting his movement in vertical direction when he is near the basket1 or vegetable basket.
  if((maskman.x < 188) && (maskman.y < 120))
  {
    maskman.velocityY =0; 
    basket1.depth = maskman.depth+1;
  }
  else
  {
  maskman.depth = basket1.depth+1;
  }
  
  //adjusting masked man's depth when he is near unmasked persons or junk food  or veg basket
  if(maskman.y > unmasked1.y)
  {
    maskman.depth = maskman.depth+1
  }
  
   if(maskman.y > 133)
  {
    junk.depth = (maskman.depth+1);
    unmasked1.depth = (maskman.depth+1);
    unmasked2.depth = (maskman.depth+1);
  }
   
  //displaying a caution message, decreasing his immunity & increasing his risk factor, when he eats junk food i.e, if key 'j' is pressed when he is near junk food.
  if((maskman.x - junk.x < 93) && (junk.y - maskman.y < 184))
  {        
    if(road.visible === true)
    {
      stroke(0, 0, 255);
      fill(204, 101, 192, 100); 
      circle(120, 420, 200);
      text("CAUTION!!!",75,360);
      text("Junk food reduces immunity.",40,420,210, 300);    
    }
  }
  
  if((maskman.x - junk.x < 93) && (junk.y - maskman.y < 184) && (GoHome.visible === true) &&(keyWentDown("j")))
  {
      if(jcOnce === false)
      {
        caution.play();       
        jcOnce = true;
      }
     immunity = immunity - 5;
     riskfactor = riskfactor + 2;
    jcOnce = false;
  } 
  
  //increasing his immunity and reducing risk factor when he buys vegetables, i.e, on pressing 'j' 
  if((maskman.x < 188) && (maskman.y < 120) && (keyWentDown("j")))     
  {
    ImmBoost.play();
    immunity = immunity + 5;
    riskfactor = riskfactor - 2;
  }   
   
 //adjusting his depth when near basket1 or veg basket and restricting his vertical movement. 
 if((maskman.x - basket1.x < 93) && (maskman.y<114))
 {
    basket1.depth = maskman.depth+1;
    maskman.velocityY = 0;
 }
  
  //increasing his immunity and reducing riskfactor on buying or eating vegetables, i.e on pressing 'j' when his is near veg basket. 
  if((maskman.x - basket1.x < 93) && (basket1.y - maskman.y > 49)&& (keyWentDown("j")))
  {
    immunity = immunity + 5;
    riskfactor = riskfactor - 2;
  }   
 
  //stopping the home page's music, on pressing 'Start' button and calling gstart() function.
  if((hmpg.visible === true) &&  mousePressedOver(start)) 
  {
      HPS.stop();
      gameState = "Start";    
      gstart();
  }
 
  //playing door bell ring sound and calling gohome() function on pressing 'Go Home' button
  if((GoHome.visible === true) &&  mousePressedOver(GoHome)) 
  {
      steps.stop();
      maskman.velocityX = 0;
      maskman.velocityY = 0;
      Ding.play();
      gohome();
  }
  
  //Decreasing Risk Factor by '5',playing a happy music and calling shower() fucntion on clicking on 'Click here if you want to take shower and then relax'. button.
  if((Shower.visible === true) &&  mousePressedOver(Shower)) 
  {  
      riskfactor = riskfactor-5;  
      Happy.play();
      shower();
  }
  
  //Increasing Risk Factor by '10',playing a sad music and calling noshower() fucntion on clicking on 'Click here if you want to relax without taking shower'. button.
  if((NoShower.visible === true) && mousePressedOver(NoShower)) 
  {
    riskfactor = riskfactor +10;  
    Sad.play();
    noshower();    
  }
  
  //restarting the game when 'Restart' button is pressed when the masked man is inside the house, by stopping the music and calling gstart() function.
  if((restart.visible === true) && mousePressedOver(restart)) 
  {
      Happy.stop();
      Sad.stop();
      gstart();    
  }
  
  //game ending condition, i.e, when immunity goes below 20% and risk factor goes above 70, playing a lost game sound, also displaying 'Game Over' message and asking the user to press 'r' to restart the game.
  if(((immunity < 20) && (riskfactor > 70)) || ((immunity < 5) && (riskfactor > 50)))
  {  
    if(playOnce === false)
    {  
      gLost.play();
      playOnce = true;
    }
    GoHome.visible = false;
    maskman.visible = false;
    MMGone.visible = true;
    junk.depth = MMGone.depth+1;
    stroke(255, 0, 0);
    fill("pink"); 
    circle(420, 140, 300);
    fill("blue");
    text("GAME OVER!!! Press 'R' to restart",315,80);
    text("The Masked Man failed to maintain his immunity and crossed the maximum risk factor.",280,120,290, 300);  
    maskman.velocityX = 0;
    maskman.velocityY =0;
    if(keyDown("r"))
    {
      maskman.x=300;
      maskman.y=100;
      gstart();
    }  
  }
  
  //restricting the masked man from moving out of the canvas
  if(maskman.x<38)
  {
    maskman.x = 39;
    steps.stop();
  }
  if(maskman.x>830)
  {
    maskman.x = 829;
    steps.stop();
  }
  if(maskman.y<38)
  {
    maskman.y = 37;
    steps.stop();
  }
  if(maskman.y>418)
  {
    maskman.y = 417
    steps.stop();
  }
  
  //Setting immunity maximum value to 100 and minimum to 0
  if(immunity < 0)
  {
    immunity = 0;
  }
  else if(immunity>100)
  {
    immunity = 100;
  }
 
  //Setting the risk factor maximum value to 100 and minimum to 0
  if(riskfactor < 0)
  {
    riskfactor = 0;
  }
  else if(riskfactor > 100)
  { 
    riskfactor = 100
  }
  
  //displaying immunity and risk factor percentages or values everytime except when in the home page.
  if(hmpg.visible === false)
  {
    fill("blue");
    text("Immunity: "+ immunity + "%", 150,15);
    text("Risk Factor: "+ riskfactor + "%", 310,15);
  }
  
 }

//gohome function
function gohome()
{
  HomeOut.visible = true ;
  Shower.visible = true;
  NoShower.visible = true;
  road.visible = false;
  maskman.visible = false;
  basket1.visible = false;
  basket2.visible = false;
  unmasked1.visible = false;
  unmasked2.visible = false;
  junk.visible = false;
  GoHome.visible = false;
  restart.visible = false;  
  hmpg.visible = false;  
  start.visible = false; 
  scene1.visible = false; 
  scene2.visible = false;   
  MMGone.visible = false;
}

//shower function to show the masked man has taken shower on returning home
function shower(){
  scene2.visible = true;
  HomeOut.visible = false;
  Shower.visible = false;
  NoShower.visible = false;
  road.visible = false;
  maskman.visible = false;
  basket1.visible = false;
  basket2.visible = false;
  unmasked1.visible = false;
  unmasked2.visible = false;
  junk.visible = false;
  GoHome.visible = false;
  scene1.visible=false;
  restart.visible = true;  
  hmpg.visible = false;  
  start.visible = false; 
  MMGone.visible = false;
}

//noshower function to show the masked man is relaxing without taking shower on returning home
function noshower(){
  scene1.visible = true;
  scene2.visible = false;
  HomeOut.visible = false;
  Shower.visible = false;
  NoShower.visible = false;
  road.visible = false;
  maskman.visible = false;
  basket1.visible = false;
  basket2.visible = false;
  unmasked1.visible = false;
  unmasked2.visible = false;
  junk.visible = false;
  GoHome.visible = false;  
  restart.visible = true;  
  hmpg.visible = false;  
  start.visible = false;  
  MMGone.visible = false;
}

//fucntion to restart the game on pressing 'Restart' or 'r' button 
function gstart()
{
  road.visible = true;  
  maskman.visible = true;  
  basket1.visible = true;    
  basket2.visible = true;  
  junk.visible = true;   
  unmasked1.visible = true;   
  unmasked2.visible = true;    
  scene1.visible = false;  
  scene2.visible = false;  
  GoHome.visible = true;   
  HomeOut.visible = false;  
  Shower.visible = false;  
  NoShower.visible = false;  
  restart.visible = false;  
  hmpg.visible = false;  
  start.visible = false;  
  MMGone.visible = false;
  immunity=100;
  riskfactor=0;
  maskman.x=300;
  maskman.y=100;
  maskman.velocityY = 0;
  playOnce = false;
}
