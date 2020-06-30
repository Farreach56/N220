var div = document.getElementById("id");
document.getElementById("id").addEventListener("click", change);
var size = 100;

function change(){
    size *= 1.1;
    div.style.width= size +'px';
    div.style.height= size + 'px';
}