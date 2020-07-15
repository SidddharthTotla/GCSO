var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1400,200,60,height/2);
  wall.shapeColor = color(80,80,80);
  car.velocityX = speed;
}

function draw() {
  background(0,255,255);  

  if(wall.x-car.x<(car.width+wall.width)/2){
    
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180&&deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }

  collide(car,wall);

  drawSprites();
}

function collide(object1,object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2) {
  object1.velocityX =0;
  object2.velocityX = 0;
  
}
if (object1.y - object2.y < object1.height/2 + object2.height/2
  && object2.y - object1.y < object1.height/2 + object2.height/2){
  object1.velocityY = object1.velocityY * (-1)*0;
  object2.velocityY = object2.velocityY * (-1)*0;

}
}