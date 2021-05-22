const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,R,S, block1,block2,block3,block4,block5,block6,block7,block8,block8,block9,block10,plane;
var boxes=[]

function setup(){
     canvas = createCanvas(300,500);
    engine = Engine.create();
    world = engine.world 

    plane = new Plane(150,495,height,5);

     

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

for(var i=0;i<boxes.length;i++){
    boxes[i].display();
}


    plane.display()
    

    
 }
 
   
      
   
   function mousePressed(){
    boxes.push(new Block(mouseX,mouseY,random(20,40),random(20,60) ))
   }
    


