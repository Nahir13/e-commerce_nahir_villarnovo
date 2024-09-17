function sprint(){

const h1 = document.querySelector("h1");
h1.innerText = "Productos";


const container = document.querySelector("section");
const cards = [];

 for (let i = 1; i < 10; i++) {
    const card = `<div class="card d-flex align-items-center flex-column" style="width: 18rem">
             <img class="imagen" src= "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" alt="Imagen ${i}" width="55%" >
                     <h5>Autos</h5>
                     <p>Texto</p>
                    <a href="productos.html" class="btn btn-primary">Ver más</a>
             </div>
         </div>
         `;
         cards.push(card);
        }
     container.innerHTML = cards.join("");
}
sprint()

