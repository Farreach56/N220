/*
`we will need and "aliens array"
`we will need to load images
`we will need to loop through aliens array
`we will need a speed counter that increases 
`each time aliens reach borders and reverses
`we will need a "player" object
`we will need a event to occur when a button 
    is pressed
`we will need collison detection
    we will need to remove objects from 
    array when detection happens
`we will need to display text to screen
    and update text to screen when 
    object is removed
`we will need a random function to 
    determine if and when a certain 
    alien fires at player 
`we wil need a player shield objects that
    vanish if destroyed with a health counter 
    that counts backwards
`we will need to show text to the 
    screen saying game over if the
    players counter reaches 0 or
    aliens reach players Y position
`if alien array is empty start over

*/
var fireRate = 50;
var fireSpeed = 70;
var lazerSpeed = 0;
var lazerRate = 50;
var gameCount = 0;
var gameOverTime = 300;
var gameOver = false;



class Alien {
  constructor(x, y) {
    this.w = 30; 
    this.x = x; 
    this.h = 20; 
    this.y = y; 
    this.speed = 2.36;
    
  }
    moveX() {
    this.x = this.speed + this.x;
  }
  
  getX(){
      return this.x;
  }
  getY(){
    return this.y;
  }

  wall(){
    this.speed = this.speed *-1.06; 
    this.y += 15;
  }

  display() {
      image(enemy, this.x, this.y);
  }
}
class Laser {
    constructor(x, y) {
      this.x = x;  
      this.y = y; 
    }

    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
    update() {
        image(lazer, this.x, this.y);
        this.y += 10;
    }
  }

class Rocket {
    constructor(x, y) {
      this.x = x;  
      this.y = y; 
    }

    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
    update() {
        image(bullet, this.x, this.y); 
        this.y -= 10;
    }
  }

var player = {
    x: 385, y: 540,
    w: 30, h: 30,    
    update: function() {
        
        
        image(playerImg, this.x, this.y);
        if(keyIsDown(LEFT_ARROW)) {
            if(this.x > this.w/2){
                this.x -= 5;
            }
        }

        if(keyIsDown(RIGHT_ARROW)) {
            if(this.x < 800 - this.w){
                this.x += 5;
            }
        }
      
    }
};

class shield {
    constructor(x, y, h) {
        this.x = x;  
        this.y = y;
        this.w = 30;
        this.h = 20;
        this.health = h; 
      }
   
    display(){
      
        image(guard, this.x, this.y);
      
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    getH(){
        return this.health;
    }
  
    takeDam(){
        this.health -= 1;
    }
}

var armada = [
    {x: 105, y: 10},
    {x: 180, y: 10},
    {x: 255, y: 10},
    {x: 330, y: 10},
    {x: 405, y: 10},
    {x: 480, y: 10}, 
    {x: 555, y: 10},
    {x: 135, y: 45},
    {x: 210, y: 45}, 
    {x: 285, y: 45},
    {x: 360, y: 45},
    {x: 435, y: 45},
    {x: 510, y: 45},
    {x: 180, y: 85},
    {x: 255, y: 85},
    {x: 330, y: 85},
    {x: 405, y: 85},
    {x: 480, y: 85}
];

var startGame = true;
var shots = [];
var fires = [];
shots[0] = new Rocket(0, 0);
fires[0] = new Laser(0, 600);
var alien = [];

let enemy;
let playerImg;
let guard;
let bullet;
let lazer;
let backgroundImg;
let endGame;

function preload() {
  backgroundImg =  loadImage('js/img/background.png'); 
  enemy = loadImage('js/img/alien.png');
  playerImg = loadImage('js/img/player.png');
  guard = loadImage('js/img/shield.png');
  bullet = loadImage('js/img/bullet.png');
  lazer = loadImage('js/img/laser.png');
  endGame = loadImage('js/img/gameOver.png');
}

var score = 0;
var sh1 = new shield(200, 450, 1);
var sh2 = new shield(300, 450, 1);;
var sh3 = new shield(400, 450, 1);;
var sh4 = new shield(500, 450, 1);;
var shields = [sh1,sh2, sh3,sh4];
function setup() {
    createCanvas(800, 600);

}


function draw() {
    background(backgroundImg);
    if(!gameOver){ 
        textSize(32);
        fill('#b5001e');
        text('Score:', 10, 30);
        text(score, 110, 30);
        player.update();
        for(var i = 0; i< shields.length; i++){
            shields[i].display();
        }
        
        if(!Array.isArray(alien) || !alien.length || reachPlayer(alien) ){
            alien.length = 0;
            startGame = true;
            score = 0;
        }
        if(startGame == true){
            for(var i = 0; i < armada.length; i++){
                alien[i] = new Alien(armada[i].x, armada[i].y);
            }
            shields = [sh1,sh2, sh3,sh4];
            startGame = false;
        }
        if(lazerSpeed > lazerRate){
            Blast();
        }

        
        shots[0].update();
        fires[0].update();
        fireSpeed++;
        lazerSpeed++;
        rowMove(alien);
    
        if(hitTestPoint(fires[0].getX(), fires[0].getY(), player.x, player.y, 75/2, 50)) {
                    
            fires.splice(0,1);
            fires[0] = new Laser(0,600);
            shots.splice(0,1);
            shots[0] = new Rocket(0,0);
            shields.length = 0;
            alien.length = 0;
            startGame = true;
            gameOver = true;
            player.x = 385;
            player.y = 540;



        }


            
            for (let i = 0; i < shields.length; i++) {
                let d = shields[i];
                if(hitTestPoint(fires[0].getX(), fires[0].getY(), d.x, d.y, 50, 40)) {
                            
                    fires.splice(0,1);
                    shields[i].takeDam();
                    if(d.health < 1){
                        shields.splice(i,1);
                    }
                    fires[0] = new Laser(0,600);

                }
            }
    }else{
        if(gameCount > gameOverTime){
            gameOver = false;
            gameCount = 0;

        }
        else{ 
           image(endGame, -100, 0);
           gameCount++;
        }
    }
    

}


function Blast(){
    let choice;
    choice = random(alien);
    fires[0] = new Laser(choice.x, choice.y);
    lazerSpeed = 0;
}

function keyPressed() {
    if(fireSpeed >= fireRate){ 
        if (keyCode === 32) {
            shots[0] = new Rocket(player.x, player.y);
            fireSpeed = 0;
        }
    }
}

function rowMove(arr){
    
   for(var i = 0; i < arr.length; i++) {
        var d = arr[i];
        d.display();
        d.moveX();
        if(d.x > 800 - d.w || d.x < 0 + d.w){
            d.wall();
        }
        if(hitTestPoint(shots[0].getX(), shots[0].getY(), d.x, d.y, d.w, d.h)) {
            
            shots.splice(0,1);
            arr.splice(i, 1);
            shots[0] = new Rocket(0,0);
            score ++;

        }
    }
}

function reachPlayer(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i].y > 320){
            return true;
        }
        else{
            return false;
        }
    }
}

function hitTestPoint(px, py, bx, by, bw, bh) {

    if(px > bx && px < bx + bw) {
        if(py > by && py < by + bh) {
            return true;
        }
    }

    return false;
}