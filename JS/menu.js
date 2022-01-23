if (!localStorage.getItem("carrito")) {
  localStorage.setItem("carrito", JSON.stringify([]));
}

// agrego al dom las entradas de mi menu
let div1 = document.getElementById("div1");

fetch("entradas.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((productoEnArray, indice) => {
      div1.innerHTML += `
          <div class="card text-white bg-warning mb-3" id="producto${indice}" style="max-width: 20rem; margin: 5px">
  <div class="card-header">${productoEnArray.nombre}</div>
  <img src="../imagen/${productoEnArray.imagen}" class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title">${productoEnArray.categoria}</h4>
    <p class="card-text">$${productoEnArray.precio} </p>
    <p class="card-text">Disponibles: ${productoEnArray.disponibles} </p>
    <buttom id="boton1${indice}" class="btn btn-danger"><i class="fas fa-cart-plus"></i></buttom>
  </div>
          `;
    });
    productos = JSON.parse(localStorage.getItem("carrito"));

    data.forEach((productoEnArray, indice) => {
      document
        .getElementById(`boton1${indice}`)
        .addEventListener("click", () => {
          if (
            productos.find(
              (producto) => producto.nombre == productoEnArray.nombre
            )
          ) {
            let index = productos.findIndex(
              (producto) => producto.nombre == productoEnArray.nombre
            );
            productos[index].cant++;
            localStorage.setItem("carrito", JSON.stringify(productos));
          } else {
            let nuevoProducto = new Producto(
              productoEnArray.nombre,
              productoEnArray.categoria,
              productoEnArray.precio,
              productoEnArray.disponibles,
              productoEnArray.imagen
            );
            productos.push(nuevoProducto);
            localStorage.setItem("carrito", JSON.stringify(productos));
          }
        });
    });
  });

// agrego los platos principales
let div2 = document.getElementById("div2");

fetch("principal.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((productoEnArray, indice) => {
      div2.innerHTML += `
          <div class="card text-white bg-danger mb-3" id="producto${indice}" style="max-width: 20rem; margin: 5px">
  <div class="card-header">${productoEnArray.nombre}</div>
  <img src="../imagen/${productoEnArray.imagen}" class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title">${productoEnArray.categoria}</h4>
    <p class="card-text">$${productoEnArray.precio} </p>
    <p class="card-text">Disponibles: ${productoEnArray.disponibles} </p>
    <buttom id="boton2${indice}" class="btn btn-warning"><i class="fas fa-cart-plus"></i></buttom>
  </div>
          `;
    });
    productos = JSON.parse(localStorage.getItem("carrito"));

    data.forEach((productoEnArray, indice) => {
      document
        .getElementById(`boton2${indice}`)
        .addEventListener("click", () => {
          if (
            productos.find(
              (producto) => producto.nombre == productoEnArray.nombre
            )
          ) {
            let index = productos.findIndex(
              (producto) => producto.nombre == productoEnArray.nombre
            );
            productos[index].cant++;
            localStorage.setItem("carrito", JSON.stringify(productos));
          } else {
            let nuevoProducto = new Producto(
              productoEnArray.nombre,
              productoEnArray.categoria,
              productoEnArray.precio,
              productoEnArray.disponibles,
              productoEnArray.imagen
            );
            productos.push(nuevoProducto);
            localStorage.setItem("carrito", JSON.stringify(productos));
          }
        });
    });
  });

// agrego los postres
let div3 = document.getElementById("div3");

fetch("postre.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((productoEnArray, indice) => {
      div3.innerHTML += `
          <div class="card text-white bg-warning mb-3" id="producto${indice}" style="max-width: 20rem; margin: 5px">
  <div class="card-header">${productoEnArray.nombre}</div>
  <img src="../imagen/${productoEnArray.imagen}" class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title">${productoEnArray.categoria}</h4>
    <p class="card-text">$${productoEnArray.precio} </p>
    <p class="card-text">Disponibles: ${productoEnArray.disponibles} </p>
    <buttom id="boton3${indice}" class="btn btn-danger"><i class="fas fa-cart-plus"></i></buttom>
  </div>
          `;
    });
    productos = JSON.parse(localStorage.getItem("carrito"));

    data.forEach((productoEnArray, indice) => {
      document
        .getElementById(`boton3${indice}`)
        .addEventListener("click", () => {
          if (
            productos.find(
              (producto) => producto.nombre == productoEnArray.nombre
            )
          ) {
            let index = productos.findIndex(
              (producto) => producto.nombre == productoEnArray.nombre
            );
            productos[index].cant++;
            localStorage.setItem("carrito", JSON.stringify(productos));
          } else {
            let nuevoProducto = new Producto(
              productoEnArray.nombre,
              productoEnArray.categoria,
              productoEnArray.precio,
              productoEnArray.disponibles,
              productoEnArray.imagen
            );
            productos.push(nuevoProducto);
            localStorage.setItem("carrito", JSON.stringify(productos));
          }
        });
    });
  });

// agrego las bebeidas
let div4 = document.getElementById("div4");

fetch("bebidas.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((productoEnArray, indice) => {
      div4.innerHTML += `
          <div class="card text-white bg-danger mb-3" id="producto${indice}" style="max-width: 20rem; margin: 5px">
  <div class="card-header">${productoEnArray.nombre}</div>
  <img src="../imagen/${productoEnArray.imagen}" class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title">${productoEnArray.categoria}</h4>
    <p class="card-text">$${productoEnArray.precio} </p>
    <p class="card-text">Disponibles: ${productoEnArray.disponibles} </p>
    <buttom id="boton4${indice}" class="btn btn-warning"><i class="fas fa-cart-plus"></i></buttom>
  </div>
          `;
    });
    productos = JSON.parse(localStorage.getItem("carrito"));

    data.forEach((productoEnArray, indice) => {
      document
        .getElementById(`boton4${indice}`)
        .addEventListener("click", () => {
          if (
            productos.find(
              (producto) => producto.nombre == productoEnArray.nombre
            )
          ) {
            let index = productos.findIndex(
              (producto) => producto.nombre == productoEnArray.nombre
            );
            productos[index].cant++;
            localStorage.setItem("carrito", JSON.stringify(productos));
          } else {
            let nuevoProducto = new Producto(
              productoEnArray.nombre,
              productoEnArray.categoria,
              productoEnArray.precio,
              productoEnArray.disponibles,
              productoEnArray.imagen
            );
            productos.push(nuevoProducto);
            localStorage.setItem("carrito", JSON.stringify(productos));
          }
        });
    });
  });
