
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint; 

var bob1, bob2, bob3, bob4, bob5;
var Roof, constrainedRope;

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new bob(200,200,20);
	bob2 = new bob(200,100,20);
	bob3 = new bob(100,200,20);
	bob4 = new bob(100,100,20);
	bob5 = new bob(250,250,20);

	Roof = new roof(200,100,350,20);
	constrainedRope = new rope(Roof,bob1,200,0);

	Engine.run(engine);
  
}


function draw() {
  background(200);
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  Roof.display();
  constrainedRope.display();

  keyPressed();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:85,y:-85})
	}
}