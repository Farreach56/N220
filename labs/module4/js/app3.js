var counter = 0;

function setup(){
    createCanvas(800, 600);
    background(156);
    
}

function checkCount(counter){
    //check to see if counter is a certain value 
    //and determining value of counter change stroke color 
    //for line
    if(counter < 400){
        stroke('blue');
    }
    else if(counter < 800){
        stroke('red'); 
    }
    else if(counter < 1200){
        stroke('purple');    
    }
    else if(counter < 1600){
        stroke('green');
    }
    console.log(counter);
   
}

//if mouse button is held down draw a line that changes colors 
function mouseDragged(){
    //if counter is greater then 1600 reset its value back to 0
    if(counter > 1600){
        counter = 0;
    }
    //call checkCount to change the color of the stroke determing 
    //the counter variables value
    checkCount(counter);
    //draw a line from where the mouse is at
    line(mouseX, mouseY, pmouseX, pmouseY);
    //increase counter by 1
    counter ++;
}

//if mouse is double clicked clear canvas
function doubleClicked() {
    background(156);
  }


  