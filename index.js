
//RANDOM IMAGE FOR DICE1 ON EACH REFRESH
var randomNumber1 = Math.floor(6*Math.random())+1;

var source1 = "./images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", source1);

//RANDOM IMAGE FOR DICE2 ON EACH REFRESH
var randomNumber2 = Math.floor(6*Math.random())+1;

var source2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", source2);

if(randomNumber1 > randomNumber2){

    document.querySelector("h1").textContent = "🚩Player 1 Wins!";

}else if(randomNumber1 < randomNumber2){

    document.querySelector("h1").textContent = "🚩Player 2 Wins!";

}else{

    document.querySelector("h1").textContent = "Draw!";

}