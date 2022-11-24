
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var retangulo,circulo,quadrado;


function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

	var retangulo_options={restitution:0.9,friction:0.1}
	var circulo_options={restitution:1,friction:0.05}
	var quadrado_options={restitution:1.5,friction:0.5}
	var chao_options={isStatic:true}

	retangulo=Bodies.rectangle(width-300,200,130,70,retangulo_options)
	World.add(world,retangulo)
	circulo=Bodies.circle(width/2-200,300,50,circulo_options)
	World.add(world,circulo)
	quadrado=Bodies.rectangle(width/2,200,60,60,quadrado_options)
	World.add(world,quadrado)
	chao=Bodies.rectangle(width/2,height,width,10,chao_options)
	World.add(world,chao)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background("lightyellow");
  Engine.update(engine)
  fill("blue")
  rect(retangulo.position.x,retangulo.position.y,130,70)
  rect(quadrado.position.x,quadrado.position.y,60,60)
  ellipse(circulo.position.x,circulo.position.y,50)

}



