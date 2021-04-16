const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dustbinObj, paperObject,groundObject	
var world;


function setup(){
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	slingshot = new SlingShot(paperObject.body,{x:400, y:100});
	Engine.run(engine); 
}


function draw(){
  rectMode(CENTER);
  background(230);
  paperObject.display();
  slingshot.display(); 
  groundObject.display();
  dustbinObj.display(); 
}

function mouseDragged(){
    Matter.Body.setPosition(paperObject.body, {x: mouseX , y: mouseY});
}


function keyPressed(){
  	if (keyCode === UP_ARROW && paperObject.x < 210) {
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});   
  	}
}

function mouseReleased(){
    slingshot.fly();
}