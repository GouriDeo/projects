var btn1Count=0;
var btn2Count=0;
var btn3Count=0;
var count=0;
var b1 =0;
var b2 =0;
var b3 =0;


function bt1(){
    btn1.innerHTML++;
    btn1Count++;
    count++;
    b1=count;
}

function bt2(){
    btn2.innerHTML++;
    btn2Count++;
    count++;
    b2=count;
}

function bt3(){
    btn3.innerHTML++;
    btn3Count++;
    count++;
    b3=count; 
}

function increment(){
   if(btn1Count==0 && btn2Count==0 && btn3Count==0){
    btn1.innerHTML++;
    btn2.innerHTML++;
    btn3.innerHTML++;
   }
   else if(btn2Count==0 && btn3Count==0){
    btn2.innerHTML++;
    btn3.innerHTML++;
   }
   else if(btn1Count==0 && btn3Count==0){
    btn1.innerHTML++;
    btn3.innerHTML++;
   }  
   else if(btn1Count==0 && btn2Count==0){
    btn1.innerHTML++;
    btn2.innerHTML++;
   } 
   else if(btn1Count==0 && btn2Count!=0 && btn3Count!=0){
    btn1.innerHTML++;
   } 
   else if(btn1Count!=0 && btn2Count==0 && btn3Count!=0){
    btn2.innerHTML++;
   }
   else if(btn1Count!=0 && btn2Count!=0 && btn3Count==0){
    btn3.innerHTML++;
   }
   else{
    if(b1<b2){
        if(b3<b1){
            btn3.innerHTML++;
        }
        else{
            btn1.innerHTML++;
        }
    }
    else{
        if(b2<b3){
            btn2.innerHTML++;
        }
        else{
            btn3.innerHTML++;
        }
    }
   }
}

