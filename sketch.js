var lone;
var cruel;
var cruelGroup;
var bgImage;


function setup() {
  createCanvas(1350,600);
  lone = createSprite(650, 530, 20, 20);
  lone.addImage(loneImage);
  lone.scale = 0.3
  cruelGroup = createGroup()

}

function preload()
{
  loneImage = loadImage("girl.jpg")
  bgImage = loadImage("BG.jpg.jpeg")
  cruel1 =  loadAnimation("download.png")
  cruel2 =  loadAnimation("sad.png")
  
}


function draw() {
  background(bgImage);  
 
    spawnCruel();
    loneMovement();
    touch();

  drawSprites();
}

function spawnCruel(){
  if (frameCount%200===0){
    var rand=Math.round(random(100,1000))
    var rand1=Math.round(random(100,300))
  for(var i=rand;i<rand+300;i=i+40){
    for(var j=rand1;j<=rand1+50;j=j+20){
      var cruel= createSprite(i,j,10,10)
      cruel.shapeColor = "blue"
      cruel.addAnimation("happy",cruel1)
      cruel.scale = 0.1
      cruelGroup.add(cruel)
      cruelGroup.setVelocityYEach(2)
    }
    }
  }
    }

    function loneMovement()
    {
      if(keyDown("LEFT_ARROW")){
        lone.x = lone.x-5;
      }
      if(keyDown("RIGHT_ARROW")){
      lone.x = lone.x+5;
    }  
      if(keyDown("UP_ARROW")){
        lone.y = lone.y-5;
      }
      if(keyDown("DOWN_ARROW")){
        lone.y = lone.y+5;
      }
    }


function touch(){
  for(var c=0;c<cruelGroup.length;c++)
  {
  if (lone.isTouching(cruelGroup.get(c)))
{
cruel.changeAnimation("sad",cruel2)
cruelGroup.setVelocityYEach(-6)
cruelGroup.setVelocityXEach(+6)
lone.x = 650;
lone.y = 550;
}
}

}