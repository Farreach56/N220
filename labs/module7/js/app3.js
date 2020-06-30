var number = document.getElementById("guess");
var random;
newGuess();
console.log("Guess number");
document.getElementById("btn").addEventListener("click", checkText);


function newGuess(){
    return random = Math.floor(Math.random() * 20) + 1;
}

function checkText(){ 
    var guess = Number(number.value);
    if(guess < random ){
        console.log("Too Low")
    }
    else if(guess == random){
         random = newGuess();
         console.log("Success");
         console.log("Guess a new number");

    }
    else if(guess > random){
        console.log("Too High")

    }
    document.getElementById("guess").value = "";
}