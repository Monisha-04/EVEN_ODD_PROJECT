var player1={
name:"Player1",
p1_count:0,
p1_val:[]
};
var player2={
    name:"Player2",
    p2_count:0,
    p2_val:[]
};
var player1={
    name:"Player 1",
    count1:0,
    val1:[]
}
var player2={
    name:"Player 2",
    count2:0,
    val2:[]
}
var count=0;
function playEvenOdd(){
    var p1= Math.floor(Math.random()*100+1);
    var p2= Math.floor(Math.random()*100+1);
    player1.val1.push(p1);
    player2.val2.push(p2);
    if(count==5){
        if(player1.count1==player2.count2){
            document.getElementById("head").textContent="Match Draw!!!";
        }
        else if(player1.count1>player2.count2){
            document.getElementById("head").textContent=player1.name + "Wins!!!";
        }
        else{
            document.getElementById("head").textContent=player2.name + "Wins!!!";
        }
    }
    else{
        count++;
        if(p1%2==0){
            player1.count1++;
            document.getElementById("player1_scores").textContent=player1.count1;
        }
        if(p2%2==0){
            player2.count2++;
            document.getElementById("player2_scores").textContent=player2.count2;
        }
        updateCircle();
    }
}
function updateCircle(){
    var p1_circle = document.getElementById("player1").children;
    player1.val1.forEach((run,value)=>{
        if(run%2==0){
            p1_circle[value].style.backgroundColor="green";
        }
        else{
            p1_circle[value].style.backgroundColor="red";
        }
    });

    var p2_circle = document.getElementById("player2").children;
    player2.val2.forEach((run,value)=>{
        if(run%2==0){
            p2_circle[value].style.backgroundColor="green";
        }
        else{
            p2_circle[value].style.backgroundColor="red";
        }
    });
    
}