const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var polygon,polygonImg;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block16;
var ground;
var sling;

function preload(){

polygonImg = loadImage("polygon.png")

}

function setup(){

createCanvas(1500,925);
engine = Engine.create();
world = engine.world;

polygon = createSprite(100,463,1,1)
polygon.addImage(polygonImg);
polygon.scale = 0.15;

//lower
block1 = new Box(900,770,30,40);
block2 = new Box(870,770,30,40);
block3 = new Box(840,770,30,40);
block4 = new Box(810,770,30,40);
block5 = new Box(930,770,30,40);
block6 = new Box(960,770,30,40);
block7 = new Box(990,770,30,40);
//3
block8 = new Box(900,730,30,40);
block9 = new Box(870,730,30,40);
block10= new Box(840,730,30,40);
block11= new Box(930,730,30,40);
block12= new Box(960,730,30,40);
//2
block13= new Box(900,690,30,40);
block14= new Box(870,690,30,40);
block15= new Box(930,690,30,40);
ground = new Ground(900,800,300,20);
//top
block16= new Box(900,650,30,40);

sling = new Slingshot(polygon.body,{x:100, y:463});


Engine.run(engine);

}

function draw(){

background(rgb(252,19,75))
fill(rgb(78,71,255))
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
fill(rgb(253,155,24))
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
fill(rgb(255,68,70))
block13.display();
block14.display();
block15.display();
fill(rgb(69,255,86))
block16.display();
ground.display();
sling.display();
drawSprites();

}