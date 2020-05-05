const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse
const MouseConstraint = Matter.MouseConstraint;

var canvas,canvas2;
var red1,red2,red3,red4,red5,red6,red7,red8,red9,red10,red11,red12,redconnect;
var yellow1,yellow2,yellow3,yellow4,yellow5,yellow6,yellow7,yellow8,yellow9,yellow10,yellow11,yellow12,yellowconnect;
var backgroundimg;
var engine,world;
var gameState;
var mouse_options,mouse_options2;
var mouse;

function preload(){
backgroundimg = loadImage("grid.png");
}
function setup(){
canvas = createCanvas(displayWidth,displayHeight/1.203);
canvas2 = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
canvas2.addImage("background",backgroundimg);

engine = Engine.create();
world = engine.world;
red1 = new Red(700,0);
red2 = new Red(700,50);
red3 = new Red(700,100);
red4 = new Red(700,150);
red5 = new Red(700,200);
red6 = new Red(700,250);
red7 = new Red(700,300);
red8 = new Red(700,350);
red9 = new Red(700,400);
red10 = new Red(700,450);
red11 = new Red(700,500);
red12 = new Red(700,550);

yellow1 = new Yellow(700,0);
yellow2 = new Yellow(700,50);
yellow3 = new Yellow(700,100);
yellow4 = new Yellow(700,150);
yellow5 = new Yellow(700,150);
yellow6 = new Yellow(700,200);
yellow7 = new Yellow(700,250);
yellow8 = new Yellow(700,300);
yellow9 = new Yellow(700,350);
yellow10 = new Yellow(700,400);
yellow11 = new Yellow(700,450);
yellow12 = new Yellow(700,550);

ground1 = new Ground(displayWidth/2,displayHeight/1.203,displayWidth,10);
ground2 = new Ground(0,displayHeight/2,13,displayHeight);
ground3 = new Ground(90,displayHeight/2,13,displayHeight);
ground4 = new Ground(180,237.5,13,475);
ground5 = new Ground(270,237.5,13,475);
ground6 = new Ground(360,237.5,13,475);
ground7 = new Ground(450,237.5,13,475);
ground8 = new Ground(540,237.5,13,475);
ground9 = new Ground(630,237.5,13,475);
ground10 = new Ground(800,237.5,13,475);
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\        START     \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
canvasmouse = Mouse.create(canvas.elt);
canvasmouse.pixelRatio = pixelDensity();
mouse_options = {
mouse:canvasmouse
}
mouse_options2 = {
    mouse:canvasmouse
    }
redconnect = MouseConstraint.create(engine,mouse_options);
World.add(world,redconnect);
yellowconnect = MouseConstraint.create(engine,mouse_options2);
World.add(world,yellowconnect);
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\      END     \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
}
function draw(){
Engine.update(engine);
background("black");
drawSprites();
red1.display();
red2.display();
red3.display();
red4.display();
red5.display();
red6.display();
red7.display();
red8.display();
red9.display();
red10.display();
red11.display();
red12.display();

yellow1.display();
yellow2.display();
yellow3.display();
yellow4.display();
yellow5.display();
yellow6.display();
yellow7.display();
yellow8.display();
yellow9.display();
yellow10.display();
yellow11.display();
yellow12.display();

ground1.display();
ground2.display();

ground3.display();
/*ground4.display();
ground5.display();
ground6.display();
ground7.display();
ground8.display();
ground9.display();
ground10.display();*/

}