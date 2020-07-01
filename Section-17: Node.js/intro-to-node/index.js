const superheroes = require('superheroes');
const supervillains = require('supervillains');

const superHero = superheroes.random();
const superVillain = supervillains.random();

console.log(`This is a Hero: ${superHero}.`);
console.log(`This is a Villain: ${superVillain}`);
