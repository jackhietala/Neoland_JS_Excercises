
const moreBtn = document.querySelector("#moreBtn");
//Recuperamos el botón de prev
const prevBtn = document.querySelector("#prevBtn");
//Por defecto prevBtn va a estar desactivado
prevBtn.disabled = true;

let pageNum = 1;

const getAmiibo = async () => {
  //Esta función asincrona recupera los datos de la URL
  const data = await fetch(
    `https://amiiboapi.com/api/amiibo?page=0&size=20`
  );
  //Los transforma en json page=0&size=100 `https://amiiboapi.com/api/amiibo?page=${pageNum}&limit=20`
  const json = await data.json();
  //Nos quedamos solo con el array droids
  const amiibo = json.amiibo;
  //Al terminar ejecuto la función mapDroids, a la que le pasamos droids
  mapAmiibo(amiibo);
};

const mapAmiibo = (amiibo) => {
  //Crear por cada uno de los droides un nuevo objeto
  const mappedAmiibos = amiibo.map((amiibo) => ({
    character: amiibo.character,
    image: amiibo.image,
    gameSeries: amiibo.gameSeries,
    release: amiibo.release.eu,
    jprelease: amiibo.release.jp
    
  }));

  //Le pasamos los droides mapeados a printDroids
  printAmiibos(mappedAmiibos);
};

const printAmiibos = (amiibos) => {
  //Recuperamos el div container que tenemos en html
  const container = document.querySelector("#container");
  //Limpiamos el contenedor
  container.innerHTML = "";
  //Recorremos los droides
  for (const amiibo of amiibos) {
    //Crea un figure vacio en JS
    const figure = document.createElement("figure");
    //Le metemos contenido interno al figure
    figure.innerHTML = `
    <h2>${amiibo.character}</h2>
    <img src=${amiibo.image} alt=${amiibo.name}/>
    <h3>Serie: ${amiibo.gameSeries}</h3>
    <p>Fecha lanzamiento: ${amiibo.release}</p>

    `;
    //Por cada uno de ellos le inyectamos a container el figure
    container.appendChild(figure);
  }
};

{/* <p>${amiibo.release.eu}</p>
<p>${amiibo.release.jp}</p> */}

getAmiibo();

//Le vamos a añadir un escuchador de eventos, que al hacer click vuelva a lanzar la función getDroids, pero como al final de getDroids se suma 1 a pageNum, va a recuperar los droides de la pagina siguiente

moreBtn.addEventListener("click", () => {
  //Le sumamos 1 a pageNum
  pageNum++;
  if (pageNum > 1) {
    prevBtn.disabled = false;
    getAmiibo();
  }
  if (pageNum >= 7) {
    moreBtn.disabled = true;
  }
});

prevBtn.addEventListener("click", () => {
  pageNum--;
  if (pageNum <= 1) {
    prevBtn.disabled = true;
    getAmiibo();
  } else {
    getAmiibo();
  }
});