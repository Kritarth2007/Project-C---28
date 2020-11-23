
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg
var treeImg 
var ground,stone,mango1,sling1
function preload()
{
  boyImg = loadImage("boy.png")
  treeImg = loadImage("tree.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   
	Engine.run(engine);
	ground = new Ground(600,650,1200,20)
	stone = new Stone(100,300,30)
	sling1 = new Slingshot(stone.body,{x:120,y:480})
	mango1 = new Mango(780,420,40)
	mango2 = new Mango(660,380,40)
	mango3 = new Mango(690,350,40)
	mango4 = new Mango(720,420,40)
	mango5 = new Mango(750,400,40)
	mango6 = new Mango(780,450,40)
	mango7 = new Mango(820,350,40)
	mango8 = new Mango(850,380,40)
	mango9 = new Mango(880,410,40)
	mango10 = new Mango(800,420,40)

}


function draw() {
  rectMode(CENTER);
  background(255);
  image(treeImg,600,260,400,400)
  image(boyImg,75,400,200,300)
  ground.display()
  stone.display()
  sling1.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  Collision(stone,mango1)
  Collision(stone,mango2)
  Collision(stone,mango3)
  Collision(stone,mango4)
  Collision(stone,mango5)
  Collision(stone,mango6)
  Collision(stone,mango7)
  Collision(stone,mango8)
  Collision(stone,mango9)
  Collision(stone,mango10)
  drawSprites();
 
}

function mouseDragged (){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling1.fly();
}

function keyPressed() {
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:120,y:480})
		sling1.attach(stone.body)
	}
}

function Collision(Lstone,Lmango){
	mangoBodyPosition = Lmango.body.position
	stoneBodyPosition = Lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body,false)
	}
}
