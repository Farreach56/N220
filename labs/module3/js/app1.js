var counter = 0;
var dia = 15;
function setup(){
    createCanvas(800, 600);

}

function draw(){
   background(156); 
   
    for(var i = 7; i<32; i++){
            if(i % 5 === 4 && i % 3 === 2){
                fill('blue');
                circle(i*dia,height/2, 10); 
            }
            else if(i % 3 === 2){
                fill('purple');
                circle(i*dia+1,height/2, 10); 
            }
            else if(i % 5 === 4){
                fill('green');
                circle(i*dia,height/2, 10); 
            } 
            else{
                fill('black');
                circle(i*dia,height/2, 10); 
            }
        
    }

   
   }