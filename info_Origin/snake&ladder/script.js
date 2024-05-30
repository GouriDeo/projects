var count=0;
var color =0;

function randomNum() {
    var ran = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    start(ran);
}

function randomNum1() {
    var ran = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    start(ran);
}

function start(random){
    if(count%2 ==0){
        alert("Die rolled "+random); 
        color= color+random;
        let boxes = document.querySelectorAll('.box');
        boxes.forEach((box,i) => {
            if(box.innerHTML.trim() == color){
            
            } 
        })
        console.log(count);
       count++;
    }
    else{
        alert("Die rolled "+random); 
        let boxes = document.querySelectorAll('.box2');
        console.log(count);
        count++;

    }
}
