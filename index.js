const data = [{
  id: 1,
  title: "McLaren Senna GTR",
  detail:
    "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
  img: "https://www.carscoops.com/wp-content/uploads/2020/09/McLaren-Senna-GTR-LM-2.jpg",
  price: 250_000,
  stock: 8,
  category: "mclaren",
},
{
  id: 2,
  title: "McLaren P1 News",
  detail:
    "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
  img: "https://cdn.motor1.com/images/mgl/vOwEq/s1/mclaren-p1-2017.jpg",
  price: 250_000,
  stock: 8,
  category: "mclaren",
},
{
  id: 3,
  title: "McLaren Senna 2020",
  detail:
    "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
  img: "https://rmsothebys-cache.azureedge.net/5/6/5/0/6/7/565067a5560e3379aac81c260bdbf9481f9c9e2f.jpg",
  price: 250_000,
  stock: 8,
  category: "mclaren",
},
{
  id: 4,
  title: "Mercedes-AMG S",
  detail:
    "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
  img: "https://tse2.mm.bing.net/th?id=OIP.EkbnlX_PFLTEfSyeByjP5gHaEK&pid=Api&P=0&h=180",
  price: 250_000,
  stock: 8,
  category: "mercedes",
},
{
  id: 5,
  title: "Mercedes-AMG One",
  detail:
    "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
  img: "https://cdn.motor1.com/images/mgl/kJGq4/s1/mercedes-amg-one.jpg",
  price: 250_000,
  stock: 8,
  category: "mercedes",
},
{
  id: 6,
  title: "Mercedes W14 F1",
  detail:
    "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
  img: "https://tse4.mm.bing.net/th?id=OIP.r853wTG9ZKwIe9ORTUexRwHaEK&pid=Api&P=0&h=180",
  price: 250_000,
  stock: 8,
  category: "mercedes",
},
{
  id: 7,
  title: "Ferrari 250 GTO 1962",
  detail:
    "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
  img: "https://media.revistagq.com/photos/655609fa4aab4dd59aa03aee/16:9/w_1280,c_limit/https___hypebeast.com_image_2023_11_RM-Sothebys-Sells-1962-Ferrari-for-51.7-Million-USD-2.jpg",
  price: 850_000,
  stock: 8,
  category: "ferrari",
},
{
  id: 8,
  title: "Ferrari Tunning",
  detail:
    "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
  img: "http://3.bp.blogspot.com/-3H4SHnnuDNY/UlVkN7fVOaI/AAAAAAAA6_0/qcq1hcwFXgo/s00/Ferrari-458-Italia-mansory-tuning-1920x1080.jpg",
  price: 450_000,
  stock: 8,
  category: "ferrari",
},
{
  id: 9,
  title: "Ferrari 125 S",
  detail:
    "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
  img: "https://tse1.mm.bing.net/th?id=OIP.Uxjq5kfyjoBfM9xZBE9T6AHaEK&pid=Api&P=0&h=180",
  price: 950_000,
  stock: 8,
  category: "ferrari",
},];


function renderCards(cards) {
  const h1 = document.querySelector("h1");
  h1.innerText = "Productos";

  const container = document.querySelector("section");

  const cardHTML = cards.map((producto) => `<div class="card text-bg-dark d-flex align-items-center flex-column m-2" style="width: 18rem">
             <img class="imagen" src= "${producto.img}" alt=Imagen ${producto.id} width=55% >
                      <h5>${producto.title}</h5>
                      <p class="text-center">${producto.detail}</p>
                     <p>${producto.price}</p>
                     <p>${producto.stock}</p>
                    <a href="productos.html?prod=${producto.id}" class="btn btn-danger hovnav boton">Ver más</a>
             </div>
        `).join("");
  container.innerHTML = cardHTML;
};
function sprint() {
  renderCards(data);
};

sprint();

const buttonSearch = document.getElementById("search");
const buttonReset = document.getElementById("reset");
const input = document.getElementById("search-input");
const ul = document.getElementById("result-list");
const searchList = () => {
  const filterData = data.filter((producto) => producto.title.toLowerCase().includes(input.value.toLowerCase()));
  if (filterData.length > 0) {
    renderCards(filterData);
  } else {
    document.querySelector("section").innerHTML = "<p>No se encontraron resultados</p>";
  }
};

const resetInput = () => {
  input.value = "";
  renderCards(data);
};


const filterByCategory = (category) => {
  const filteredData = category === "todos"?data: data.filter(producto => producto.category === category);
  renderCards(filteredData);
};

buttonSearch.addEventListener("click", searchList);
buttonReset.addEventListener("click", resetInput);

const categoryButtons = document.querySelectorAll(".category-btn");
categoryButtons.forEach(button => {
  button.addEventListener("click", () =>
  filterByCategory(button.dataset.category));
});


