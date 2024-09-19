var ranNo=Math.floor((Math.random()*6))+1;
var ranImg="dice"+ranNo+".png";
var ranImgSrc="images/"+ranImg;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",ranImgSrc);
var ranNo2=Math.floor(Math.random()*6)+1;
var ranImg2="dice"+ranNo2+".png";
var ranImgSrc2="images/"+ranImg2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",ranImgSrc2);
//if player1 wins
if(ranNo>ranNo2){
    document.querySelector("h1").innerHTML="Player1 Wins!"
}
//if player2 wins
else if(ranNo2>ranNo){
        document.querySelector("h1").innerHTML="Player2 Wins!";
}
//if dice scores are equal ie tie/draw
else{
    document.querySelector("h1").innerHTML="Draw!";
}