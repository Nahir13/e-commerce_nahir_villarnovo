let barra = [
  { text: "Inicio", href: "/index.html" , icon: "fas fa-home"},
  { text: "Productos", href: "/productos.html", icon: "fa-solid fa-car-side"},
  { text: "Contacto", href: "/contact", icon: "fas fa-phone" },
];

const header = document.querySelector("header");
let menu = [];

for (let info of barra) {
  const carta = `
    <li class="nav-item hovnav">
      <a class="nav-link hovnav" href="${info.href}">
      <i class="${info.icon} hovnav"></i>
      </a>
    </li>
    
  `;
  menu.push(carta);
}

header.innerHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary colo">
    <div class="container-fluid">
      <a class="navbar-brand hovnav" href="index.html">Racing</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          ${menu.join("")}
        </ul>
        <li class="nav-item dropdown" style="list-style: none;">
            <button type="button" class="btn dropdown-toggle hovnav" data-bs-toggle="dropdown" aria-expanded="false">
                Marcas
            </button>
            <div id="category-buttons" class="d-grid gap-2 col-6 mx-auto">
                <ul class="dropdown-menu">
                    <button class="btn btn-primary category-btn dropdown-item" data-category="todos">Ver todos</button>
                    <button class="btn btn-primary category-btn dropdown-item" data-category="mclaren">McLaren</button>
                    <button class="btn btn-primary category-btn dropdown-item"
                        data-category="mercedes">Mercedes</button>
                    <button class="btn btn-primary category-btn dropdown-item" data-category="ferrari">Ferrari</button>
                </ul>
            </div>
        </li>
      </div>
       <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar" id="search-input">
            <button class="btn btn-outline-danger" type="button" id="search"><i class="fa-solid fa-magnifying-glass"></i></button>
            <button class="btn btn-outline-danger" type="button" id="reset"><i class="fa-solid fa-x"></i></button>
        </form>
        <ul>
        ${localStorage.getItem("email")
    ? `<li class="text-white">Hola, ${localStorage.getItem("email")}</li><span>|</span>
    <a  href="carrito.html"><span class="material-symbols-outlined">shopping_cart</span></a>
    <b id="quantity">${localStorage.getItem("quantity") || 0}</b> <button class="btn btn-outline-danger ms-4" onclick="cerrarSesion()"><i class="fa-solid fa-right-from-bracket"></i></button>` : `<a href="./login.html" class="btn btn-outline-danger mt-3" type="button">Iniciar sesión</a>`
  }</ul >
    </div >
  </nav >
  `;

function cerrarSesion() {
  localStorage.clear()
  location.href = "./index.html"
}