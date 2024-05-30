let n1= 0;
let n2 = 1;
let n3 = 2;
function rotate(){

    let color = ["red", "blue", "yellow"];
    
    if(n3==2){
        n3=0;
        n1++;
        n2++;
        document.getElementById("red").style.backgroundColor = color[n1];
        document.getElementById("blue").style.backgroundColor = color[n2];
        document.getElementById("yellow").style.backgroundColor = color[n3];

    }
    else if(n2==2){
        n2=0;
        n1++;
        n3++;
        document.getElementById("red").style.backgroundColor = color[n1];
        document.getElementById("blue").style.backgroundColor = color[n2];
        document.getElementById("yellow").style.backgroundColor = color[n3];
    }
    else{
        n1=0;
        n2++;
        n3++;
        document.getElementById("red").style.backgroundColor = color[n1];
        document.getElementById("blue").style.backgroundColor = color[n2];
        document.getElementById("yellow").style.backgroundColor = color[n3];
    }

}