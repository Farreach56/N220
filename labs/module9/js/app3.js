let objects = [

    { color: "#FF0000", height: 200, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 300 },
   
    { color: "#ff0000", height: 200, width: 300 },
   
   ];

   for (let i = 0; i < 3; i++) {
       var newEl = document.createElement("div");
       newEl.setAttribute("style", `background-color: ${objects[i].color}; height: ${objects[i].height}px; width: ${objects[i].width}px;`);
       document.body.appendChild(newEl);   
   }
   


  
   