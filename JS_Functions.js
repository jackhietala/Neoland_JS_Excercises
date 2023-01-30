// Iteración #1: Buscar el máximo
function sum(numberOne, numberTwo) {
  if (numberOne >= numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }

  //  Método alternativo:
  //  return Math.max(numberOne,numberTwo)
}

console.log(sum(10, 5));

// Iteración #2: Buscar la palabra más larga

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(avengers) {
  let word = "";
  for (const avenger of avengers) {
    
    if (word.length >= avenger.length) {
      continue;
    } else {
      word = avenger;
    }
  }
  return word;
}
console.log("El avenger con el nombre mas largo es " + findLongestWord(avengers))

// Iteración #3

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(param){
    sum = 0;
    for (const n of param) {
        sum += n;
    }
    return sum

    // Método alternativo
    //  return param.reduce((a, b) => a + b, 0);
}
console.log(sumNumbers(numbers));

// Iteración #4 Calcular el promedio

const numbersTwo = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
let avg = sumNumbers(param) / (param.length);
return avg;
}
console.log(average(numbersTwo))

// Iteración #5 Calcular el promedio

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let sum = 0
for (const item of (param)) {
    let n = (typeof(item)=="number") ? item : item.length;
    sum += n
}
return sum;
}
console.log(averageWord(mixedElements))

// Iteración #6 Eliminar duplicados
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    let uniques=[];
    for (const i of param) {
        if (uniques.indexOf(i) === -1) {uniques.push(i)}
    } return uniques;
 // comprobamos si el valor i está en el array, si no está (indexOf===-1), lo añadimos al nuevo array de únicos.
  }

console.log(removeDuplicates(duplicates))

// Iteración #7 Buscar posición

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(values, find) {
   let position = values.indexOf(find);
   if (position === -1) return false;
   else return position;
}
console.log(finderName(nameFinder, "pepito"))
console.log(finderName(nameFinder, "Bruce"))

// Iteración #8 Contar posiciones

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {

    

}
