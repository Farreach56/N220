//World Wrap
var x = 0;
var y = 0;
var speed = 5;
var dia = 50;


window.addEventListener('keydown', (event) => {
    switch (event.key){
        case 'ArrowUp' : y -= speed; break;

        case 'ArrowDown' : y += speed; break; 

        case 'ArrowLeft' : x -= speed; break;
        
        case 'ArrowRight' : x += speed; break;
    }
});


function setup(){
    createCanvas(800, 600);

}

function draw(){
   background(0); 
   ('white');
   circle(x,y, dia);
   if(x > width - dia/2){
       x = 0 + dia/2;
   }
   else if(x < 0 + dia/2){
       x = width - dia/2; 
   }
   else if(y > height - dia/2){
       y = 0 + dia/2;
   }
   else if(y < 0 + dia/2){
       y = height - dia/2;
   }
   



   

}