'use strict';

// console.log('Game setup ready');
// console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===');
// console.log('Goal: Build a complete interactive game from scratch');
// console.log('Focus: DOM manipulation, game state, and user interaction');

// //==== DOM Element Selection - The Foundation

// const messageEl = document.querySelector('.message');
// console.log(messageEl);

// console.log(messageEl.textContent);

// // messageEl.textContent = 'Hello from Javascript';


// const scoreEl = document.querySelector(`.score`);
// console.log('Score element:', scoreEl);

// const numberEl = document.querySelector('.number');
// // numberEl.textContent = 15;

// const highscoreEl = document.querySelector('.highscore');

// console.log('Current highscore:', highscoreEl.textContent);

// const guessEl = document.querySelector('.guess');

// // guessEl.value = 10;

// console.log('Guess input value:', guessEl.value);

// // Game State Variables

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log('secretNumber', secretNumber);


// let score = 20;
// let highscore = 0;

// document.querySelector('.score').textContent = score;
// document.querySelector('.highscore').textContent = highscore;

// console.log('Game state initialized');

// playerName attempts
let playerName = 'Ivan';
let attempts = 0;
let gameActive = true;


console.log('Ivan:', playerName);
console.log('Attempts:', attempts);
console.log('Game active:', gameActive);

// Basic Game Logic

document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button clicked!');

  
  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);

  
  if (guess === secretNumber) {
    console.log('Correct guess!');
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.backgroundColor = 'green';
    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
        document.querySelector('.message').textContent = '🎉 You won!';
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;
        document.querySelector('.message').textContent = '🎉 Game Over!';
        document.querySelector('.guess').value = '';

    }
  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = '📈 Too high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    console.log('Too low!');
    document.querySelector('.message').textContent = '📉 Too low!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
    document.querySelector('.message').textContent = '💥 You lost!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
    document.body.style.backgroundColor = 'red';
    document.querySelector('.message').textContent = '💀 Game Over!';
    document.querySelector('.guess').value = '';
    }
  }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;
    document.body.style.backgroundColor = '';
});

document.querySelector('.check').addEventListener('.click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    return;
    }

    if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      'Number must be between 1 and 20!';
    return; 
  }
});

////////////////////////////////////
// Constants & Selectors

// Ranges and defaults
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

// Cached selectors (single source of truth)
const bodyEl = document.body;
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const guessInputEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

////////////////////////////////////
// UI Helpers

function setMessage(text) {
  messageEl.textContent = text;
}
function setNumber(value) {
  numberEl.textContent = value;
}
function setScore(value) {
  scoreEl.textContent = value;
}
function setHighscore(value) {
  highscoreEl.textContent = value;
}
function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}
function disablePlay(disabled) {
  guessInputEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}
function clearInput() {
  guessInputEl.value = '';
}

////////////////////////////////////
// Game State & Reset

let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
let score = START_SCORE;
let highscore = 0;

function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderInitialUI() {
  setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  clearInput();
  disablePlay(false);
  setBackground('');
}

// Initial render
renderInitialUI();

////////////////////////////////////
// Handlers 

checkBtnEl.addEventListener('click', function () {
  const guess = Number(guessInputEl.value);

  // Validation
  if (!guess) return setMessage('No number!');
  if (guess < MIN_NUMBER || guess > MAX_NUMBER)
    return setMessage(
      `Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`
    );

  if (guess === secretNumber) {
    setMessage('🎉 Correct Number!');
    setNumber(secretNumber);
    setBackground('green');
    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }
    disablePlay(true);
    clearInput();
    return; // early exit
  }

  // Wrong guess
  setMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
  score--;
  setScore(score);

  if (score < 1) {
    setMessage('💥 You lost!');
    setNumber(secretNumber);
    setBackground('red');
    disablePlay(true);
    clearInput();
  }
});

againBtnEl.addEventListener('click', function () {
  resetGameState();
  renderInitialUI();
});

// Enter key submits when possible
window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !checkBtnEl.disabled) {
    checkBtnEl.click();
  }
});

// Focus input on restart
againBtnEl.addEventListener('click', function () {
  guessInputEl.focus();
});
