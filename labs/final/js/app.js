var lightOn = 'images/bulbOn.png';
var lightOff = 'images/bulbOff.png';
var count = 0;
var lights = [[0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0]
             ];

for (var i = 0 ; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        var randomNum = (Math.random() * (1 - 0 + 1)) + 0;
        
        if(randomNum < 0.99){
            lights[i][j] = 0;
        }
        else{
            lights[i][j] = 1;
        }
        
    }
}
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if(lights[j][i] == 1 ){
            var begin = document.getElementById(`row${j}`);
            var children = begin.childNodes;
            children[i*2+1].querySelector('img').src = lightOn;
        }
        else{
            var begin = document.getElementById(`row${j}`);
            var children = begin.childNodes;
            children[i*2+1].querySelector('img').src = lightOff;
        }
        
    }
    
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
       if(lights[j][i] == 1){
           count++;
       }
        
    }
    
}
var output1 = document.getElementById(`output1`);
    var children1 = output1.childNodes;
    var output2 = document.getElementById(`output2`);
    var children2 = output2.childNodes;
    children1[3].innerHTML = 25 - count;
    children2[3].innerHTML = count;
    count = 0;





function switchBulb(event) {
    var x = Number(event.target.getAttribute("data-x"));
    var y = Number(event.target.getAttribute("data-y"));
    
    if(lights[y][x] == 0){
        
        event.target.src = lightOn; 
        lights[y][x] = 1;
    }
    else{
        event.target.src = lightOff; 
        lights[y][x] = 0;
    }
    switchNeighbor(y,x);

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
           if(lights[j][i] == 1){
               count++;
           }
            
        }
        
    }

    children1[3].innerHTML = 25 - count;
    children2[3].innerHTML = count;
    count = 0;
  }


function switchNeighbor(y,x){
    if((x == 0)&(y == 0)){
        neighborRight(y,x);
        neighborDown(y,x);
    } 
    else if(x == 0 & (y == 4)){
        neighborRight(y,x);
        neighborUp(y,x);
    }
    else if(x == 4 & (y == 4)){
        neighborLeft(y,x);
        neighborUp(y,x);
    }
    else if( (x == 4) & (y == 0)){
        neighborDown(y,x);
        neighborLeft(y,x);
    }
    else if((y == 4)){
        neighborLeft(y,x);
        neighborUp(y,x);
        neighborRight(y,x);
    }
    else if((y == 0)){
        neighborDown(y,x);
        neighborLeft(y,x);
        neighborRight(y,x);
    }
    else if((x == 0)){
        neighborDown(y,x);
        neighborUp(y,x);
        neighborRight(y,x);
    }
    else if((x == 4)){
        neighborDown(y,x);
        neighborLeft(y,x);
        neighborUp(y,x);
    }
    else{
        neighborDown(y,x);
        neighborLeft(y,x);
        neighborRight(y,x);
        neighborUp(y,x);
    }     
}

    function neighborUp(y,x){
        var neighbor = document.getElementById(`row${y-1}`);
        var children = neighbor.childNodes;
        if(lights[y-1][x] == 0){
            children[x*2+1].querySelector('img').src = lightOn;
            lights[y-1][x] = 1;
        }
        else if(lights[y-1][x] == 1){
            children[x*2+1].querySelector('img').src = lightOff;
            lights[y-1][x] = 0;
        }
        
        
    }


    function neighborDown(y,x){
        var neighbor = document.getElementById(`row${y+1}`);
        var children = neighbor.childNodes;
        if(lights[y+1][x] == 0){
            children[x*2+1].querySelector('img').src = lightOn;
            lights[y+1][x] = 1;
        }
        else if(lights[y+1][x] == 1){
            children[x*2+1].querySelector('img').src = lightOff;
            lights[y+1][x] = 0;
        }
    }


    function neighborLeft(y,x){
        var neighbor = document.getElementById(`row${y}`);
        var children = neighbor.childNodes;
        if(lights[y][x-1] == 0){
            children[x*2-1].querySelector('img').src = lightOn;
            lights[y][x-1] = 1;
        }
        else if(lights[y][x-1] == 1){
            children[x*2-1].querySelector('img').src = lightOff;
            lights[y][x-1] = 0;
        }
    }


    function neighborRight(y,x){
        var neighbor = document.getElementById(`row${y}`);
        var children = neighbor.childNodes;
        if(lights[y][x+1] == 0){
            children[x*2+3].querySelector('img').src = lightOn;
            lights[y][x+1] = 1;
        }
        else if(lights[y][x+1] == 1){
            children[x*2+3].querySelector('img').src = lightOff;
            lights[y][x+1] = 0;
        }
    }
