'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //There is no input
  if (!guess) {
    displayMessage('⛔No number!');
  }
  // player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    highScore = score;
    document.querySelector('.number').style.width = '30rem';
    if (score >= highScore) {
      highScore = score;
    } else if (score < highScore) {
      highScore = highScore;
    }
    document.querySelector('.highscore').textContent = highScore;
  }

  //When guess is wrong!
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😫You lost');
      document.querySelector('body').style.backgroundColor = '#e4000f';
      document.querySelector('.score').textContent = 0;
    }
  }
  //   //guess is 2 high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😫You lost!';
  //       document.querySelector('body').style.backgroundColor = '#e4000f';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  //   //guess is 2 low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😫You lost!';
  //       document.querySelector('body').style.backgroundColor = '#e4000f';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayMessage('Start guesing...');
});
