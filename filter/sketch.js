//var to store image
var img;

function preload() {
//load image
img = loadImage("skate.jpg");

}



function setup () {

createCanvas (600, 900);

background(0);

}



function draw() {

background(0);

image(img, 0, 0);

//adds the invert filter
filter(INVERT);

}