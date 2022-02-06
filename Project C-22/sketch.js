const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage,playerimage,archerimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  archerimage = loadImage("./assets/playerArcher.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
    isStatic: true
  };
  //create player base body
  playerBase = Bodies.rectangle(200,350,180,150,options);
  World.add(world,playerBase);
  //create player body
  player = Bodies.rectangle(250,playerBase.position.y - 160,50,180,options);
  World.add(world,player);
  //create player arrow
  playerArcher = Bodies.rectangle(280,player.position.y - 30,50,180,options);
  World.add(world,playerArcher);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
//show the player image using image() function
image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
//show the playerbase image using image() function
image(playerimage,player.position.x,player.position.y,50,180)
//show the playerArcher image using image() function
image(archerimage,playerArcher.position.x,playerArcher.position.y,75,180)
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
