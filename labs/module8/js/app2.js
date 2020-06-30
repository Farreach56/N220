function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


for(var i = 1; i <= 100; i++){
     var newDiv = document.createElement("div");
     newDiv.id = `div${i}`;
     newDiv.setAttribute("style",`width: 20px; background: ${getRandomColor()}; height:20px; float: left;`);
     document.body.appendChild(newDiv);  
   
    

}







