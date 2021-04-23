const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,300,70,70);
    box2 = new Box(540,100,70,140);
    ground = new Ground(200,390,2000,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   ground.display();
}