const userchoice = (value) => {
  playerChoice = document.getElementById(value).innerHTML
  
  let computerChoice = Math.floor(Math.random() * 3)

  // convert compchoos to RPS
  if (computerChoice == "0") {
    computerChoice = "Rock";
  } else if (computerChoice == "1") {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  document.getElementById("str").innerHTML = ("You choos " + playerChoice + " and Computer choos " + computerChoice)

  
  // determines the winner
  if (playerChoice == "Rock" && computerChoice == "Scissors") {
    document.getElementById("winner").innerHTML = "You Win!";
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    document.getElementById("winner").innerHTML = "You Win!";
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    document.getElementById("winner").innerHTML = "You Win!";
  } else if (playerChoice == computerChoice) {
    document.getElementById("winner").innerHTML = "It's a tie!";
  } else {
    document.getElementById("winner").innerHTML = "Computer Wins!";
  }
}
