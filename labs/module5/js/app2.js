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


function setup(){
    createCanvas(800, 600);
    background(0);

}

function draw(){
	background(0);
    Ball.update();
    
}









