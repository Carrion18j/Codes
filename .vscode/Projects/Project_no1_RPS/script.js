/*
//Make User name first letter capital
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//Random num
const rand = () => {
  return Math.floor(Math.random() * 3);
}
//Convert num to choos 
const choos = (choics) => {
  if (choics == '0') {
    choics = "rock";
  } else if (choics == `1`) {
    choics = "paper";
  } else {
    choics = "scissor";
  }
}

// Ask for player name
let playername = prompt("Enter your name");
let playerChoice = prompt(playername + " please chose rock, paper, scissor");
let computerChoice = rand();

if (playername == '') {
  playername = 'player'
}
if (playerChoice == '') {
  playerChoice = playerChoice.parceInt()
  playerChoice = choos(playerChoice)
}

//Give player name to .html to print
document.getElementById(`playername`).innerHTML =
  "Hi " + capitalizeFirstLetter(playername);

//convert computer choice into rock paper sizer
computerChoice = choos(computerChoice)

document.getElementById(`str`).innerHTML = (capitalizeFirstLetter(playername) + " chose " + playerChoice + " and computer chose " + computerChoice);

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
} */





//Make User name first letter capital
const capitalizeFirstLetter = () => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//Random num
const rand = () => {
  return Math.floor(Math.random() * 3);
}

//Convert num to choos 
const choos = (choics) => {
  if (typeof choics == String) {
    if (choics == '0') {
      choics = "rock";
    } else if (choics == `1`) {
      choics = "paper";
    } else {
      choics = "scissor";
    }
  }
}

//convert computer choice into rock paper sizer
const toComChoos = (computerChoice) => {
  if (computerChoice = '0') {
    computerChoice = "rock";
  } else if (computerChoice == `1`) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissor";
  }
}

// Determines the winner
const winner = (playerChoice, computerChoice) => {
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
}


let playername = document.getElementsByClassName("name").innerHTML;
if (playername != undefined) {
  playername = playername.capitalizeFirstLetter()
  let computerChoice = rand()
  computerChoice = toComChoos(computerChoice)

  const userchoice = () => {
    return document.getElementsByClassName('value').innerHTML
  }

  document.getElementsByClassName('winner').innerHTML = winner(userchoice, computerChoice)

}
