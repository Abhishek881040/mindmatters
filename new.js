var score1=0;
function option1(){
    score1=score1+1;
}
function option2(){
    score1=score1+1;
}
function option3(){
    score1=score1+2
}
function special(){
    score1=score1+3;
}

    if(score1>=0 && score1<10){
       return document.getElementById("resultfinal").innerHTML = "Minimal Depression";
    }
    if else(score1>=10 && score1<18){
       return document.getElementById("resultfinal").innerHTML = "Medium Depression";
    }
    if else(score1>=18 && score1<22){
       return document.getElementById("resultfinal").innerHTML = "High Depression";
    }
    else{
       return document.getElementById("resultfinal").innerHTML = "Very High Depression --- Warning:please contact 911";
    }
function reset(){
    score1=0;
}
document.getElementsByClassName("speicalbox").innerHTML = "Your Score : " + score1 +"/25";