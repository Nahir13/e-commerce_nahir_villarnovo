const data = [{
  id: 1,
  title: "McLaren Senna GTR",
  detail:
    "Utiliza una transmisión de carreras de doble embrague para cambios de marcha más rápidos, un sistema de suspensión revisado y slicks de carreras Pirelli",
  img: "https://www.carscoops.com/wp-content/uploads/2020/09/McLaren-Senna-GTR-LM-2.jpg",
  price: 250_000,
  stock: "Stock: 8",
  category: "mclaren",
},
{
  id: 2,
  title: "McLaren P1 News",
  detail:
    "Es un automóvil superdeportivo híbrido eléctrico enchufable de edición limitada",
  img: "https://cdn.motor1.com/images/mgl/vOwEq/s1/mclaren-p1-2017.jpg",
  price: 250_000,
  stock: "Stock: 4",
  category: "mclaren",
},
{
  id: 3,
  title: "McLaren Senna 2020",
  detail:
    "El Senna tiene un diseño de ruedas escalonado, con llantas de 19 pulgadas en la parte delantera y llantas de 20 pulgadas en la parte trasera.",
  img: "https://rmsothebys-cache.azureedge.net/5/6/5/0/6/7/565067a5560e3379aac81c260bdbf9481f9c9e2f.jpg",
  price: 250_000,
  stock: "Stock: 25",
  category: "mclaren",
},
{
  id: 4,
  title: "Mercedes-AMG S",
  detail:
    "Mercedes-AMG S con tecnología híbrida EQ | Consumo de energía combinado ponderado: 22,2-22,2 kWh/100 km más 4,6-4,6 l/100 km | Emisiones de CO₂ combinadas ponderadas: 104-104 g/km[3]",
  img: "https://tse2.mm.bing.net/th?id=OIP.EkbnlX_PFLTEfSyeByjP5gHaEK&pid=Api&P=0&h=180",
  price: 250_000,
  stock: "Stock: 24",
  category: "mercedes",
},
{
  id: 5,
  title: "Mercedes-AMG One",
  detail:
    "Es un automóvil superdeportivo cupé de dos puertas diédricas estrictamente biplaza,2​ con motor central-trasero montado longitudinalmente y de tracción total, híbrido eléctrico enchufable de producción con tecnología derivada de la Fórmula 1",
  img: "https://cdn.motor1.com/images/mgl/kJGq4/s1/mercedes-amg-one.jpg",
  price: 250_000,
  stock: "Stock: 18",
  category: "mercedes",
},
{
  id: 6,
  title: "Mercedes W14 F1",
  detail:
    "Es un automóvil de carreras de Fórmula Uno diseñado y construido por el equipo de Fórmula Uno Mercedes-AMG Petronas que compitió en el Campeonato Mundial de Fórmula Uno de 2023.",
  img: "https://tse4.mm.bing.net/th?id=OIP.r853wTG9ZKwIe9ORTUexRwHaEK&pid=Api&P=0&h=180",
  price: 250_000,
  stock: "Stock: 1",
  category: "mercedes",
},
{
  id: 7,
  title: "Ferrari 250 GTO 1962",
  detail:
    "Es un automóvil deportivo y de competición construido por Ferrari entre los años 1962 y 1964; es considerado como uno de los mejores automóviles de alto rendimiento construido y actualmente (2021), el más caro del mundo.",
  img: "https://media.revistagq.com/photos/655609fa4aab4dd59aa03aee/16:9/w_1280,c_limit/https___hypebeast.com_image_2023_11_RM-Sothebys-Sells-1962-Ferrari-for-51.7-Million-USD-2.jpg",
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
  stock: "Stock: 10",
  category: "ferrari",
},
{
  id: 9,
  title: "Ferrari 125 S",
  detail:
    "Fue un automóvil de carreras de 1,5 litros construido en 1947 por el fabricante de automóviles Ferrari en Módena , Italia. Fue el primer vehículo de la empresa, del que solo se fabricaron dos.",
  img: "https://tse1.mm.bing.net/th?id=OIP.Uxjq5kfyjoBfM9xZBE9T6AHaEK&pid=Api&P=0&h=180",
  price: 950_000,
  stock: "Stock: 0",
  category: "ferrari",
},];

const autos = document.querySelector("main");
const cart = JSON.parse(localStorage.getItem("cart")) || [];

/*const productos = data.map((producto) =>
    `<div class="card mb-3 text-bg-dark d-flex justify-content-center">
      <div class="row g-0">
        <div class="col-md-6">
          <img class="imagen" src= "${producto.img}" alt="Imagen ${producto.id}" width=100% >
        </div>
        <div class="col-md-6 text-center align-items-center">
          <div class="card-body">
            <h5 class="card-title">${producto.title}</h5>
            <p class="card-text">${producto.detail}</p>
            <p class="card-text">Precio: ${producto.price}</p>
            <p class="card-text">${producto.stock}</p>
          </div>
        </div>
    ${localStorage.getItem("email") ?
      `<div class="input-group">
          <button class="btn btn-outline-secondary mr-3" type="button" onclick="increaseItem(${producto.id})">+</button>
          <input type="number" id="cantidad-${producto.id}" class="form-control" value="1" min="1" max="${parseInt(producto.stock.split(': ')[1])}" onchange="updateQuantity(${producto.id})"></input>
          <button class="btn btn-outline-secondary ml-3" type="button" onclick="decreaseItem(${producto.id})">-</button>
          <a href="#" class="enlace"><button type="button" class="btn btn-danger hovnav boton mx-2" onclick="addItems(${producto.id})">Agregar al Carrito</button></a>
        </div>`
      :
      `<a href="login.html" class="enlace mx-4"><button type="button" class="btn btn-danger hovnav boton mx-4">Iniciar Sesión</a>`
    } 
    </div>
    </div>`
);
autos.innerHTML = productos.join("");*/

//Prueba de muestra de id
function setProductId(id){
  localStorage.setItem("selectedProductId", id)
}

const selectedProductId = localStorage.getItem("selectedProductId")

const productos = data.find(p => p.id === selectedProductId)

if (producto) {
  `<div class="card mb-3 text-bg-dark d-flex justify-content-center">
      <div class="row g-0">
        <div class="col-md-6">
          <img class="imagen" src= "${producto.img}" alt="Imagen ${producto.id}" width=100% >
        </div>
        <div class="col-md-6 text-center align-items-center">
          <div class="card-body">
            <h5 class="card-title">${producto.title}</h5>
            <p class="card-text">${producto.detail}</p>
            <p class="card-text">Precio: ${producto.price}</p>
            <p class="card-text">${producto.stock}</p>
          </div>
        </div>
    ${localStorage.getItem("email") ?
      `<div class="input-group">
          <button class="btn btn-outline-secondary mr-3" type="button" onclick="increaseItem(${producto.id})">+</button>
          <input type="number" id="cantidad-${producto.id}" class="form-control" value="1" min="1" max="${parseInt(producto.stock.split(': ')[1])}" onchange="updateQuantity(${producto.id})"></input>
          <button class="btn btn-outline-secondary ml-3" type="button" onclick="decreaseItem(${producto.id})">-</button>
          <a href="#" class="enlace"><button type="button" class="btn btn-danger hovnav boton mx-2" onclick="addItems(${producto.id})">Agregar al Carrito</button></a>
        </div>`
      :
      `<a href="login.html" class="enlace mx-4"><button type="button" class="btn btn-danger hovnav boton mx-4">Iniciar Sesión</a>`
    } 
    </div>
    </div>`
  document.getElementById('product-detail').innerHTML = detail.HTML;

} else {
  document.getElementById('product-detail').innerHTML = `<p>Producto no encontrado</p>`
}

//Funcion para incrementar
function increaseItem(id) {
  const input = document.getElementById(`cantidad-${id}`);
  const maxStock = parseInt(data.find(p => p.id === id).stock.split(': ')[1]);

  if (input.value < maxStock) {
    input.value = parseInt(input.value) + 1;
  }
};

function decreaseItem(id) {
  const input = document.getElementById(`cantidad-${id}`);

  if (input.value > 1) {
    input.value = parseInt(input.value) - 1;
  }
}
function addItems(id) {


  const input = document.getElementById(`cantidad-${id}`);
  const cantidad = parseInt(input.value);
  const producto = data.find(p => p.id === id);

  if (cantidad < 1) return;

  const existingProduct = cart.find(item => item.id === id);

  if (existingProduct) {
    existingProduct.quantity += cantidad;
  } else {
    cart.push({ ...producto, quantity: cantidad });
  }

  Swal.fire({
    text: '¿Está seguro de agregar el producto al carrito?',
    confirmButtonText: 'Si',
    cancelButtonText: 'No',
    showCancelButton: true,
    showCloseButton: true,
    confirmButtonColor: '#ab2415',
    cancelButtonColor: '#24262b',
  }).then(result => {
    if (result.isConfirmed) {
      add()
    }
  })

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartQuantity();
}

function updateCartQuantity() {
  let quantity = cart.reduce((acumulado, actual) => acumulado + actual.quantity, 0)
  localStorage.setItem("quantity", quantity)
  const quantityTag = document.querySelector("#quantity")
  if (quantityTag) {
    quantityTag.innerText = quantity

  }
};
updateCartQuantity();