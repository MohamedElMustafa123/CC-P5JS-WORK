//variable to store image
let img;

function preload(){
  //load the image
  img=loadImage("butterfly.jpg")
}

function setup() {
  createCanvas(700, 700);
  background(173, 216, 230);
  
  //resize the image
  img.resize(200,200);
  
  //create a graphic buffer 
  let cnv7 = createGraphics(200,200);
  cnv7.canvas.getContext("2d").clip();
  
  //place the image within the buffer
  cnv7.image(img,0,0);
  //Display the buffer on the canvas
  image(cnv7,350,225);
  img.resize(200,200);
  
  //create a graphic buffer
  let cnv5 = createGraphics(200,200);
  cnv5.circle(100,100,190);
  //use the buffer as a mask for image
  img.mask(cnv5);
  
  //display the masked image
  image(img,300,200);
}