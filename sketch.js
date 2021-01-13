
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rock, ground , mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mando10, chain

function preload()
{
	boy = loadImage("images/boy.png");
	tree = loadImage("images/tree.png");
}

function setup() {
	createCanvas(1516, 725);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	rock = new Stone(200,535, 45);
	ground = new Ground(width/2, 685, width, 25);

	chain = new SlingShot(rock.body,{x:200 , y:535});

	mango1 = new mango(1250, 400, 20);
	mango2 = new mango(1200, 350, 30);
	mango3 = new mango(1450, 430, 25);
	mango4 = new mango(1420, 370, 35);
	mango5 = new mango(1300, 250, 35);
	mango6 = new mango(1330, 390, 22.5);
	mango7 = new mango(1210, 270, 23.5);
	mango8 = new mango(1100, 390, 40);
	mango9 = new mango(1330, 300, 30);
	mango10 = new mango(1250, 355, 15);

	Engine.run(engine)
}


function draw() {
  rectMode(CENTER);
  background("cyan");

  image(boy,150,455,250,300);
  image(tree,1000,200,500,500);
  
  rock.display();
  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  chain.display()
  detectCollision(rock, mango1);
  detectCollision(rock, mango2);
  detectCollision(rock, mango3);
  detectCollision(rock, mango4);
  detectCollision(rock, mango5);
  detectCollision(rock, mango6);
  detectCollision(rock, mango7);
  detectCollision(rock, mango8);
  detectCollision(rock, mango9);
  detectCollision(rock, mango10);

 

  fill(255, 0, 225);
  strokeWeight(7)
  stroke("yellow");
  textSize(50);
  textFont("joker");
  text("PLUCKING MANGOES", width/2 - 205 , 75);  
  text("Press 'SPACE' to relaunch", width/2 - 210 , 125); 
  Engine.update(engine) 
}

function mouseDragged(){
	Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
	if(keyCode === 32){
	  Matter.Body.setPosition(rock.body,{x:200, y:550});
	  chain.attach(rock.body);
	}
  }
  function detectCollision(lstone,lmango){
    stoneBodyPosition = lstone.body.position;
    mangoBodyPosition = lmango.body.position;
  
    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
    if(distance <= lmango.r + lstone.r){
      Matter.Body.setStatic(lmango.body, false);
    }
  
  }
  