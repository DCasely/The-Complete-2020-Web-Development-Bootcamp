const superheroes = require('superheroes');
const supervillains = require('supervillains');

const randomHero = superheroes.all.length;
const randomVillains = supervillains.all.length;
console.log(`${randomHero} Heroes`);
console.log(`${randomVillains} Villains`);
