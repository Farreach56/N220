let stepCount = [ 16, 22, 20, 30 ];
var sum = 0;
var average = 0;
for(var i = 0; i < stepCount.length; i++){
    sum += stepCount[i];
}

average = sum/stepCount.length;
var newDiv = document.createElement('div');
newDiv.innerHTML = `The sum is: ${sum} amd the average is: ${average}`;
document.body.appendChild(newDiv);
