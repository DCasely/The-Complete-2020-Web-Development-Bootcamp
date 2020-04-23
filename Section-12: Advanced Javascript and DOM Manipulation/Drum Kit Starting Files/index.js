let drums = document.querySelectorAll('.drum');

drums.forEach((drum) =>
  drum.addEventListener('click', function () {
    alert('I was clicked');
  })
);
