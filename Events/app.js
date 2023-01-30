
// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click
const myButton = document.querySelector("#btnToClick")

myButton.addEventListener("click", (event) => {
    console.log(event);
  });

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focus = document.querySelector(".focus")
focus.addEventListener("focus", (event)=> {
    console.log(event.target.value);
  });


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const inputEV  = document.querySelector(".value")
inputEV.addEventListener("input", (ev) => console.log(ev.target.value));
