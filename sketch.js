
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roofObject
var rope1,rope2,rope3,rope4,rope5
var world



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(width/2,height/4,width/7,20)
bobD=40
startposx=width/2
startposy=height/4+500
bob1=new Bob(startposx-bobD*2,startposy,bobD)
bob2=new Bob(startposx-bobD,startposy,bobD)
bob3=new Bob(startposx,startposy,bobD)
bob4=new Bob(startposx+bobD,startposy,bobD)
bob5=new Bob(startposx+bobD*2,startposy,bobD)
rope1=new rope(bob1.body,roof.body,-bobD*2,0)
rope2=new rope(bob2.body,roof.body,-bobD*1,0)
rope3=new rope(bob3.body,roof.body,0,0)
rope4=new rope(bob4.body,roof.body,bobD*1,0)
rope5=new rope(bob5.body,roof.body,bobD*2,0)
	
  


//Create a Ground

var render=Render.create({
	element:document.body,
	engine:engine,
	options: {
	width:1200,
	height:700,
wireframes:false
	}
});


Engine.run(engine)

}




function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine)
  roof.display()
  bob1.display()
bob2.display() 
bob3.display() 
bob4.display() 
bob5.display() 

rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()




}
function keyPressed(){
if(keyCode==UP_ARROW)	{
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})	
}
}

function drawLine(constraint){
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

   roofBodyOffset=constraint.pointB;

   roofBodyX=roofBodyPosition.x+roofBodyOffset.x
   roofBodyY=roofBodyPosition.y+roofBodyOffset.y
    line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY);

}


