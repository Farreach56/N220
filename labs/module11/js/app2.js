let red = 0;
let green = 0;
let blue = 0;
let output = document.getElementById("output");
output.innerHTML = `current color: rgb(${red},${green},${blue})`;

function changeColor() {
    var color = event.target.getAttribute("data-color");
    var id = Number(event.target.getAttribute("data-id"));
    switch(color) {
        case "red":
            red += id;
            break;
        case "green":
            green += id;
            break;
        case "blue":
           blue += id;
           break;
      }
    document.getElementById("main").style.backgroundColor = `rgb(${red},${green},${blue})`;
    output.innerHTML = `current color: rgb(${red},${green},${blue})`;
       
  }