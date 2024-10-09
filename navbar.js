let barra = [
  { texto: "Inicio", href: "/index.html" },
  { texto: "Productos", href: "/productos.html" },
  { texto: "Contacto", href: "/contact" },
];

const header = document.querySelector("header");
let menu = [];

for (let info of barra) {
  const carta = `
    <li class="nav-item">
      <a class="nav-link" href="${info.href}">${info.texto}</a>
    </li>
  `;
  menu.push(carta);
}

header.innerHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Leclerc</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          ${menu.join("")}
        </ul>
      </div>
    </div>
  </nav>
`;

