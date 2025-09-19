var number1 = Math.floor(Math.random() * 6 + 1);
var ranDice1 = "dice" + number1 + ".png";
var path1 = "images/" + ranDice1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", path1);



var number2 = Math.floor(Math.random() * 6 + 1);
var ranDice2 = "dice" + number2 +  ".png";
var path2 = "images/" + ranDice2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", path2);

if(number1 > number2){
    document.querySelector("h1").innerHTML = "Player1 wins!";
}else if (number2 > number1){
    document.querySelector("h1").innerHTML = "PLayer2 wins!";
}else{
    document.querySelector("h1").innerHTML = "It's a Tie!";
}