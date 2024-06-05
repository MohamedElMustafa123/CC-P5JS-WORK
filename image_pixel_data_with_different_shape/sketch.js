//variables to store img and mouse position
var img, x, y;

function preload() {

  //image is loaded and stored in the variable
img = loadImage("gwg1.jpg");

}



function setup() {

createCanvas (267, 400);

//background color set to black
background(0);

noStroke();

}



function draw() {

background(0);
//stores mouse position
x = mouseX;

y = mouseY;

//loads the image
image( img, 0, 0);

//gets the color of the pixel at the mouse position
var c = get(x, y);
  
//draws a rectangle with the color of the pixel at the mouse position
fill(c);
rect(x,y,100,100);
}