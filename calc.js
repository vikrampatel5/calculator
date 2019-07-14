function add(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var result = (+x)+(+y);
    document.getElementById("result").value = result;
}

function substract(x, y){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var result = (+x)-(+y);
    document.getElementById("result").value = result;
}
function multiply(x, y){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var result = (+x)*(+y);
    document.getElementById("result").value = result;
}
function divide(x, y){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var result = (+x)/(+y);
    document.getElementById("result").value = result;
}
