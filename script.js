'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Random number between 1 and 20
let score = 20;
let highscore = 0;

const guess = function () {
  const guessedNumber = Number(document.querySelector('.guess').value);

  if (!guessedNumber) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guessedNumber == secretNumber) {
    document.querySelector('.message').textContent = '💯 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessedNumber != secretNumber && score > 1) {
    if (guessedNumber < secretNumber) {
      document.querySelector('.message').textContent = '↘️ Too low!';
    } else if (guessedNumber > secretNumber) {
      document.querySelector('.message').textContent = '↗️ Too  high!';
    }
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = '💥 Loser!';

  }
};

const again = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
};

document.querySelector('.check').addEventListener('click', guess);

document.querySelector('.again').addEventListener('click', again);
