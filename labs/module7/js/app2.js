var user = document.getElementById("user");
var pass = document.getElementById("pass");
var form = document.getElementById("userDiv");
document.getElementById("btn").addEventListener("click", checkText);

function checkText(){
    if(user.value == "Username" && pass.value == "Password"){
        document.getElementById("userDiv").innerHTML = "Success";
    }
    else{
        document.getElementById("userDiv").innerHTML = "Wrong information";
    }
}