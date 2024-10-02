function sprint() {

   const h1 = document.querySelector("h1");
   h1.innerText = "Productos";



   const data = [{
      id: 1,
      title: "Ferrari F8 Tributo",
      detail: "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
      img: "http://media.architecturaldigest.com/photos/56269c5865d006e97f33dbe6/master/pass/ferrari-unveils-2016-f12tdf-01-new.jpg",
      price: 250.000,
      stock: 8
    }, {
      id: 2,
      title: "Ferrari F8 Tributo",
      detail: "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
      img: "http://media.architecturaldigest.com/photos/56269c5865d006e97f33dbe6/master/pass/ferrari-unveils-2016-f12tdf-01-new.jpg",
      price: 250.000,
      stock: 8
    }, {
      id: 3,
      title: "Ferrari F8 Tributo",
      detail: "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
      img: "http://media.architecturaldigest.com/photos/56269c5865d006e97f33dbe6/master/pass/ferrari-unveils-2016-f12tdf-01-new.jpg",
      price: 250.000,
      stock: 8
    }, {
      id: 4,
      title: "Ferrari F8 Tributo",
      detail: "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
      img: "http://media.architecturaldigest.com/photos/56269c5865d006e97f33dbe6/master/pass/ferrari-unveils-2016-f12tdf-01-new.jpg",
      price: 250.000,
      stock: 8
    }, {
      id: 5,
      title: "Ferrari F8 Tributo",
      detail: "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
      img: "http://media.architecturaldigest.com/photos/56269c5865d006e97f33dbe6/master/pass/ferrari-unveils-2016-f12tdf-01-new.jpg",
      price: 250.000,
      stock: 8
    }, {
      id: 6,
      title: "Ferrari F8 Tributo",
      detail: "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
      img: "http://media.architecturaldigest.com/photos/56269c5865d006e97f33dbe6/master/pass/ferrari-unveils-2016-f12tdf-01-new.jpg",
      price: 250.000,
      stock: 8
    }, {
      id: 7,
      title: "Ferrari F8 Tributo",
      detail: "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
      img: "http://media.architecturaldigest.com/photos/56269c5865d006e97f33dbe6/master/pass/ferrari-unveils-2016-f12tdf-01-new.jpg",
      price: 250.000,
      stock: 8
    }, {
      id: 8,
      title: "Ferrari F8 Tributo",
      detail: "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
      img: "http://media.architecturaldigest.com/photos/56269c5865d006e97f33dbe6/master/pass/ferrari-unveils-2016-f12tdf-01-new.jpg",
      price: 250.000,
      stock: 8
    }, {
      id: 9,
      title: "Ferrari F8 Tributo",
      detail: "Con su motor V8 biturbo y su diseño aerodinámico, la F8 Tributo es una verdadera joya de la ingeniería automotriz.",
      img: "http://media.architecturaldigest.com/photos/56269c5865d006e97f33dbe6/master/pass/ferrari-unveils-2016-f12tdf-01-new.jpg",
      price: 250.000,
      stock: 8
    }];

   const container = document.querySelector("section");

   const cards = data.map((producto) => `<div class="card d-flex align-items-center flex-column m-2" style="width: 18rem">
             <img class="imagen" src= "${producto.img}" alt=Imagen ${producto.id} width=55% >
                     <h5>${producto.title}</h5>
                     <p class="text-center">${producto.detail}</p>
                     <p>${producto.price}</p>
                     <p>${producto.stock}</p>
                    <a href="productos.html?prod=${producto.id}" class="btn btn-primary">Ver más</a>
             </div>
         </div>
         `);
   container.innerHTML = cards.join("");

};

sprint()