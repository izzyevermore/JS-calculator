function disp(x){
    document.getElementById("result").value +=x;
}

function calculate(){
    num = document.getElementById("result").value;
    num2 = eval(num);
    document.getElementById("result").value = num2;
}

function clr(){
    document.getElementById("result").value = "";
}