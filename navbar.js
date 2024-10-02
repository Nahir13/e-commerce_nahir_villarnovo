let barra = [
    {
        texto: "Inicio",
        href: "/index.html"

    },
    {
        texto:"Productos",
        href: "/productos.html"
    },
    {
        texto:"Contacto",
        href:"#"
    }
];

 const header = document.querySelector("header");

 let menu = []

for (let info of barra){
    const carta = `<nav class="navbar bg-body-tertiary navbar-expand-lg">
  <div class="container-fluid">
    <div class="navbar-nav">
        <a class="navbar-brand" href="${info.href}" class="navbar-text">${info.texto}</a>
    </div>
  </div>
</nav>
      `;
      menu.push(carta);
}

header.innerHTML = menu.join("");
