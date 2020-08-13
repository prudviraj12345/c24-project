
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var redbox1,redbox2,redbox3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	  ball1 = new Ball(200,200,20,50);

	  redbox1 = new Redbox(240,560,20,180);
	redbox2 = new Redbox(355,650,250,20);
	redbox3 = new Redbox(470,560,20,180);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball1.display();


  redbox1.display();
  redbox2.display();
  redbox3.display();
   
  



 
}



