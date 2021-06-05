const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, gameState,engine, world,dustbin,ball1;
function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new Kachrekadibba(720, 390, 100, 10);
  ball1 = new Ball(100, 300, 10);
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
} 

function draw() {
  if (gameState === "start") {
    background("black");
    textSize(20);
    fill("red");
  
    if (keyCode === UP_ARROW) {
      gameState = "play"
    }
  }
  if (gameState === "play") {
    rectMode(CENTER);
    background(0);
    ball1.display();
    dustbin.display();

  }
}


function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(ball1.body, ball1.body.position, {
      x: 12,
      y: -13
    });
  }
}
