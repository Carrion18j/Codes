'use strict';

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const input = document.querySelector('.guess');
const again = document.querySelector('.again');
const score = document.querySelector('.score');
const check = document.querySelector('.check');
const body = document.querySelector('body');

let randomeNumber = Math.round(Math.random() * 20 + 1);
let actualScore = 20;

const displayMessage = (type, message) => {
  type.textContent = message;
};

document.querySelector('.highscore').textContent =
  localStorage.getItem('HighScore');

const logic = () => {
  if (score.textContent !== '0') {
    if (input.value < randomeNumber) {
      displayMessage(message, 'Entered Value Is Low ⬇️');
      --actualScore;
    } else if (input.value > randomeNumber) {
      displayMessage(message, 'Entered Value Is High ⬆️');
      --actualScore;
    } else {
      displayMessage(message, `🥳🥳 You Win!! `);
      body.style.backgroundColor = 'green';
      displayMessage(number, randomeNumber);
      if (Number(localStorage.getItem('HighScore')) < actualScore) {
        localStorage.setItem('HighScore', `${actualScore}`);
      }
      displayMessage(score, `${actualScore}`);
      console.log(score.textContent);
    }
  } else {
    message.textContent = 'You Lose 🥲🥲';
    number.textContent = randomeNumber;
  }
};

check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  !guess ? (message.textContent = '⛔ No Number') : logic();
});

again.addEventListener('click', () => {
  randomeNumber = Math.round(Math.random() * 20 + 1);
  actualScore = 20;
  body.style.backgroundColor = 'black';
  input.value = '0';
  displayMessage(number, '?');
  displayMessage(message, 'Start guessing...');
  displayMessage(score, '20');
});
