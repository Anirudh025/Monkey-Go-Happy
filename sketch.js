var player,player_img,banana,banana_img,obstacle,obstacle_img,obstacle_group,back_ground,background_img,score;

function preload() {
  background_img=loadImage("jungle.jpg");
  player_img=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  banana_img=loadImage("banana.png");
  obstacle_img=loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  player=createSprite(50,380,20,20);
  player.addAnimation("Monkey",player_img);
  back_ground=createSprite(200,200,400,400);
  back_ground.addImage("Background",background_img);
  back_ground.velocityX=-5;
}

function draw() {
  background(220);
  if(back_d < 0){
       ground.x=ground.width/2;
  drawSprites();
}