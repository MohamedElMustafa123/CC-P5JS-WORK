class Player {
  constructor(){
    this.r = 100;
    this.x = 50;
    this.y = height - this.r;
    
    //velocity in the y axis
    this.vy = 0;
    
    //gravity so player doesnt keep going up after it jumps
    this.gravity = 1;
  }
  
  //jump functionality 
  jump(){
    
    //allows player to jump only when at the bottom
    if (this.y == height-this.r){
      this.vy = -20;
    }
    
  }
  
  //collision detection
  hits(dog){
    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = dog.x + dog.r * 0.5;
    let y2 = dog.y + dog.r * 0.5;
    
    //collideCircleCircle is from the online library
    return collideCircleCircle(x1, y1, this.r, x2, y2, dog.r);
  }
  
  move(){
    this.y += this.vy;
    this.vy +=this.gravity;
    this.y = constrain(this.y, 0, height - this.r)//to stop the player from falling off the play area
  }
  
  //player
  show(){
    image(playerimg, this.x, this.y, this.r, this.r)
  }
}
