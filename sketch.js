const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particle,trials;

var divisionHeight=300;
var score=0;

var gameState = "start";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  trials = 0;

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
   for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  

}
 


function draw() {
  background("black");
  textSize(30);
  fill(255);
  //rectMode(CENTER);
  //ellipseMode(RADIUS);

  //mousePressed();

  text("Score: "+score,60,43);

  text("500",15,531);
  text("500",95,531);
  text("500",175,531);
  text("500",255,531);
  text("100",335,531);
  text("100",415,531);
  text("100",495,531);
  text("200",575,531);
  text("200",655,531);
  text("300",735,531);

 //text("x:"+mouseX+ "y:"+mouseY,200,200); 
  Engine.update(engine);

  ground.display();
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
  if(particle!=null)
  {
     particle.display();
      
      if (particle.body.position.y>760)
      {
            if (particle.body.position.x < 300) 
            {
                score=score+500;      
                particle=null;
                if ( trials>= 5) gameState ="end";                          
            }
            else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
            {
                  score = score+100;
                  particle=null;
                  if ( trials>= 5) gameState ="end";

            }
            else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
            {
                  score = score+200;
                  particle=null;
                  if (trials>= 5)  gameState ="end";

            }      
            
      }
}
}

function mousePressed(){
  if(gameState!=="end"){
    particle = new Particle(mouseX,10,10,10);
    trials++
  }

 if(trials>=6){
   gameState = "end";
  }
  
  
}