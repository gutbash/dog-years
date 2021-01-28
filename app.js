// a human age
const myAge = 18;
// the first two years of a dog's life
let earlyYears = 2;
earlyYears = earlyYears * 10.5;
// subtracting 2 from myAge since the first two years have already been accounted for
let laterYears = myAge - 2;
laterYears *= 4;
// age in dog years calculated, combining early and later year calculations
myAgeInDogYears = earlyYears + laterYears;
// a name that is converted to all lowercase
let myName = 'Sebastian'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
