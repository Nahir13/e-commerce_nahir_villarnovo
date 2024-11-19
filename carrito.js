const cardsSection = document.querySelector("#cards", "#cart")

function getCart(cards) {
  const list = cards.map(card =>
    `<div class="card border shadow-none mb-2">
         <div class="card-body">
        <div class="d-flex align-items-start">
            <div class="me-4">
               <img src="${card.img}" class="img-fluid rounded-start" alt="${card.title}">
               </div>
                <div class="flex-grow-1 overflow-hidden">
                   <h5 class="text-truncate font-size-18">${card.title}</h5>
                   <div class="row">
                    <div class="col-md-3">
                    <div class="mt-3">
                    <p class="text-muted mb-2">Precio</p>
                   <h5 class="mb-0 mt-2">$${card.price}</h5>
                     </div>
                    </div>
                    <div class="col-md-4">
                    <div class="mt-3">
                  <p class="text-muted mb-2">Cantidad</p>
                  <h5 class="mb-0 mt-2">${card.quantity}</h5>
                 </div>
               </div>
                   <div class="col-md-3">
                 <div class="mt-3">
                  <p class="text-muted mb-2">Total</p>
                  <h5>$${card.price * card.quantity}</h5>
                  </div>
                 </div>
                    <div class="col-md-2">
                   <div class="mt-3">
                   <p class="text-muted mb-2" onclick="removeItem(${card.id})"><i class="fa-solid fa-trash"></i></p>
               </div>
                   </div>
                  </div>
                   </div>
                  </div>
                 </div>
                </div>
                  
     `)
  cardsSection.innerHTML = list.join("")
}

getCart(JSON.parse(localStorage.getItem("cart")))


function total(cards) {
  let cartTotal = document.querySelector("#cart-total")

  let total = cards.reduce(
    (acumulado, actual) => acumulado + actual.price * actual.quantity,
    0
  )
  cartTotal.innerText = "$" + total
}
total(JSON.parse(localStorage.getItem("cart")))

function removeItem(id) {
  const cards = JSON.parse(localStorage.getItem("cart"))

  const newCards = cards.filter(card => card.id !== id);

  localStorage.setItem("cart", JSON.stringify(newCards))

  getCart(newCards)

  total(newCards)

  let quantity = newCards.reduce((acumulado, actual) => acumulado + actual.quantity, 0)
  localStorage.setItem("quantity", quantity)
  const quantityTag = document.querySelector("#quantity")
  quantityTag.innerText = quantity
}

function clearCart() {
  let quantityTag = document.querySelector("#quantity")
  quantityTag.innerText = "0"
  localStorage.setItem("cart", JSON.stringify([]))
  getCart([])
  total([])
}

//CHECKOUT
function comprar() {
  const recurso = {
    "createdAt": "2024-11-14T21:09:04.357Z",
    "items": JSON.parse(localStorage.getItem("cart")),
    "user": localStorage.getItem("email"),
    "id": "1"

  }

  fetch("https://67367b0eaafa2ef222309fad.mockapi.io/cart", {
    method: "POST",
    body: JSON.stringify(recurso),
  })

    .then(response => response.json())
    .then(data => {
      Swal.fire({

        text: `Gracias ${recurso.user}, hemos registrado tu orden número ${data.id}`,
        confirmButtonText: "Ok",
        confirmButtonColor: "#ab2415",
        cancelButtonColor: '#24262b',
        showCancelButton: true,
        showCloseButton: true,
      })
      clearCart()
    })
    .catch(() => {
      Swal.fire({
        text: `Lo sentimos hubo un problema con tu compra, intenta más tarde`,
        confirmButtonText: "Ok",
        confirmButtonColor: "#ab2415",
      })
    })

}
