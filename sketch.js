const Engine = Matter.Engine; //create the physics engine
const World = Matter.World; //create the world inside physics engine
const Bodies = Matter.Bodies; //create the objects inside the world
const Body = Matter.Body;

let engine;
let world;

function setup()
{
  createCanvas(400,400);

  engine = Engine.create()
  world = engine.world

  var ball_options = {
    restitution: 0.8,
    frictionAir: 0.01
  }

  ball = Bodies.circle(100,10,20,ball_options) // Bodies.circle(x-pos, y-pos, radius, options_variable)
  World.add(world, ball)

  var ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,370,400,20, ground_options) // Bodies.rectangle(x-pos, y-pos, width, height, options_variable)
  World.add(world,ground)

  rectMode(CENTER)
  ellipseMode(CENTER)
}

function draw() 
{
  background("grey");
  Engine.update(engine)
  
  ellipse(ball.position.x, ball.position.y, 30)
  rect(ground.position.x, ground.position.y,400,20)
}

