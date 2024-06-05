class Dog {
  constructor(){
    this.r = 100;
    this.x = width;
    this.y = height - this.r;
  }
  
  //movement of the obstacle/dog
  move(){
    this.x -= 10;
  }
  
  //to show the obstacle as dog
  show(){
    image(obstacleimg, this.x, this.y, this.r, this.r)
  }
}