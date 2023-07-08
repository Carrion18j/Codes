'use strict';

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const currentScoreOfP1 = document.getElementById('current--0');
const currentScoreOfP2 = document.getElementById('current--1');
const scoreOfP1 = document.getElementById('score--0');
const scoreOfP2 = document.getElementById('score--1');
const dice = document.querySelectorAll('.dice')[0];

currentScoreOfP1.textContent = 0;
currentScoreOfP2.textContent = 0;
dice.classList.add('hidden');
let activePlayer = 0;
const scores = [0, 0];

const gameLogic = (currentPlayerScore, score) => {
  const randomNumber = () => Math.trunc(Math.random() * 6 + 1);

  let playerScroe = 0;
  btnRoll.addEventListener('click', () => {
    let randNum = randomNumber();
    console.log(randNum);

    dice.classList.remove('hidden');
    dice.src = `dice-${randNum}.png`;

    const resetter = () => {
      playerScroe = 0;
      activePlayer = activePlayer === 1 ? 0 : 1;
    };

    randNum === 1 ? resetter : (playerScroe += randNum);

    console.log(playerScroe);
    currentPlayerScore.textContent = playerScroe;
  });

  btnHold.addEventListener('click', () => {
    const currentScore = Number(currentPlayerScore.textContent);
    const playerScore = Number(score.textContent);
    score.textContent = currentScore + playerScore;

    currentPlayerScore.textContent = 0;
    activePlayer = activePlayer === 1 ? 0 : 1;
    playerScroe = 0;
    dice.src = `dice-1.png`;
  });
};

activePlayer
  ? gameLogic(currentScoreOfP2, scoreOfP2)
  : gameLogic(currentScoreOfP1, scoreOfP1);
