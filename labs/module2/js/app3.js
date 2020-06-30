//even Larger
var dia = 1;

function setup(){
    createCanvas(800, 600);
    


}

function draw(){
    background(0);
    ('white');
    circle(400,300, dia);
    if(dia > 200){
        dia = 1;
    }
    dia += 1;
}