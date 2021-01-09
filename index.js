var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var newInput1= "dice" + randomNumber1 + ".png"
var newInput2= "dice" + randomNumber2 + ".png"
document.querySelector(".img1").setAttribute("src", newInput1)
document.querySelector(".img2").setAttribute("src", newInput2)
if (newInput1>newInput2){document.querySelector("h1").textContent="Player 1 wins"}
else if (newInput1<newInput2){document.querySelector("h1").textContent="Player 2 wins"}
else if (newInput1=newInput2){document.querySelector("h1").textContent="Draw"}
