let modalBody = document.getElementById("modalBody");
let botonCarrito = document.getElementById("botonCarrito");
let botonFinalizarCompra = document.getElementById("finalizarCompra");
let parrafoCompra = document.getElementById("precioTotal");
let acumulador;

// Le doy funcionalidad al carrito de compras
function compraTotal(productosDelStorage) {
  acumulador = 0;
  productosDelStorage.forEach((productoCarrito) => {
    acumulador += productoCarrito.precio * productoCarrito.cant;
  });

  if (acumulador == 0) {
    parrafoCompra.innerHTML = "";
    modalBody.innerHTML = "<p>No hay productos agregados en el carrito </p>";
  } else {
    parrafoCompra.innerHTML = `Importe total $${new Intl.NumberFormat(
      "de-DE"
    ).format(acumulador)}`;
  }
}

// Le doy funcionalidad a los botones del carrito para eliminar, agregar o quitar cantidad de productos
function cargarEventosModal(productosDelStorage) {
  productosDelStorage.forEach((productoCarrito, indice) => {
    document
      .getElementById(`botonEliminar${indice}`)
      .addEventListener("click", () => {
        console.log(`Producto ${productoCarrito.nombre} eliminado`);
        document.getElementById(`productoCarrito${indice}`).remove();
        productos.splice(indice, 1);
        localStorage.setItem("carrito", JSON.stringify(productos));
        cargarProductosModal(JSON.parse(localStorage.getItem("carrito")));
      });
  });

  productosDelStorage.forEach((productoCarrito, indice) => {
    document.getElementById(`sum${indice}`).addEventListener("click", () => {
      console.log();
      if (productos[indice].cant < productos[indice].disponibles) {
        productos[indice].cant++;
        localStorage.setItem("carrito", JSON.stringify(productos));
        cargarProductosModal(JSON.parse(localStorage.getItem("carrito")));
      }
    });
  });

  productosDelStorage.forEach((productoCarrito, indice) => {
    document.getElementById(`rest${indice}`).addEventListener("click", () => {
      console.log();
      if (productos[indice].cant > 1) {
        productos[indice].cant--;
        localStorage.setItem("carrito", JSON.stringify(productos));
        cargarProductosModal(JSON.parse(localStorage.getItem("carrito")));
      }
    });
  });
}

// Cargo los productos al carrito de compras
function cargarProductosModal(productosDelStorage) {
  modalBody.innerHTML = " ";
  productosDelStorage.forEach((productoCarrito, indice) => {
    modalBody.innerHTML += `
          <div class="card border-primary mb-3" id ="productoCarrito${indice}" style="max-width: 540px;">
              <div class="row g-0">
                  <div class="col-md-4">
                      <img src="../imagen/${
                        productoCarrito.img
                      }" class="img-fluid rounded-start" alt="...">
              </div>
          <div class="col-md-8">
              <div class="card-body">
             
              <h5 class="card-title">${productoCarrito.nombre}</h5>
              <div class="row">
                  <p class="card-text">Cantidad: ${productoCarrito.cant}</p>
                  <button class= "btn btn-outline-secondary" id="sum${indice}"><i class="fas fa-plus"></i></button>
                  <button class= "btn btn-outline-secondary" id="rest${indice}"><i class="fas fa-minus"></i></button> 
              </div>
              <p class="card-text">$${new Intl.NumberFormat("de-DE").format(
                productoCarrito.precio * productoCarrito.cant
              )}</p> 
              <button class= "btn btn-danger" id="botonEliminar${indice}"><i class="fas fa-trash-alt"></i></button>
          </div>
          </div>
          </div>
      </div>
  `;
  });
  cargarEventosModal(productosDelStorage);
  compraTotal(productosDelStorage);
}

botonCarrito.addEventListener("click", () => {
  let productosDelStorage = JSON.parse(localStorage.getItem("carrito"));

  cargarProductosModal(productosDelStorage);
});

botonFinalizarCompra.addEventListener("click", () => {
  localStorage.setItem("carrito", JSON.stringify([]));
  swal(
    "Gracias por su compra, buen provecho!",
    "Los comida sera enviada de inmediato",
    "success"
  );
});
