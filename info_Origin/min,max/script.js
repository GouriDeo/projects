function val(num1,num2,num3){
    if(num1.toString().match(/^[+-]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/) && num2.toString().match(/^[+-]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/) && num3.toString().match(/^[+-]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/) ){
        return true;
    }
    else{
        return false;
    }
}

function validate(){
    let mn = document.getElementById("min").value;
    let mx = document.getElementById("max").value;
    let ml = document.getElementById("mul").value;
    console.log(val(mn,mx,ml))
    if(val(mn,mx,ml) == true){
        let min = parseFloat(mn);
        let max = parseFloat(mx);
        let mul = parseFloat(ml);
        if(min>=max){
            document.getElementById("min").style.borderColor = "red";
        }
        if(mul>=max){
            document.getElementById("mul").style.borderColor = "red";
        }
        if(min<mul){
            document.getElementById("mul").style.borderColor = "red";
        }
        if(max%min != 0){
            document.getElementById("min").style.borderColor = "red";
            document.getElementById("max").style.borderColor = "red";

        }
        if(max%mul != 0){
            document.getElementById("mul").style.borderColor = "red";
            document.getElementById("max").style.borderColor = "red";
        }
    }
    else{
        alert("error");
    }
}