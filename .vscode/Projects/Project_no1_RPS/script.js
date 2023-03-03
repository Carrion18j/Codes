//Make User name first letter capital
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Ask for player name
let playername = prompt("Enter your name");
let playerChoice = prompt(playername + " please chose rock, paper, scissor");
let computerChoice = Math.floor(Math.random() * 3);

//Give player name to .html to print
document.getElementById(`playername`).innerHTML =
  "Hi " + capitalizeFirstLetter(playername);

//convert computer choice into rock paper sizer
if (computerChoice == 0) {
  computerChoice = "rock";
} else if (computerChoice == 1) {
  computerChoice = "paper";
} else {
  computerChoice = "scissor";
}

let str =
  capitalizeFirstLetter(playername) +
  " chose " +
  playerChoice +
  " and computer chose " +
  computerChoice;
document.getElementById(`str`).innerHTML = str;

// Determines the winner
if (
  true == (playerChoice != "rock") &&
  playerChoice != "paper" &&
  playerChoice != "scissor"
) {
  document.getElementById("winner").innerHTML =
    playerChoice + " Is Not A Valid Choice. Please Enter A Valid Choice ";
  console.log(playerChoice);
} else if (playerChoice === "rock" && computerChoice === "scissor") {
  document.getElementById("winner").innerHTML = playername + " Wins!";
} else if (playerChoice === "paper" && computerChoice === "rock") {
  document.getElementById("winner").innerHTML = playername + " Wins!";
} else if (playerChoice === "scissor" && computerChoice === "paper") {
  document.getElementById("winner").innerHTML = playername + " Wins!";
} else if (playerChoice === computerChoice) {
  document.getElementById("winner").innerHTML = "It's a tie!";
} else {
  document.getElementById("winner").innerHTML = "Computer Wins!";
}
