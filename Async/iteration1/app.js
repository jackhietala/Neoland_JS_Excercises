// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un
// console.log(). Para ello, es necesario que crees un .html y un .js.

fetch("https://api.agify.io?name=michael")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log("Error");
  });

//   1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.

const baseUrl = "https://api.nationalize.io";

const button_1 = document.querySelector("button");

const getName = async () => {
  const respuesta = await fetch(`${baseUrl}?name=${input.value}`);
  const datos = await respuesta.json();
  console.log(datos);
  showInfo(data.country, data.name);
};

//  1.3 En base al ejercicio anterior. Crea dinamicamente un elemento por cada petición
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET.

const printName = (countries, name) => {
  for (const country of countries) {
    const div = document.createElement("div");
    const p = document.createElement("p");

    p.textContent = `El ${name} tiene una probabilidad de ${country.probability} de ser de ${country.country_id}`;

    div.appendChild("p");

    //  1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno
    //  de los p que hayas insertado y que si el usuario hace click en este botón
    //  eliminemos el parrafo asociado.

    const button = document.createElement("button");
    button.innerHTML = "BORRAR";
    button.addEventListener("click", () => div.remove());
    div.appendChild(button);

    document.body.appendChild(div);
  }
};

const button = document.querySelector("button");
button.addEventListener("click", () => getName());
