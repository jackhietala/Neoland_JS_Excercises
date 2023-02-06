import './style.css'



const COLOR_PALETTE = {
  '#ffa500': 'Orange',
  '#89CFF0': 'Baby Blue',
  '#008000': 'Green',
  // '#9dd9d2': 'Middle Blue Green',
  // '#392f5a': 'Space Cadet'
}


const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option);
  });
};

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  const colorName = document.querySelector("#color-name");
  colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;
    document.body.style.backgroundColor = newColor;
    //Le asignamos a nuestro h2 el valor de la clave que hay almacenada en newColor al igual que hemos hecho en la primera función
    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}` 
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";
  });


  if (colorName == "Orange") {
    let img1 = document.createElement('img');
img1.src = "https://images.wikidexcdn.net/mwuploads/wikidex/5/56/latest/20200307023245/Charmander.png";
document.body.appendChild(img1)
} else if (COLOR_PALETTE ){
  let img2 = document.createElement('img');
img2.src = "https://images.wikidexcdn.net/mwuploads/wikidex/5/56/latest/20200307023245/Charmander.png";
document.body.appendChild(img2)
} else {
  let img3 = document.createElement('img');
img3.src = "https://images.wikidexcdn.net/mwuploads/wikidex/4/43/latest/20190406170624/Bulbasaur.png";
document.body.appendChild(img3)}


};




addOptionsToColorPicker();
addEventListenerToColorPicker();