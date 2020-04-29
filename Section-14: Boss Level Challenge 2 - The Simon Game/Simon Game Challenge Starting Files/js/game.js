const green = document.querySelector('#green');
const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const blue = document.querySelector('#blue');
const levels = document.querySelector('#level-title');

const playGreenAudio = new Audio('./sounds/green.mp3');
const playRedAudio = new Audio('./sounds/red.mp3');
const playYellowAudio = new Audio('./sounds/yellow.mp3');
const playBlueAudio = new Audio('./sounds/blue.mp3');

let buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

console.log(gamePattern);
console.log(userClickedPattern);

green.addEventListener('click', () => {
  let userChosenColor = green;
  userClickedPattern.push(userChosenColor);
  nextSequence();
  levels.innerHTML = `LEVEL ${level}`;
});
red.addEventListener('click', () => {
  let userChosenColor = red;
  userClickedPattern.push(userChosenColor);
  nextSequence();
  levels.innerHTML = `LEVEL ${level}`;
});
yellow.addEventListener('click', () => {
  let userChosenColor = yellow;
  userClickedPattern.push(userChosenColor);
  nextSequence();
  levels.innerHTML = `LEVEL ${level}`;
});
blue.addEventListener('click', () => {
  let userChosenColor = blue;
  userClickedPattern.push(userChosenColor);
  nextSequence();
  levels.innerHTML = `LEVEL ${level}`;
});

// =========================================
// FUNCTION NEXT SEQUENCE
// =========================================

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);

  let randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  // FLASH THE COLOR WITH THE CORRESPONDING RANDOMCHOSEN
  if (randomChosenColor === 'green') {
    green.classList.add('flashit');
    playGreenAudio.play();
  } else if (randomChosenColor === 'red') {
    red.classList.add('flashit');
    playRedAudio.play();
  } else if (randomChosenColor === 'yellow') {
    yellow.classList.add('flashit');
    playYellowAudio.play();
  } else if (randomChosenColor === 'blue') {
    blue.classList.add('flashit');
    playBlueAudio.play();
  }

  // AFTER 3 SECS REMOVE ALL FLASHIT CLASSES FOR REPEAT
  setTimeout(function () {
    green.classList.remove('flashit');

    red.classList.remove('flashit');

    yellow.classList.remove('flashit');

    blue.classList.remove('flashit');
  }, 3000);

  // INCREASE LEVELS AFTER EACH ITERATION
  level++;
}
