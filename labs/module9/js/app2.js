var txt = document.getElementById("txt");
var inp = document.getElementById("inp");
badwords = ["fish", "boots", "tires"];
words = [];


function splitString(){
    var words = inp.value.split(" ");
    inp.value = "";
    txt.innerHTML = " ";
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        var el = words[i]; 
        if(badwords.includes(el)){
            count++;   
        }   
    } 
    if(count == 0){
        txt.innerHTML = "No bad words found "; 
    }
    else{
        txt.innerHTML = `Yes there was bad words found a total of ${count} words found. `;
    }
}