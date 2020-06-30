var input = document.getElementById("text");
document.getElementById("btn").addEventListener("click", displayText);

function displayText(){
    console.log("Hello " + input.value);
}
