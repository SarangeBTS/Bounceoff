var Isha, BTS;



function setup() {
  createCanvas(800,400);
  BTS=createSprite(400, 340, 50, 50);
  BTS.shapeColor="green";
  BTS.debug=true;
  BTS.velocityY=-4

  Isha=createSprite(370,100,100,100);
  Isha.shapeColor="blue";
  Isha.debug=true;
Isha.velocityY=4

  

 
}

function draw() {
  background("white");  
 

  velbounce();

  


  
  

  drawSprites();

 
}


function velbounce(){
  if(Isha.x-BTS.x<Isha.width/2+BTS.width/2 &&
    BTS.x-Isha.x<BTS.width/2+Isha.width/2){
  Isha.velocityX=Isha.velocityX*(-1) 
  BTS.velocityX=BTS.velocityX*(-1)  
  }

  if(Isha.y-BTS.y<Isha.height/2+BTS.height/2 &&
    BTS.y-Isha.y<BTS.height/2+Isha.height/2){
  Isha.velocityY=Isha.velocityY*(-1) 
  BTS.velocityY=BTS.velocityY*(-1)  
  }

}





