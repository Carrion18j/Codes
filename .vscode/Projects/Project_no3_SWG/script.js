// Take input user name & choos
let userName = prompt("Enter your name: ");
userName = userName.charAt(0).toUpperCase() + userName.slice(1);

if (userName === "") {
  userName = "User";
}

alert("Hi " + userName + " please choose from snake water gun");

//Give player name to .html to print

document.getElementsByClassName(`userName`)[0].innerHTML =
  "Hi " + userName + " Lets play SWG";

// Globle func
const rest = (userName, userChoos) => {
  // Take Comp choos

  let computerChoos = Math.floor(Math.random() * 3);

  // Convert computer choos to SWG

  if (computerChoos == 1) {
    computerChoos = "snake";
  } else if (computerChoos == 2) {
    computerChoos = "water";
  } else {
    computerChoos = "gun";
  }

  // Display playe and computer choos

  let CompUserChoos =
    userName + " chose " + userChoos + " and computer chose " + computerChoos;
  document.getElementsByClassName(`CompUserChoos`)[0].innerHTML = CompUserChoos;

  // Decide who is winner

  if (
    true == (userChoos != "snake") &&
    userChoos != "water" &&
    userChoos != "gun"
  ) {
    document.getElementsByClassName("winner")[0].innerHTML =
      userChoos + " Is Not A Valid Choice. Please Enter A Valid Choice ";
    console.log(userName);
  } else if (userChoos === "water" && computerChoos === "gun") {
    document.getElementsByClassName("winner")[0].innerHTML =
      userName + " Wins!";
  } else if (userChoos === "snake" && computerChoos === "water") {
    document.getElementsByClassName("winner")[0].innerHTML =
      userName + " Wins!";
  } else if (userChoos === "gun" && computerChoos === "snake") {
    document.getElementsByClassName("winner")[0].innerHTML =
      userName + " Wins!";
  } else if (userChoos == computerChoos) {
    document.getElementsByClassName("winner")[0].innerHTML = "It's a tie!";
  } else {
    document.getElementsByClassName("winner")[0].innerHTML = "Computer Wins!";
  }
};
// SWG Functions
const snakeB = () => {
  let userChoos = "snake";
  rest(userName, userChoos);
};
const waterB = () => {
  let userChoos = "water";
  rest(userName, userChoos);
};
const gunB = () => {
  let userChoos = "gun";
  rest(userName, userChoos);
};
