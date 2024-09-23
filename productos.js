class producto{
    constructor(titulo, detalle, precio, stock, imagen){
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}

const autos = document.querySelector("main");
const productos = [];


const nuevoProducto = new producto("Ferrari F8 Tributo", "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.", "250.000E", "Stock: 8", "http://media.architecturaldigest.com/photos/56269c5865d006e97f33dbe6/master/pass/ferrari-unveils-2016-f12tdf-01-new.jpg");
console.log(nuevoProducto)
         
const ferrari =  `<div class="card d-flex align-items-center text-center m-2 p-2" style="width: 18rem">
                     <h1 class="text-center">${nuevoProducto.titulo}</h1>
                     <img class="imagen" src= "${nuevoProducto.imagen}" alt="Imagen" width="55%">
                     <p class="text-center">${nuevoProducto.detalle}</p>
                     <strong>${nuevoProducto.precio}</strong>
                     <span>${nuevoProducto.stock}</span>
                    <a href="carrito.html" class="btn btn-primary">Agregar al carrito</a>
             </div>`;

        productos.push(ferrari);


autos.innerHTML = productos.join("");
