// ALL DRUMS
let drums = document.querySelectorAll('.drum');

// for (var i = 0; i < drums.length; i++) {
//   drums[i].addEventListener('click', function () {
//     this.style.color = '#fff';
//   });
// }

// AUDIOS
let tom1Audio = new Audio('./sounds/tom-1.mp3');
let tom2Audio = new Audio('./sounds/tom-2.mp3');
let tom3Audio = new Audio('./sounds/tom-3.mp3');
let tom4Audio = new Audio('./sounds/tom-4.mp3');
let snareAudio = new Audio('./sounds/snare.mp3');
let crashAudio = new Audio('./sounds/crash.mp3');
let kickBassAudio = new Audio('./sounds/kick-bass.mp3');

// PLAY AUDIO ON CLICK
drums.forEach((drum) =>
  drum.addEventListener('click', () => {
    playAudio(drum.innerHTML);
    buttonAnimation(drum.innerHTML);
  })
);

// PLAY AUDIO ON KEYDOWN
document.addEventListener('keydown', (e) => {
  playAudio(e.key);
  buttonAnimation(e.key);
});

// PLAY AUDIO FUNCTION
function playAudio(e) {
  switch (e) {
    case 'w':
      tom1Audio.play();
      break;

    case 'a':
      tom2Audio.play();
      break;

    case 's':
      tom3Audio.play();
      break;

    case 'd':
      tom4Audio.play();
      break;

    case 'j':
      snareAudio.play();
      break;

    case 'k':
      crashAudio.play();
      break;

    case 'l':
      kickBassAudio.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

// BUTTON ANIMATION
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector(`.${currentKey}`);

  activeButton.classList.add('pressed');

  setTimeout(function () {
    activeButton.classList.remove('pressed');
  }, 100);
}

// document.addEventListener('keydown', function () {
//     let buttonInnerHTML = this.innerHTML;

//     switch (buttonInnerHTML) {
//       case 'w':
//         tom1Audio.play();
//         break;

//       case 'a':
//         tom2Audio.play();
//         break;

//       case 's':
//         tom3Audio.play();
//         break;

//       case 'd':
//         tom4Audio.play();
//         break;

//       case 'j':
//         snareAudio.play();
//         break;

//       case 'k':
//         crashAudio.play();
//         break;

//       case 'l':
//         kickBassAudio.play();
//         break;

//       default:
//         console.log(buttonInnerHTML);
//         break;
//     }
//   })
// );

// // AUDIO OBJECTS
// let audios = {
//   tom1Audio: new Audio('./sounds/tom-1.mp3'),
//   tom2Audio: new Audio('./sounds/tom-2.mp3'),
//   tom3Audio: new Audio('./sounds/tom-3.mp3'),
//   tom4Audio: new Audio('./sounds/tom-4.mp3'),
//   snareAudio: new Audio('./sounds/snare.mp3'),
//   crashAudio: new Audio('./sounds/crash.mp3'),
//   kickBassAudio: new Audio('./sounds/kick-bass.mp3'),
// };

// // EVENT LISTENERS FOR CORRESPONDING SOUNDS
// let tom1 = document
//   .querySelector('.w')
//   .addEventListener('click', playTom1Audio);

// let tom2 = document
//   .querySelector('.a')
//   .addEventListener('click', playTom2Audio);

// let tom3 = document
//   .querySelector('.s')
//   .addEventListener('click', playTom3Audio);

// let tom4 = document
//   .querySelector('.d')
//   .addEventListener('click', playTom4Audio);

// let snare = document
//   .querySelector('.j')
//   .addEventListener('click', playSnareAudio);

// let crash = document
//   .querySelector('.k')
//   .addEventListener('click', playCrashAudio);

// let kickBass = document
//   .querySelector('.l')
//   .addEventListener('click', playKickBassAudio);

// // AUDIO FUNCTIONS
// function playTom1Audio() {
//   tom1Audio.play();
// }
// function playTom2Audio() {
//   tom2Audio.play();
// }
// function playTom3Audio() {
//   tom3Audio.play();
// }
// function playTom4Audio() {
//   tom4Audio.play();
// }
// function playSnareAudio() {
//   snareAudio.play();
// }
// function playCrashAudio() {
//   crashAudio.play();
// }
// function playKickBassAudio() {
//   kickBassAudio.play();
// }

// =========================================

// CALCULATOR FUNCTIONS
// function add(num1, num2) {
//   return num1 + num2;
// }

// function subtract(num1, num2) {
//   return num1 - num2;
// }

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function divide(num1, num2) {
//   return num1 / num2;
// }

// function calculator(num1, num2, operator) {
//   return operator(num1, num2);
// }

// PRACTICE - HOUSEKEEPER

// // CONSTRUCTOR FUNCTION
// function HouseKeeper(name, age, experience, languages) {
//   this.name = name;
//   this.age = age;
//   this.experience = experience;
//   this.languages = languages;
//   this.clean = function () {
//     alert('Cleaning in progress');
//   };
// }

// // INITIALIZE A HOUSEKEEPER
// let houseKeeper1 = new HouseKeeper('Jacky', 45, false, 'english');

// let housekeeper = {
//   name: 'Kimberly',
//   age: '27',
//   experience: true,
//   languages: ['english', 'spanish'],
// };
