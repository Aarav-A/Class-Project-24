var ball,ground;
var line1,line2,line3;
var counter
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render


function setup() {
	counter = 0
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 line1 = new Bin(1000,690,200,20);
	 line2 = new Bin(1090,650,20,200)
	 line3 = new Bin(910,650,20,200)
	 ball = new Ball(300,600,15)


	
	 Engine.run(engine);
}

function keyPressed(){
	if(keyCode === UP_ARROW&&counter===0){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:30,y:-60})
		counter+=1
	}
}

function draw() {

  background(0);
  

  
  
line3.display()  
line2.display()
line1.display();
ball.display()

  drawSprites();
 
}



