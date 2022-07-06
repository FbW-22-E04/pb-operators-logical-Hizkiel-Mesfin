const isDogBetter = true;
const isCatBetter = false;

//#1
//a

console.log(isDogBetter && isCatBetter);

//b

console.log(isDogBetter || isCatBetter);

//c

console.log(!(isDogBetter && isCatBetter));

//2

const atoms = 23;
const sandGrains = 19;
const starsInSky = 232;

//#3
//a
console.log(atoms > starsInSky && atoms > sandGrains);

//b
console.log(atoms !== sandGrains);

//c
console.log(starsInSky < sandGrains || starsInSky > atoms);

//d
console.log(atoms === starsInSky || atoms !== sandGrains);

//e
console.log(atoms * starsInSky < 100 || atoms * sandGrains > 100);

//4
// Well, each result follows either the &&, || or the ! logical operators considering the boolean. Every of the above expressions return a boolean value and the logical operators compare this values as per their rule.
