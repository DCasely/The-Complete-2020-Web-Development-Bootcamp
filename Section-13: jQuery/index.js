// for (let i = 0; i < 5; i++) {
//   document.querySelectorAll('button')[i].addEventListener('click', () => {
//     document.querySelector('h1').style.color = 'purple';
//   });
// }

// $('button').click(function () {
//   $('h1').css('color', 'purple');
// });

// $('input').keypress(function (e) {
//   $('h1').text(e.key);
// });

// $('h1').on('mouseover', () => {
//   $('h1').css('color', 'red');
// });

// $('h1').before('<button>New</button>');
// $('h1').after('<button>New</button>');
// $('h1').prepend('<button>New</button>');
// $('h1').append('<button>New</button>');
// $('button').remove();

$('button').on('click', function () {
  $('h1').animate({ opacity: 0.5 });
});
