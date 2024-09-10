const h1 = document.querySelector("h1");
h1.innerText = "Productos";

const container = document.querySelector("section");
const cards = [];

 for (let i = 1; i < 4; i++) {
    const card = `<div class="card">
             <img src= "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" alt="Imagen ${i}">
                     <h5>Autos</h5>
                     <p>Texto</p>
             </div>
         </div>
         `;
         cards.push(card);
        }
     container.innerHTML = cards.toString();
