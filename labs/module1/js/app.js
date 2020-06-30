
function setup(){
    let apple = "apple";
    createCanvas(800,600);
    //ground
    strokeWeight(0);
    fill(132,173,54);
    rect(20, 90, 500, 120);


    //snowman body
    strokeWeight(1);
    fill('white');
    ellipse(250, 135, 100, 50);
    ellipse(280, 115, 45, 25);
    circle(297, 95, 37);
    fill('brown');
    ellipse(295, 90, 5, 5);
    ellipse(305, 90, 5, 5);
    fill('yellow');
    circle(445, 15, 75);
    line(425, 45, 400, 65);
    line(410, 15, 385, 15);
    line(465, 45, 505, 65);
    line(480, 15, 520, 15);
    


    //arms
    strokeWeight(3);
    line(275, 108, 200, 125);
    line(295, 120, 290, 145);  
}
