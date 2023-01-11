// Iteración #1: Variables
let myFavoriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y;

// Iteración #2: Variables avanzadas

// 1.1 
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;

// 1.2 

const firstName = 'Jon'; 
const lastName = 'Snow'; 
const age = 24; 
const quote = `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`

console.log(quote)

// 1.3

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
const suma = toy1.price + toy2.price;

console.log(suma)

// 1.4

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice = 25000;
car1.finalPrice = car1.finalPrice + globalBasePrice;
car2.finalPrice = car2.finalPrice + globalBasePrice;

console.log(car1.finalPrice)
console.log(car2.finalPrice)

// Iteración #3: Operadores

// 1.1

let operacion1 = 10 * 5;
console.log(operacion1)

//1.2

let operacion2 = 10 / 2;
console.log(operacion2)

//1.3
let operacion3 = 15 % 9;
console.log(operacion3)

//1.4

let p = 10;
let j = 5;
let o = p + j;
console.log(o)

//1.5

let c = 10;
let m = 5;
let i = c * m;
console.log(i)

// Iteración #4: Arrays

// 1.1

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const avenger = avengers[0];
console.log(avenger)

//1.2

const avengers_1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers_1.splice(0, 1, "IRONMAN");
console.log(avengers_1);

//1.3

const avengers_2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers_2.length)

//1.4 

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push('Morty', 'Summer')
console.log(rickAndMortyCharacters[4])

// Iteración #5: Condicionales

//1.1

const number1 = 10;
const number2 = 20;
const number3 = 2;

if ( number2 / number1){
    console.log("number2 dividido entre number1 es igual a 2");
  }

if (number1 !== number2) {
    console.log("number1 es estrictamente distinto a number2");
  }

if (number3 != number1) {
    console.log("number3 es distinto number1");
  }
  
  if (number3 * 5 == number1 ) {
    console.log("number3 por 5 es igual a number1");
  }
  
  if (number3 * 5 == number1 && number1 * 2 == number2) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
  }
  
  if (number2 / 2 == number1 || number1 / 5 == number3) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
  }

  
  // Iteración #6: Bucles

  // 1.1

  for (let i = 1; i<=9; i++){
    console.log(i);
  }

  // 1.2

  for (let i = 0; i <= 9; i++) {
    if (i % 2 == 0) {
      console.log(i);
  }}

  // 1.3

  for (let i = 1; i <= 10; i++) {
    if (i < 10) {
      console.log("Intentando dormir 🐑");
    } 
     else {
      console.log("Dormido!");
    }
  }
