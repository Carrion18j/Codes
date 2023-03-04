const userchoice = (value) => {
  let computerChoice = Math.floor(Math.random() * 3)

  // convert compchoos to RPS
  if (computerChoice == "0") {
    computerChoice = "rock";
  } else if (computerChoice == "1") {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  playerChoice = document.getElementById(value).innerHTML
  document.getElementById("str").innerHTML = ("You choos " + playerChoice + " and Computer choos " + computerChoice)

  // determines the winner
  if (playerChoice === "rock" && computerChoice === "scissors") {
    document.getElementById("winner").innerHTML = "You Win!";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    document.getElementById("winner").innerHTML = "You Win!";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    document.getElementById("winner").innerHTML = "You Win!";
  } else if (playerChoice === computerChoice) {
    document.getElementById("winner").innerHTML = "It's a tie!";
  } else {
    document.getElementById("winner").innerHTML = "Computer Wins!";
  }
}
