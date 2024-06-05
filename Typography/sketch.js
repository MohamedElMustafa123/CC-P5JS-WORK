var word = "BATH SPA UNIVERSITY";
var font1, font2;

//loading fonts
function preload(){
  font1 = loadFont('Faceless-K7wel.ttf');
  font2 = loadFont('MetalGothicDemoVersionRegular-WyB9A.ttf');
}

function setup() {
  createCanvas(1500, 500);
  noLoop();
  Generate();
}


function Generate(){
    background(0);
    
  //random distance from 20 to 100
  let distance = random(20,100)
  
  //random color
  let triangleR = random(255);
  let triangleG = random(255);
  let triangleB = random(255);
  
  fill(triangleR, triangleG, triangleB);
  
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
  
  //random font everytie the code is run
  let font = random([font1, font2]);
  
  //random colors
  let r = random(255);
  let g = random(255);
  let b = random(255);
  
  //text style
  textFont(font, 100);
  textAlign(CENTER);
  fill(r, g, b);
  text(word, width/2, height/2);
}

//when mouse is pressed the code is run again
function mousePressed(){
  Generate();
}