// Iteración #1: Interacción con el DOM

// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const show = document.querySelector(".showme");
console.log(show);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const h1id = document.querySelector('h1, #pillado')
console.log(h1id)

// 1.3 Usa querySelector para mostrar por consola todos los p

const todop = document.querySelectorAll("p")
console.log(todop)

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const pokemon = document.querySelectorAll('.pokemon')
console.log(pokemon)

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe".

const a = document.querySelectorAll('[data-function="testMe"]');
console.log(a)

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo  data-function="testMe".

const b = document.querySelectorAll('[data-function="testMe"]');
console.log(b[2])