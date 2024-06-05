var img //variable to store image
var music;//variable to store music
var fft;//variable to store FFT object
var particles = [];//array to store particles

// Load the song and image
function preload(){
  music = loadSound('Upbeat.mp3');
  img = loadImage('bg.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); //angle mode set to degrees
  imageMode(CENTER); //center image
  fft = new p5.FFT();
  
  img.filter(BLUR, 12);//applys blur to the bg image
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(3);//stroke weight/thickness of the line
  noFill();
  translate(width/2, height/2); // Center the circle
  
  image(img, 0, 0, width, height);//display the image
  
  //to make particles react to song
  fft.analyze()
  amp = fft.getEnergy(20, 200)
  
  var wave = fft.waveform(); //waveform data
  
  //to draw the circle
  beginShape();
  for (var i = 0; i < 360; i++){
    var index = floor(map(i, 0, 360, 0, wave.length - 1));//maps angle to waveform
    
    var radius = map(wave[index], -1, 1, 150, 350); //map waveform value
    var x = radius * sin(i);
    var y = radius * cos(i);
    vertex(x, y);
  }
  endShape(CLOSE);
  
  
  var p = new Particle();
  particles.push(p);//adds the particles to the array
  
  //control the amount of particles in the array 
  if (particles.length > 500) {
  particles.splice(0, 1);
  }
  
  //to display the particles
  for(var i = 0; i < particles.length; i++){
    particles[i].update(amp > 230);
    particles[i].show();
  }
}

// Play the music on click
function mouseClicked(){
  if(music.isPlaying()) {
    music.pause();
  } else {
    music.play();
  }
}

class Particle{
  constructor(){
    this.pos = p5.Vector.random2D().mult(250);
    this.vel = createVector(0, 0); //inital velocity 
    this.acc = this.pos.copy().mult(random(0.0001, 0.00001));//inital acceleration
    
    this.w = random(3, 5);//random particle width
    this.color = [random(50,255), random(50, 255), random(50,255)];// randomize the color of the particles
  }
  
  //particles reacting to the music
  update(cond){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    if(cond){
    this.pos.add(this.vel);
    this.pos.add(this.vel);
    this.pos.add(this.vel);
    }
  }
  

  show(){
    noStroke();
    fill(this.color); //color of particle
    ellipse(this.pos.x, this.pos.y, this.w); //particle as ellipse
  }
}
