const data = [{
  id: 1,
  title: "McLaren Senna GTR",
  detail:
    "Utiliza una transmisión de carreras de doble embrague para cambios de marcha más rápidos, un sistema de suspensión revisado y slicks de carreras Pirelli",
  img: "https://www.carscoops.com/wp-content/uploads/2020/09/McLaren-Senna-GTR-LM-2.jpg",
  price: 1_250_000,
  stock: "Stock: 8",
  category: "mclaren",
},
{
  id: 2,
  title: "McLaren P1 News",
  detail:
    "Es un automóvil superdeportivo híbrido eléctrico enchufable de edición limitada",
  img: "https://cdn.motor1.com/images/mgl/vOwEq/s1/mclaren-p1-2017.jpg",
  price: 2_250_000,
  stock: "Stock: 4",
  category: "mclaren",
},
{
  id: 3,
  title: "McLaren Senna 2020",
  detail:
    "El Senna tiene un diseño de ruedas escalonado, con llantas de 19 pulgadas en la parte delantera y llantas de 20 pulgadas en la parte trasera.",
  img: "https://rmsothebys-cache.azureedge.net/5/6/5/0/6/7/565067a5560e3379aac81c260bdbf9481f9c9e2f.jpg",
  price: 4_850_000,
  stock: "Stock: 25",
  category: "mclaren",
},
{
  id: 4,
  title: "Mercedes-AMG S",
  detail:
    "Mercedes-AMG S con tecnología híbrida EQ | Consumo de energía combinado ponderado: 22,2-22,2 kWh/100 km más 4,6-4,6 l/100 km | Emisiones de CO₂ combinadas ponderadas: 104-104 g/km[3]",
  img: "https://tse2.mm.bing.net/th?id=OIP.EkbnlX_PFLTEfSyeByjP5gHaEK&pid=Api&P=0&h=180",
  price: 3_300_000,
  stock: "Stock: 24",
  category: "mercedes",
},
{
  id: 5,
  title: "Mercedes-AMG One",
  detail:
    "Es un automóvil superdeportivo cupé de dos puertas diédricas estrictamente biplaza,2​ con motor central-trasero montado longitudinalmente y de tracción total, híbrido eléctrico enchufable de producción con tecnología derivada de la Fórmula 1",
  img: "https://cdn.motor1.com/images/mgl/kJGq4/s1/mercedes-amg-one.jpg",
  price: 4_400_800,
  stock: "Stock: 18",
  category: "mercedes",
},
{
  id: 6,
  title: "Mercedes W14 F1",
  detail:
    "Es un automóvil de carreras de Fórmula Uno diseñado y construido por el equipo de Fórmula Uno Mercedes-AMG Petronas que compitió en el Campeonato Mundial de Fórmula Uno de 2023.",
  img: "https://tse4.mm.bing.net/th?id=OIP.r853wTG9ZKwIe9ORTUexRwHaEK&pid=Api&P=0&h=180",
  price: 6_600_000,
  stock: "Stock: 1",
  category: "mercedes",
},
{
  id: 7,
  title: "Ferrari 488 GTB",
  detail:
    "El nombre 488 GTB marca el retorno a la denominación de los modelos Ferrari clásicos: el 488 indica el cubicaje unitario de cada cilindro, mientras las siglas GTB hacen referencia a Gran Turismo Berlinetta.",
  img: "https://www.hdcarwallpapers.com/walls/2015_ferrari_488_gtb-wide.jpg",
  price: 850_000,
  stock: "Stock: 2",
  category: "ferrari",
},
{
  id: 8,
  title: "Ferrari 458 Italia Tunning",
  detail:
    "Es un automóvil superdeportivo de 2 puertas biplaza, con motor central-trasero montado longitudinalmente y tracción trasera",
  img: "http://3.bp.blogspot.com/-3H4SHnnuDNY/UlVkN7fVOaI/AAAAAAAA6_0/qcq1hcwFXgo/s00/Ferrari-458-Italia-mansory-tuning-1920x1080.jpg",
  price: 450_000,
  stock: "Stock: 19",
  category: "ferrari",
},
{
  id: 9,
  title: "Ferrari 125 S",
  detail:
    "Fue un automóvil de carreras de 1,5 litros construido en 1947 por el fabricante de automóviles Ferrari en Módena , Italia. Fue el primer vehículo de la empresa, del que solo se fabricaron dos.",
  img: "https://tse1.mm.bing.net/th?id=OIP.Uxjq5kfyjoBfM9xZBE9T6AHaEK&pid=Api&P=0&h=180",
  price: 950_000,
  stock: "Stock: 10",
  category: "ferrari",
},];


function filtroCards(cards) {
  const h1 = document.querySelector("h1");
  h1.innerText = "Productos";

  const container = document.querySelector("section");

  const cardHTML = cards.map((producto) => `<div class="card text-bg-dark d-flex align-items-center flex-column m-2" style="width: 18rem">
             <img class="imagen" src= "${producto.img}" alt=Imagen ${producto.id} width=55% >
                      <h5>${producto.title}</h5>
                      <p class="text-center">${producto.detail}</p>
                     <p>${producto.price}</p>
                     <p>${producto.stock}</p>
                    <a href="productos.html?prod=${producto.id}"><button type="button"  class="btn btn-danger hovnav boton">Ver más</button></a>
             </div>
        `).join("");
  container.innerHTML = cardHTML;
};
function sprint() {
  filtroCards(data);
};

sprint();

const buttonSearch = document.getElementById("search");
const buttonReset = document.getElementById("reset");
const input = document.getElementById("search-input");
const ul = document.getElementById("result-list");
const searchList = () => {
  const filterData = data.filter((producto) => producto.title.toLowerCase().includes(input.value.toLowerCase()));
  if (filterData.length > 0) {
    filtroCards(filterData);
  } else {
    document.querySelector("section").innerHTML = "<p>No se encontraron resultados</p>";
  }
};

const resetInput = () => {
  input.value = "";
  filtroCards(data);
};


const filterByCategory = (category) => {
  const filteredData = category === "todos" ? data : data.filter(producto => producto.category === category);
  filtroCards(filteredData);
};

buttonSearch.addEventListener("click", searchList);
buttonReset.addEventListener("click", resetInput);

const categoryButtons = document.querySelectorAll(".category-btn");
categoryButtons.forEach(button => {
  button.addEventListener("click", () =>
    filterByCategory(button.dataset.category));
});
//SPINNER
//MOSTRAR
function showSpinner() {
  document.getElementById('spinner').style.display = 'flex'
}
//OCULTAR
function hideSpinner() {
  document.getElementById('spinner').style.display = 'none'

}
function cargarDatos(){
  showSpinner()
//PROMESAS
const cargarDatosPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ok")
  }, 4000)
})
cargarDatosPromise.then(() => {
  hideSpinner()
}).catch(error => {
  hideSpinner()
});
}