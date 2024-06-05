//variable to store image and coordinates
var img, x, y;

function preload() {

//load image
img = loadImage("ptree.jpg");

}



function setup() {

createCanvas (400, 600);

//background color black
background(0);

//disable stroke
noStroke();

}



function draw() {

//generates random x and y coordinates
x = random(width);

y = random(height);

//gets the color of the pixel at the random position
var c = img.get(x, y);

//draw a circle with the size 30x30 that has a color from the image
fill (c[0], c[1], c[2], 225);
ellipse (x, y, 30, 30);
}