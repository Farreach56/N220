//Ball bounce
var x = 25 ;
var y = 25 ;
var speedx = 5;
var speedy = 5;
var dia = 50;

function setup(){
    createCanvas(800, 600);
    

}

function draw(){
    background(0);
    ('white');
    circle(x,y, dia);
    if(x > width - dia/2){
        speedx = speedx * -1;
    }
    else if(x < 0 + dia/2){
        speedx = speedx * -1; 
    }
    else if(y > height - dia/2){
        speedy = speedy * -1;
    }
    else if(y < 0 + dia/2){
        speedy = speedy * -1;
    }

    x = x + speedx;
    y = y + speedy;
}