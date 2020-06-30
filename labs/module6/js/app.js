var score = 0;


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
      if(this.x > width - this.dia/2+10){
        this.x = width/2 ;
        this.y = height/2;
        this.speedx = this.speedx * -1;
        score = 0;
      }
      if (this.x < this.dia/2 ) {
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
    x: 780, y: 300,
    w: 10, h:80,
      color: "green",
      update: function(){
          fill(this.color);
          rect(this.x, this.y, this.w, this.h);
      if (keyIsDown(UP_ARROW)) {
        this.y -= 10;
        if(this.y <= 0){
          this.y = 0;
          
        }
      }
    
      if (keyIsDown(DOWN_ARROW)) {
        this.y += 10;
        if(this.y >= height - this.h){
          this.y = height - this.h;
        }
      }
    }
  }

function hitTest(px, py, x, y, w, h) {
    if (px >= x - w/2 && px <= x + w/2 && 
        py >= y - h/2 && py <= y + h/2) {
      return true;
    } 
    else {
      return false;
    }
  }


function setup(){
    createCanvas(800, 600);
    background(0);

}

function draw(){
    background(0);
    textSize(32);
    fill('#b5001e');
    text('Score:', 10, 30);
    text(score, 110, 30);
    
   //checking to see if Ball collided with Paddle 
   //if so changing its direction
   if (hitTest(Ball.x, Ball.y, Paddle.x, Paddle.y, Paddle.w, Paddle.h)) {
      Ball.speedx *= -1;
      Ball.speedy *= -1;
      score++;
    } 


    //updating values of Ball and Paddle for each draw loop
    Paddle.update();
    Ball.update();

    
}





  