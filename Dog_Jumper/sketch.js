let mode = 'title' //inital game mode
let player
let playerimg
let obstacleimg
let bgimg
let dogs = [];
let score = 0; //counter for successful jumps over the dogs

//loading player, obstacle, and bg image
function preload(){
  playerimg = loadImage('catpt.png');
  obstacleimg = loadImage('dogpt.png');
  bgimg = loadImage('bgimg.png')
  
}

function setup() {
  createCanvas(800, 400);
  player = new Player(); //initalizing player
  
}

//when spacebar is clicked player jumps
function keyPressed(){
  if(key == ' ' && mode ==='play'){
    player.jump();
  }
  
  //if ENTER is pressed and the mode is in title, or gamewin, or gamelose, the gamemode resets and is set back to play
  if(keyCode === ENTER){
    if (mode ==='title' || mode === 'gamewin' || mode === 'gamelose'){
      resetGame();
      mode = 'play';
    }
  }
}


//different screens for the gamemodes
function draw() {
  
  if (mode === 'title') {
    TitleScreen();
  } else if (mode === 'play') {
    playGame();
  } else if (mode === 'gamelose') {
    LoseScreen();
  } else if (mode === 'gamewin') {
    WinScreen();
  }
  
}

//title screen
function TitleScreen(){
    fill(225)
	background(0,255,54);
	textSize(100);
	textAlign(CENTER,CENTER);
	text('Dog jumper',width/2,height/4);
	textSize(35);
	textAlign(CENTER,CENTER);
	text('Press ENTER to start',width/2,height/2);
	text('Jump over 5 dogs to win!',width/2,height/1.5);
}


function playGame(){
    //random chance at adding a new obstacle/dog
  if (random(1)< 0.008){
    dogs.push(new Dog());
  }
  
  background(bgimg); //background image
  
  //itirating over the dogs array 
  for (let i = dogs.length - 1; i >= 0; i--) {
    let d = dogs[i];
    d.move(); //movement of the dog
    d.show(); //to show the dog

    //collision checker
    if (player.hits(d)) {
      mode = 'gamelose';
    }

    // Checks if the player successfully jumoed over the dog and adds it to the score
    if (d.x < player.x && !d.counted) {
      d.counted = true;
      score++;
      if (score >= 5) {
        mode = 'gamewin'; // if score is above 5 or 5 the mode switches to display thw win screen
      }
    }
  }
  
  
  
  
  player.show(); //show player
  player.move(); //player movement 
  Counter(); //score counter
  
  
  
}


//Lose screen
function LoseScreen(){
  background(0,255,54);
  fill(255, 0, 0);
  textAlign(CENTER);
  textSize(32);
  text('You Lose! Press Enter to Restart', width / 2, height / 2);
}

//Win screen
function WinScreen(){
  background(0,255,54);
  fill(255);
  textAlign(CENTER);
  textSize(32);
  text('You Won! Press Enter to Restart', width / 2, height / 2);
}

//Reset game
function resetGame() {
  dogs = []; //dog array is reset
  player = new Player(); //reset player
  score = 0; //score is reset
}

//Score counter
function Counter(){
  fill(255);
  textSize(24);
  textAlign(RIGHT, TOP);
  text('Score: ' + score, width - 20, 20); //displays the score in the top right corner
}