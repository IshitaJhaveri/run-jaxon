var path,pathImg,runner,runnerImg,edges
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,600);
  //create sprites here
 path = createSprite(200,300);
 path.addImage(pathImg);
 path.velocityY = 4;
 path.scale = 1.2;
 runner = createSprite(100,300,70,10);
 runner.addAnimation("runnerImg",runnerImg);
runner.scale = 0.1;
 edges = createEdgeSprites();
}




function draw() {
  background(0);
drawSprites();
runner.x= mouseX;
if(path.y>600){
  path.y=200;
}
runner.collide(edges);
}
