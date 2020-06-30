var x = 400;
var y = 300;
var value = 0;
var dia = 50;
function setup(){
    createCanvas(800, 600);
    
}

function changeColor(){
    let d = int(dist(mouseX, mouseY, x, y));
    let colorArr = [color('red'), color('black')];
    
    if(d < 7){
        value = colorArr[0];
    }
    else{
        value = colorArr[1];
    }
}

function draw(){
    changeColor();
    background(156);
    fill(value);
    circle(x,y, dia);
   if(mouseX < x){
       x = x -3;
   }
   if(mouseX > x){
       x = x + 3;
   }
   if(mouseY < y){
    y = y -3;
    }
    if(mouseY > y){
        y = y + 3;
    }
   
}
