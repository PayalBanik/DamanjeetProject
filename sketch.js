var bg ,bgimg,  invisibleGround;
var zeus ,zeusimg, zeusR;
var monster ,monster1img;

function preload() {
    bgimg =  loadImage("bg.jpg");
    zeusimg = loadImage("zeus.png");
    monster1img = loadImage("monstergrp_2.jpg");
    zeusR = loadImage("zeus_r.png")
    
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = createSprite( displayWidth/2, displayHeight/3,300 ,40);  
    bg.addImage(bgimg)
    bg.scale = 2.5;
    //bg.x = bg.width /2;
    bg.velocityX = -3;
    zeus = createSprite (displayWidth/9, displayHeight-100,20 ,20);
    zeus.addImage(zeusimg);
    zeus.scale = 0.5;
    //zeus.addImage(zeusR);
    //zeusr.addAnimation("running", zeusr_running);
    
    invisibleGround = createSprite(250,800,10000,05);
    invisibleGround.visible = true;
    
}
function draw() {
  background(0);
   bg.velocityX = 3;
   zeus.velocityY = 4;
   if(keyDown("space")) {
    zeus.velocityY = -12;
   
 }
   /* if(bg.x>9){
         bg.x = 300;
     }*/
    createmonster();
   
    drawSprites();

}

function createmonster(){
    if(frameCount%100 === 0){
 monster = createSprite(random(1000,2500 ),random(500, 900) ,20 ,20)  
 monster.addImage(monster1img)
 monster.velocityX = -3;
 monster.scale = 0.5;
}
}