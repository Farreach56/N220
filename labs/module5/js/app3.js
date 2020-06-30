//creating a ball object giving it a X & Y loaction
//giving it a speedX & speedY velocity
//giving it a size of 50 diameter and a color 
//creating a method that is used to update 
//its values when needed 
var Ball = {
	x: 25, y: 25,
	speedx: 5, speedy: 5,
	dia: 50,
    color: "purple",
	update: function(){
		fill(this.color);
		circle(this.x, this.y, this.dia);
      if (this.x < this.dia/2 || 
            this.x > width - this.dia/2) {
                this.speedx = this.speedx * -1;
      }
      if (this.y < this.dia/2 || 
           this.y > height - this.dia/2) {
               this.speedy = this.speedy * -1;
      }
        
        this.x = this.x + this.speedx;
        this.y = this.y + this.speedy;

	}	
}


//creating Paddle object giving it a X & Y location
//a width and height and color
//creating a update method to updates its values when needed
//having paddle move when left key or right key is pressed
var Paddle = {
    x: 350, y: 580,
    w: 80, h:20,
      color: "green",
      update: function(){
          fill(this.color);
          rect(this.x, this.y, this.w, this.h);
      if (keyIsDown(LEFT_ARROW)) {
        this.x -= 10;
        if(this.x <= 0){
          this.x = 0;
          
        }
      }
    
      if (keyIsDown(RIGHT_ARROW)) {
        this.x += 10;
        if(this.x >= width - this.w){
          this.x = width - this.w;
        }
      }
    }
  }


function setup(){
    createCanvas(800, 600);
    background(0);

}

function draw(){
    background(0);
   //checking to see if Ball collided with Paddle 
   //if so changing its direction
    if ((Ball.x > Paddle.x && Ball.x < Paddle.x + Paddle.w) 
        && (Ball.y + (Ball.dia/2) >= Paddle.y)) {
        Ball.speedx *= -1;
        Ball.speedy *= -1;
    }
    //updating values of Ball and Paddle for each draw loop
    Paddle.update();
    Ball.update();

    
}





  