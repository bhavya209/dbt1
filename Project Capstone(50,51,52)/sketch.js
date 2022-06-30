var tank1,tank2,tank1_img,tank2_img
var backGroundimg,background
var missle,missel1,missel2
function  preload(){
    tank1_img = loadImage("assets/Tank1.png")
    tank2_img = loadImage("assets/Tank2.png")
    backGroundimg = loadImage("assets/bg.jpg")

} 
    
function setup(){
  createCanvas(windowWidth,windowHeight)

  
    tank1 = createSprite(width - 200,height/2)
    tank1.addImage(tank1_img)
    tank1.scale = 0.25

    tank2 = createSprite(400,height/2)
    tank2.addImage(tank2_img)
    tank2.scale = 0.35
   // image(backGroundimg,0,0,width,height)

    
}

function draw() {
 //background("green")

/*if(keyIsDown("UP_ARROW")){
    tank1.y -= 10
}
if(keyIsDown("DOWN_ARROW")){
    tank1.y += 10
}


if(keyIsDown("w")){
    tank2.y -= 10
}
if(keyIsDown("s")){
    tank2.y += 10
}*/
    drawSprites()
}


function keyPressed(){
    if(keyDown("UP_ARROW")){
        tank1.position.y -= 10
    }
    if(keyDown("DOWN_ARROW")){
        tank1.position.y += 10
    }
    
    
    if(keyDown("w")){
        tank2.position.y -= 10
    }
    if(keyDown("s")){
        tank2.position.y += 10
    }

    if(keyDown("m")){
        LaunchMissle1()
    }

    if(keyDown("z")){
        LaunchMissle2()
    }
}

function LaunchMissle1()
{
missel1 = createSprite(tank1.x,tank1.y,20,20)
missel1.velocityX=-5
}

function LaunchMissle2()
{
    missel2 = createSprite(tank2.x,tank2.y,20,20)
    missel2.velocityX=5
}