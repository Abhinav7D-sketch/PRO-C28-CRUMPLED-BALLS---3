var paper, dustbinRight, dustbinLeft, dustbinMiddle;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	binImg = loadImage("Images/dustbingreen.png");
}

function setup() {
	createCanvas(1200, 650);


	engine = Engine.create();
	world = engine.world;

  dustbin = createSprite(750,532,20,20);
  dustbin.addImage(binImg);
  dustbin.scale = 0.45;

   paper1 = new Paper(150, 500, 10);   

 //ground
   ground = new Ground(600, height-35, 1200, 15); 

   sling1= new SlingShot(paper1.body,{x:400,y:350});
  
  
   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);


  paper1.display();
  
  ground.display();

  sling1.display();

  drawSprites();

}

function mouseDragged(){

  Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
  
  sling1.fly();
}
/*
function keyPressed(){
 if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body, paper1.body.position, {x:15, y:-15});
 }
}*/
