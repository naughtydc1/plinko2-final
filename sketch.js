const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particle;
var divisions = [];
var particles = [particle];
var plinkos = [];
var line;

var divisionHeight = 300;

var gameState = "PLAY";

var count = 0;
var score = 0;

function setup() {
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2,height,width,20);
  
  
     for (var k = 0; k <=width; k = k + 80) {
       divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
     }
  
  
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
  
      
  
      
  }

 

function draw() {
    background(0);
    Engine.update(engine);
    
  
  textSize(35)
  text(" 200 ", 5, 550);
  text(" 100 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 100 ", 240, 550);
  text(" 200 ", 320, 550);
  text(" 200 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 500 ", 560, 550);
  text(" 100 ", 640, 550);
  text(" 200 ", 720, 550);
  



    ground.display();
    if ( gameState =="END") {
        background("black");
        fill("red");
        textSize(120);
        text("GAME OVER", 40, 400);
       
      } 
      textSize(35)
      text("Score : "+score,20,40);
      //fill("red");
      for(var k = 0; k < plinkos.length; k++) {
       plinkos[k].display();
    }

    if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>750)
        {
              if (particle.body.position.x > 0 && particle.body.position.x < 80) 
              {
                  score=score+200;      
                  particle=null;
                  if ( count>= 5) gameState ="END";                          
              }
              else if (particle.body.position.x > 80 && particle.body.position.x < 160) 
              {
                  score=score+100;      
                  particle=null;
                  if ( count>= 5) gameState ="END";                          
              }
              else if (particle.body.position.x > 160 && particle.body.position.x < 240) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="END";                          
              }
              else if (particle.body.position.x > 240 && particle.body.position.x < 320) 
              {
                  score=score+100;      
                  particle=null;
                  if ( count>= 5) gameState ="END";                          
              }
              else if (particle.body.position.x > 320 && particle.body.position.x < 400) 
              {
                  score=score+200;      
                  particle=null;
                  if ( count>= 5) gameState ="END";                          
              }
              else if (particle.body.position.x > 400 && particle.body.position.x < 480) 
              {
                  score=score+200;      
                  particle=null;
                  if ( count>= 5) gameState ="END";                          
              }
              else if (particle.body.position.x > 480 && particle.body.position.x < 560) 
              {
                  score=score+100;      
                  particle=null;
                  if ( count>= 5) gameState ="END";                          
              }
              else if (particle.body.position.x > 560 && particle.body.position.x < 640) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="END";                          
              }
              else if (particle.body.position.x > 640 && particle.body.position.x < 720) 
              {
                  score=score+100;      
                  particle=null;
                  if ( count>= 5) gameState ="END";                          
              }
              else if (particle.body.position.x > 720 && particle.body.position.x < 800) 
              {
                  score=score+200;      
                  particle=null;
                  if ( count>= 5) gameState ="END";                          
              }



 
              
              
        }
    }
    

   
    
  
 for (var i = 0; i < divisions.length; i++) {
     
    divisions[i].display();
  }
  
}


function mousePressed() {
    if(gameState !== "END") {
        count++;
    particle = new Particle(mouseX, 50, 10, 10);
    }
}

