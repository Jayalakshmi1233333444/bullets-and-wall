var bullet,wall;
var speed,thickness,weight;

function setup() { 
  createCanvas(1600,400)  ;
  speed=random(223,321);
  weight=random(30,52)
  thickness=random(22,83);
  bullet=createSprite(50,200,15,6);
   bullet.shapeColor="white";
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor="white";
  bullet.velocityX=speed;
  wall.debug=true;
}

function draw() {
  background("black");  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness *thickness *thickness );
   if(damage>10){
    bullet.shapeColor=color(255,0,0);
   }
   if(damage<10){
    bullet.shapeColor=color(0,255,0);
   }
   
}


  drawSprites();
}
