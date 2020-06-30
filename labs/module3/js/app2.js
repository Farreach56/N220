function setup(){
    createCanvas(800, 600);
}

function draw(){
    background(0);
    ('white');
    for(var i = 0; i<5; i++){
        for(var j = 0; j<i;j++){
            rect(j*50,i*50,50,50);
        }
    }
    
   
}