var value = 255;


function setup(){
    createCanvas(250, 250);
    background(156);
}

function draw() {
    fill(value);
    rect(width/2, height/2, 100, 100);
  }

  function mousePressed() {
    let colorArr = [color('green'), color('blue'), color('red'), color('purple')];
    value = random(colorArr);
  }