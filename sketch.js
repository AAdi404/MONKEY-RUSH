var PLAY=1
var END=0;
var gameState=PLAY;
var gameoverSound;
var jumpSound;
var rockSound;
var progressSound;
var eatSound;
var gameoverImage;
var restartImage;
var monkeyImage1;
var monkeyImage2;
var monkeyImage3;
var monkeyImage4;
var rockImage;
var fruit1Image;
var fruit2Image;
var fruit3Image;
var fruit4Image;
var playgroundImage1;
var playgroundImage2;
var playgroundImage3;
var gameover;
var restart;
var stopper1;
var stopper2;
var stopper3;
var stopper4;
var monkey1;
var rock;
var fruit1;
var fruit2;
var fruit3;
var fruit4;
var fruitGroup1;
var fruitGroup2;
var fruitGroup3;
var fruitGroup4;
var rockGroup;
var playground1;
var playground2;
var playground3;
var life;
var time;
var speed;
var points;
var added;
var missed;
var left;
var deducted;
var touched;
var avoid;
function preload(){
gameoverSound=loadSound("gameover.mp3");
jumpSound=loadSound("jump.mp3");
rockSound=loadSound("die.mp3");
eatSound=loadSound("eatSound.mp3");
progressSound=loadSound("checkPoint.mp3");
monkeyImage1=loadAnimation("monkey1.png","monkey2.png","monkey3.png");
monkeyImage2=loadAnimation("monkey4.png");
monkeyImage3=loadAnimation("monkey5.png");
monkeyImage4=loadAnimation("monkey6.png");
gameoverImage=loadImage("gameover.png");
restartImage=loadImage("restart.png");
rockImage=loadImage("rock.png");
playgroundImage1=loadAnimation("zoo2.png");
playgroundImage2=loadImage("city.jpg");
playgroundImage3=loadAnimation("zoo1.png");
fruit1Image=loadImage("banana.png");
fruit2Image=loadImage("fruit1.png");
fruit3Image=loadImage("fruit2.png");
fruit4Image=loadImage("fruit3.png");
}
function setup() {
createCanvas(600,600);
playground1=createSprite(300,300,20,20);
playground1.addAnimation("zoo1",playgroundImage3);
playground1.addAnimation("zoo2",playgroundImage1);
playground1.scale=0.75;
playground1.depth=1.5;
playground2=createSprite(900,150,20,20);
playground2.addImage(playgroundImage2);
playground2.scale=1;
playground2.background="transparent";
playground3=createSprite(1500,150,20,20);
playground3.addImage(playgroundImage2);
playground3.scale=1;
gameover=createSprite(300,200,20,20);
gameover.addImage(gameoverImage);
gameover.scale=0.2;
gameover.depth=1;
restart=createSprite(300,450,20,20);
restart.addImage(restartImage);
restart.scale=0.4;
restart.depth=1;
monkey1=createSprite(150,490,20,20);
monkey1.addAnimation("running",monkeyImage1);
monkey1.addAnimation("jump1",monkeyImage2);
monkey1.addAnimation("jump2",monkeyImage3);
monkey1.addAnimation("dead",monkeyImage4);
monkey1.scale=0.3;
monkey1.lifetime=300;
stopper1=createSprite(300,575,600,20);
stopper1.visible=false;
stopper2=createSprite(300,90,600,20);
stopper2.visible=false;
stopper3=createSprite(-50,300,1,600);
stopper3.visible=false;
stopper4=createSprite(-200,300,1,600);
stopper4.visible=false;
fruitGroup1=createGroup();
fruitGroup2=createGroup();
fruitGroup3=createGroup();
fruitGroup4=createGroup();
rockGroup=createGroup();
life=0;
time=0;
speed=0;
points=0;
added=0;
missed=0;
left=0;
deducted=0;
touched=0;
avoid=0;
}
function draw(){
background("red");
if(gameState===PLAY){
life=monkey1.lifetime;
speed=playground2.velocityX+ Math.round(0);
time=time+Math.round(getFrameRate()/60);
if(time>0&&time%100===0){
progressSound.play() 
}
fruitGroup1.collide(rockGroup);
fruitGroup2.collide(rockGroup);
fruitGroup3.collide(rockGroup);
fruitGroup4.collide(rockGroup);
monkey1.collide(stopper1);
monkey1.bounceOff(stopper2);
spawnFruits1();
spawnFruits2();
spawnFruits3();
spawnFruits4();
spawnRocks();
playground1.velocityX=-(10+1*time/100);
playground2.velocityX=-(10+1*time/100);
playground3.velocityX=-(10+1*time/100);
if(playground2.x<-295){
playground2.x=900;
}
if(playground3.x<-295){
playground3.x=900;
}
if(monkey1.lifetime===1||monkey1.lifetime===-1||monkey1.lifetime===-2||monkey1.lifetime===-3||monkey1.lifetime===-4||monkey1.lifetime===-5||monkey1.lifetime===-6||monkey1.lifetime===-7||monkey1.lifetime===-8||monkey1.lifetime===-9||monkey1.lifetime===-10||monkey1.lifetime===-11||monkey1.lifetime===-12||monkey1.lifetime===-13||monkey1.lifetime===-14||monkey1.lifetime===-15||monkey1.lifetime===-16||monkey1.lifetime===-17||monkey1.lifetime===-18||monkey1.lifetime===-19||monkey1.lifetime===-20||monkey1.lifetime===-21||monkey1.lifetime===-22||monkey1.lifetime===-23||monkey1.lifetime===-24||monkey1.lifetime===-25||monkey1.lifetime===-26||monkey1.lifetime===-27||monkey1.lifetime===-28||monkey1.lifetime===-29||monkey1.lifetime===-30||monkey1.lifetime===-31||monkey1.lifetime===-32||monkey1.lifetime===-33||monkey1.lifetime===-34||monkey1.lifetime===-35||monkey1.lifetime===-36||monkey1.lifetime===-37||monkey1.lifetime===-38||monkey1.lifetime===-39||monkey1.lifetime===-40){
monkey1.lifetime=-41;
gameoverSound.play();
gameState=END;
}
if(monkey1.isTouching(fruitGroup1)){
monkey1.lifetime=monkey1.lifetime+40;
points=points+1;
added=added+40;
eatSound.play();
fruitGroup1.destroyEach();
}
if(monkey1.isTouching(fruitGroup2)){
monkey1.lifetime=monkey1.lifetime+40;
points=points+1;
added=added+40;
eatSound.play();
fruitGroup2.destroyEach();
}
if(monkey1.isTouching(fruitGroup3)){
monkey1.lifetime=monkey1.lifetime+40;
points=points+1;
added=added+40;
eatSound.play();
fruitGroup3.destroyEach();
}
if(monkey1.isTouching(fruitGroup4)){
monkey1.lifetime=monkey1.lifetime+40;
points=points+1;
added=added+40;
eatSound.play();
fruitGroup4.destroyEach();
}
if(monkey1.isTouching(rockGroup)){
monkey1.lifetime=monkey1.lifetime-40;
rockGroup.destroyEach();
rockSound.play();
deducted=deducted+40;
touched=touched+1;
}
if(keyDown("space")&&monkey1.y>=490){
monkey1.velocityY=-12
jumpSound.play();
}
if(monkey1.velocityY===-12){
monkey1.changeAnimation("jump1",monkeyImage2);
}
if(monkey1.y<=200){
monkey1.changeAnimation("jump2",monkeyImage3);
}
if(monkey1.y>=490){
monkey1.changeAnimation("running",monkeyImage1);
}
if(fruitGroup1.isTouching(stopper3)){
missed=missed+1;
left=left+40;
fruitGroup1.destroyEach();
}
if(fruitGroup2.isTouching(stopper3)){
missed=missed+1;
left=left+40;
fruitGroup2.destroyEach();
}
if(fruitGroup3.isTouching(stopper3)){
missed=missed+1;
left=left+40;
fruitGroup3.destroyEach();
}
if(fruitGroup4.isTouching(stopper3)){
missed=missed+1;
left=left+40;
fruitGroup4.destroyEach();
}
if(rockGroup.isTouching(stopper4)){
avoid=avoid+1;
rockGroup.destroyEach();
}
}
if(gameState===END){
background("blue");
playground1.x=300;
playground1.changeAnimation("zoo2",playgroundImage1);
playground2.depth=0.5;
playground3.depth=0.5;
monkey1.changeAnimation("dead",monkeyImage4);
monkey1.x=300;
monkey1.y=350;
gameover.depth=2;
restart.depth=2;
fruitGroup1.destroyEach();
fruitGroup2.destroyEach();
fruitGroup3.destroyEach();
fruitGroup4.destroyEach();
rockGroup.destroyEach();
if(mousePressedOver(restart)){
reset();
}
}
drawSprites();
fill("black");
textSize(15);
text("life left: "+life,25,25);
fill("black");
textSize(15);
text("survival time: "+time,25,37.5);
fill("black");
textSize(15);
text("monkey speed"+speed,25,50);
fill("black");
textSize(15);
text("fruits eaten: "+points,25,62.5);
fill("black");
textSize(15);
text("life added: "+added,25,75);
fill("black");
textSize(15);
text("fruits missed: "+missed,25,87.5);
fill("black");
textSize(15);
text("life missed: "+left,25,100);
fill("black");
textSize(15);
text("life deducted: "+deducted,25,112.5);
fill("black");
textSize(15);
text("rocks touched: "+touched,25,125);
fill("black");
textSize(15);
text("rocks avoided: "+avoid,25,137.5);
}
function reset(){
gameState=PLAY;
monkey1.lifetime=monkey1.lifetime+341;
monkey1.changeAnimation("running",monkeyImage1);
monkey1.x=150;
monkey1.y=490;
playground2.x=900;
playground3.x=1500;
playground2.depth=2;
playground3.depth=3;
gameover.depth=0.5;
restart.depth=0.5;
playground1.changeAnimation("zoo1",playgroundImage3);
time=0;
points=0;
added=0;
missed=0;
left=0;
deducted=0;
touched=0;
avoid=0;
}
function spawnFruits1(){
if(frameCount%80===0){
var rando=Math.round(random(100,500));
var fruit1=createSprite(620,rando,10,40);
fruit1.velocityX=-(10+1*time/100);
fruit1.addImage(fruit3Image);        
fruit1.scale=0.05
monkey1.depth=monkey1.depth+10;
fruitGroup1.add(fruit1);
}
}
function spawnFruits2(){
if(frameCount%160===0){
var rando=Math.round(random(100,500));
var fruit2=createSprite(620,rando,10,40);
fruit2.velocityX=-(10+1*time/100);
fruit2.addImage(fruit2Image);        
fruit2.scale=0.04;
monkey1.depth=monkey1.depth+10;
fruitGroup2.add(fruit2);
}
}
function spawnFruits3(){
if(frameCount%240===0){
var rando=Math.round(random(100,500));
var fruit3=createSprite(620,rando,10,40);
fruit3.velocityX=-(10+1*time/100);
fruit3.addImage(fruit1Image);        
fruit3.scale=0.15
monkey1.depth=monkey1.depth+10;
fruitGroup3.add(fruit3);
}
}
function spawnFruits4(){
if(frameCount%320===0){
var rando=Math.round(random(100,500));
var fruit4=createSprite(620,rando,10,40);
fruit4.velocityX=-(10+1*time/100);
fruit4.addImage(fruit4Image);        
fruit4.scale=0.15
monkey1.depth=monkey1.depth+10;
fruitGroup4.add(fruit4);
}
}
function spawnRocks(){
if(frameCount%500===0){
var rock=createSprite(620,500,40,40);
rock.velocityX=-(10+1*time/100);
rock.addImage(rockImage);
rock.scale=0.1;
rock.lifetime=300;
rock.setCollider("circle",0,0,500);
monkey1.depth=monkey1.depth+10;
rockGroup.add(rock);
}
}