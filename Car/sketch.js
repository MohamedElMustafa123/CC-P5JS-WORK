function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150);
  
  fill(255, 0, 255);
  rect(50, 200, 300, 50);
  rect ( 100, 150, 200, 50);
  //front glass
  fill(255)
  rect(280,175,20,25);
  
  //wheels 
  fill (0);
  // ellipse ( x, y, width, height)
  ellipse ( 100, 250, 50, 50);
  ellipse ( 300, 250, 50, 50);
  fill(255)
  ellipse ( 100, 250, 20, 20);
  ellipse ( 300, 250, 20, 20);
  
  
}