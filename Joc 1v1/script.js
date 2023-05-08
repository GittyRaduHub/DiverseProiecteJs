'use strict';
// let scoreP0 = 0;
// let scoreP1 = 0;
// let currentScore0 = 0;
// let currentScore1 = 0;
// const dice1 = 0;
// const dice2 = 2;
// const dice3 = 3;
// const dice4 = 4;
// const dice5 = 5;
// const dice6 = 6;
// let diceArray = [
//   'dice-1.png',
//   'dice-2.png',
//   'dice-3.png',
//   'dice-4.png',
//   'dice-5.png',
//   'dice-6.png',
// ];
// const player0 = documnet.querySelector('.player--0');
// const player1 = documnet.querySelector('.player--1');
// const hold = document.querySelector('.btn--hold');
// const newGame = document.querySelector('.btn--new');
// const rollDice = document.querySelector('.btn--roll');
// const dice = (document.querySelector('.dice').style.display = 'none');
// document.querySelector('#score--0').textContent = scoreP0;
// document.querySelector('#score--1').textContent = scoreP1;
// document.querySelector('#current--0').textContent = currentScore0;
// document.querySelector('#current--1').textContent = currentScore1;

// rollDice.addEventListener('click', function () {
//   let i = Math.trunc(Math.random() * 6);
//   document.querySelector('.dice').src = diceArray[i];
//   document.querySelector('.dice').style.display = '';
// });

// newGame.addEventListener('click', function () {
//   scoreP0 = 0;
//   scoreP1 = 0;
//   document.querySelector('.dice').style.display = 'none';
// });
// hold.addEventListener('click', function () {
//   scoreP0 = scoreP0 + currentScore0;
//   currentScore0 = 0;
//   scoreP1 = scoreP1 + currentScore1;
//   currentScore1 = 0;
// });
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

//Starting conditions:
const newGame = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

newGame();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. Check for rolled1
    if (dice !== 1) {
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player.
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
    switchPlayer();
  }
});

btnNew.addEventListener('click', newGame);
