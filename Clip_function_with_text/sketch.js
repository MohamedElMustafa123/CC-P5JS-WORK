function setup() {
  createCanvas(700, 700);
  background(0);
  
  //creates a graphic the same size as the canvas
  cnv4 = createGraphics(width, height);
  ctx2 = cnv4.canvas.getContext("2d");
  
  //draws the rectangle
  cnv4.rect(250, 250, 250);
  ctx2.clip();
  cnv4.fill(0, 200, 0);
  image(cnv4, 0, 0);
  
  //adds the color green
  fill(0,200,0);
  
  cnv3 = createGraphics(width, height);
  cnv3.fill(0,200,0);  
  cnv3.rect(250,250,250); 
  cnv3.erase();
  
  //text added inside the shape
  cnv3.textSize(200);
  cnv3.text('txt', 265, 430);
  cnv3.noErase();
  image(cnv3, 0, 0);
}


