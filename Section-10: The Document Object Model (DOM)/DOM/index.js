// alert('hello');

document.querySelector('h1').innerHTML = 'Good Bye';

// GETS ALL MATCHING ELEMENTS AND RETURNS AN ARRAY
console.log((document.getElementsByTagName('li')[2].style.color = 'red'));

console.log(document.getElementsByTagName('li').length);

console.log((document.getElementsByClassName('btn')[0].style.color = 'orange'));

// GETS THE SINGLE ID IN THE HTML ELEMENT
console.log((document.getElementById('title').innerHTML = 'YES'));

console.log((document.querySelector('ul').style.border = '1rem solid red'));

console.log((document.querySelector('#title').style.border = '1rem solid red'));

console.log((document.querySelector('li a').style.fontSize = '3rem'));

console.log(document.querySelector('li.item'));
console.log(document.querySelector('#list a'));

// RETURNS A LIST OF ALL MATCHING ELEMENTS
console.log(document.querySelectorAll('#list .item'));

// querySelector and querySelector provide the most flexibility and the most commonly used

// CHALLENGE

document.querySelector('#list a').style.color = 'red';
