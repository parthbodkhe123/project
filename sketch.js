const World= Matter.World;
const Bodies = Matter.Bodies;
const Engine=Matter.Engine;
var engine, world;
var ground,object;
function preload(){

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
object=createSprite(100,100,20,20)
    
   
}

function draw(){
   Engine.update(engine);
}

