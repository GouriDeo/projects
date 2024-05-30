
function add(){
    let n1 = document.getElementById("numOne").value;
    let n2 = document.getElementById("numTwo").value;
    if(validate(n1,n2) == true){
        let numOne = parseFloat(n1);
        let numTwo = parseFloat(n2);
        let value = numOne + numTwo;
        alert("Addition is " +value);
        document.getElementById("numOne").value = "";
        document.getElementById("numTwo").value = "";
    }
    else{
        alert("error")
        document.getElementById("numOne").value = "";
        document.getElementById("numTwo").value = "";
    }
}

function subt(){
    let n1 = document.getElementById("numOne").value;
    let n2 = document.getElementById("numTwo").value;
    if(validate(n1,n2) == true){
        let numOne = parseFloat(n1);
        let numTwo = parseFloat(n2);
        let value = numOne - numTwo;
        alert("Subtraction is " +value);
        document.getElementById("numOne").value = "";
        document.getElementById("numTwo").value = "";
    }
    else{
        alert("error")
        document.getElementById("numOne").value = "";
        document.getElementById("numTwo").value = "";
    }
}

function multi(){
    let n1 = document.getElementById("numOne").value;
    let n2 = document.getElementById("numTwo").value;
    if(validate(n1,n2) == true){
        let numOne = parseFloat(n1);
        let numTwo = parseFloat(n2);
        let value = numOne * numTwo;
        alert("Multiplication is " +value);
        document.getElementById("numOne").value = "";
        document.getElementById("numTwo").value = "";
    }
    else{
        alert("error")
        document.getElementById("numOne").value = "";
        document.getElementById("numTwo").value = "";
    }
}

function div(){
    let n1 = document.getElementById("numOne").value;
    let n2 = document.getElementById("numTwo").value;
    if(validate(n1,n2) == true){
        let numOne = parseFloat(n1);
        let numTwo = parseFloat(n2);
        let value = numOne / numTwo;
        alert("Division is " +value);
        document.getElementById("numOne").value = "";
        document.getElementById("numTwo").value = "";
    }
    else{
        alert("error")
        document.getElementById("numOne").value = "";
        document.getElementById("numTwo").value = "";
    }
}

function validate(num1,num2){
    if(num1.toString().match(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/) && num2.toString().match(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/) ){
        return true;
    }
    else{
        return false;
    }
}