//run code 
function setup() {
  createCanvas(1000, 1000);
  noLoop();
}

function draw() {
  background(0);
    
  //random distance from 20 to 100
  let distance = random(20,100)
  
  //color red
  fill(255, 0, 0);
  
  //to draw triangles
  for (x=0; x < width + 100; x+=distance){
    for (y=0; y < height + 50; y+=distance){
      //draws 4 triangles around x and y
      triangle(x,y-30,x-3,y-10,x+3,y-10);
      triangle(x,y+30,x-3,y+10,x+3,y+10);
      triangle(x-30,y,x-10,y-3,x-10,y+3);
      triangle(x+30,y,x+10,y-3,x+10,y+3);
      
    }
  }
  
  //offset triangles
  for (x = distance/2; x < width + 50;x+=distance){
    for (y = distance/2; y < height + 50; y+=distance){
      //draws 4 triangles around x and y
      triangle(x,y-30,x-3,y-10,x+3,y-10);
      triangle(x,y+30,x-3,y+10,x+3,y+10);
      triangle(x-30,y,x-10,y-3,x-10,y+3);
      triangle(x+30,y,x+10,y-3,x+10,y+3);
    }
  }
}