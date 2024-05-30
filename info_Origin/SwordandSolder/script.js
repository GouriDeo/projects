function lastOne(){
    var num = document.getElementById("text_num").value;
    console.log(num);
    var sum=1;
    while(sum<=num){
        sum= sum*2;
    }
    sum=sum/2;
    var winner = (2*(num-sum))+1;
    alert("The winner is "+winner);
    console.log(winner); 
}