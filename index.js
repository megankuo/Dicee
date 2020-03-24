// Rough Notes
//function randomNumber(){
//   var randomNumber1 = Math.floor(Math.random()*6) + 1;
//   return randomNumber1;
// }
//
// var leftDice = randomNumber();
// var rightDice = randomNumber();
//
// document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + leftDice + ".png");
// document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + rightDice + ".png");
//
// if (leftDice > rightDice){
//   document.querySelector("h1").textContent = "🚩Player 1 wins!";
// } else if (leftDice < rightDice) {
//   document.querySelector("h1").textContent = "Player 2 wins! 🚩";
// } else {
//   document.querySelector("h1").textContent = "You both lose!";
// }

var leftDice = "images/dice" + (Math.floor(Math.random()*6) + 1) + ".png";
var rightDice = "images/dice" + (Math.floor(Math.random()*6) + 1) + ".png";

document.querySelectorAll("img")[0].setAttribute("src", leftDice);
document.querySelectorAll("img")[1].setAttribute("src", rightDice);

if (leftDice > rightDice){
  document.querySelector("h1").textContent = "🚩Player 1 wins!";
} else if (leftDice < rightDice) {
  document.querySelector("h1").textContent = "Player 2 wins! 🚩";
} else {
  document.querySelector("h1").textContent = "You both lose!";
}
