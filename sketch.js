
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var  bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
var roof
var rope1,rope2,rope3,rope4,rope5
var bobDiameter

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(390,200,330,40)

	
	bobObject1 = new Bob(310,600)
	rope1 = new Rope(bobObject1.body,roof.body,-40*2,0)
	bobObject2 = new Bob(350,600)
	rope2 = new Rope(bobObject2.body,roof.body,-40*1,0)
	bobObject3 = new Bob(390,600)
	rope3 = new Rope(bobObject3.body,roof.body,0,0)
	bobObject4 = new Bob(430,600)
	rope4 = new Rope(bobObject4.body,roof.body,40*1,0)
	bobObject5 = new Bob(470,600)
	rope5 = new Rope(bobObject5.body,roof.body,40*2,0)


	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  drawSprites();
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  
  roof.display()
  
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
}


function keyPressed()
{
  if(keyCode === 32)
  {
    Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-50});
  }
}