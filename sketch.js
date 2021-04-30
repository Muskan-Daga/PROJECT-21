var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
bgmusic=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(860,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "red";

    block3 = createSprite(520,580,200,30);
    block3.shapeColor = "green";

    block4 = createSprite(740,580,200,30);
    block4.shapeColor = "black";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX=-5;
    ball.velocityY=-5;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        bgmusic.play();
    }

    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "red";
        ball.velocityX=0;
        ball.velocityY=0;
        bgmusic.stop();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "green";
        bgmusic.play();
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "black";
        bgmusic.play();
    }
    
    drawSprites();
}

