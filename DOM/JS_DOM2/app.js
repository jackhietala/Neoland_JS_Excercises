//Iteración 2

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

let newDiv = document.createElement('div');
newDiv.classList.add("iteracion2_1");
document.body.appendChild(newDiv)

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let newDiv2 = document.createElement('div');
newDiv2.classList.add("iteracion2_2");
let newP = document.createElement('p')
newDiv2.appendChild(newP)
document.body.appendChild(newDiv2)

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let newDiv3 = document.createElement('div');
newDiv3.classList.add("iteracion2_3");
for (let index = 0; index < 6; index++) {
    let newP = document.createElement('p')
    newP.classList.add(`parrafo${index+1}`);
    newDiv3.appendChild(newP)
}
document.body.appendChild(newDiv3)


// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.


let newP4 = document.createElement('p')
let textP4 = document.createTextNode('Soy dinámico!')
newP4.classList.add("iteracion2_4");
newP4.appendChild(textP4)
document.body.appendChild(newP4)

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let h2 = document.querySelector('h2.fn-insert-here')
let textH2 =document.createTextNode('Wubba Lubba dub dub')
h2.appendChild(textH2)

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let list = document.createElement('ul')
for (const app of apps) {
    let li = document.createElement('li');
    let livalue = document.createTextNode(app)
    li.appendChild(livalue)
    list.appendChild(li)
}
document.body.appendChild(list)

//manera 2

// let listHtml = '<ul>';
// for (const app of apps) {
//     listHtml += `<li>${app}</li>`
// }
// listHtml +='</ul>'
// let newDiv6 = document.createElement('div');
// newDiv6.innerHTML = listHtml;
// document.body.appendChild(newDiv6);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

 let removeClass = document.querySelectorAll('.fn-remove-me')
for (const i of removeClass) {
     i.remove()
 }

// método 2
// document.querySelectorAll(".fn-remove-me").forEach(e => e.remove());


// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const middleDiv = document.querySelector('div');
middleDiv.insertAdjacentHTML(
   "afterbegin",
  `<p>Voy en medio!</p>`
 );

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const insertDiv = document.querySelectorAll('div.fn-insert-here').forEach(e => e.innerHTML = '<p>Voy dentro!</p>');

// console.log(insertDiv);
// for (const d of insertDiv) {
//     d.innerHTML = '<p>Voy dentro!</p>';
// }