
var object = {
  x: 150, y: 250,
  //dia: 50,
  width: 60, height:60,
	color: "purple",
	update: function(){
		fill(this.color);
		ellipse(this.x, this.y, this.width, this.height);
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 2;
      if(this.x <= 0 + this.width/2){
        this.x = 0 + this.width/2;
      }
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 2;
      if(this.x >= width - this.width/2){
        this.x = width - this.width/2;
      }
    }
  
    if (keyIsDown(UP_ARROW)) {
      this.y -= 2;
      if(this.y < 0 + this.height/2){
        this.y = 0 + this.height/2;
      }
    }
  
    if (keyIsDown(DOWN_ARROW)) {
      this.y += 2;
      if(this.y > height - this.height/2){
        this.y = height - this.height/2;
      }
    }
  
	}
}


function setup(){
    createCanvas(800, 600);
    background(156);
}


function draw(){
  clear();
	background(0,70,70);
	object.update();
	
}
  