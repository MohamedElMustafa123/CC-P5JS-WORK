let circles = [];

function setup() {
  createCanvas(1000, 1000);
  
  //to remove the border from the circle
  noStroke();
}

function draw() {
  background(0);
  
  //random color gen
  var a= random(0,255);
  var b= random(0,255);
  var c= random(0,255);
  fill(a,b,c);
  circles.push(createVector(mouseX, mouseY));
  
  //to delete circles after a certain point
  if (circles.length > 50){
    circles.shift();
  }
  
  //to create trail effect
  for (let i = 0; i < circles.length; i++){
    const cursor = circles[i];
    
      ellipse(cursor.x, cursor.y, i*2); //drawing the circle with size i*2
  }

}