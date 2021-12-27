/* Genero un constructor con algunos parametros por ahora */
class elecciones {
  constructor(comida, entrada, postre) {
    this.comida = comida;
    this.entrada = entrada;
    this.postre = postre;
  }
}
/* Creo un array vacio, para guardar respuestas de usuariuos mediante un formulario */
let eleccion = [];

let idform = document.getElementById("formulario");

idform.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(e.target);

  let datform = new FormData(e.target);
  let nuevaEleccion = new elecciones(
    datform.get("comidaPreferida"),
    datform.get("entrada"),
    datform.get("postre")
  );
  eleccion.push(nuevaEleccion);
  localStorage.setItem("eleccion", JSON.stringify(eleccion)); // Agrego al storage lo que cargan los usuarios
  idform.reset();
});
console.log(eleccion);

const nuevosElemento = ["pastas", "pizzas", "milanesas", "sushi"];

const lista = document.getElementById("list");

nuevosElemento.forEach((element) => {
  let nuevoNodo = document.createElement("li");

  nuevoNodo.innerHTML = element;

  lista.appendChild(nuevoNodo); // Agrego al html sugerencias para los usuarios
});

let informacion = document.getElementById("informacion");
let informacion2 = document.getElementById("informacion2");

if (nuevosElemento != "") {
  informacion.innerText = "Estas son algunas sugerencias de otros clientes";
} else {
  informacion2.innerText = "Aquí encontraras sugerencias de otros clientes";
}

/* Para después voy a agregar algo local, con los productos que maneje, por ahora uso la api de criptoya */
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));

let dolares = document.getElementById("dolares");

fetch("https://criptoya.com/api/dolar")
  .then((response) => response.json())
  .then((datosDolar) => {
    let dolarArray = Object.entries(datosDolar).filter(
      (dolarArray) => dolarArray[0] != "time"
    );
    dolarArray.forEach((dolar) => {
      dolares.innerHTML += ` <p> ${dolar[0]}: $${dolar[1]} </p>  `;
    });
  });
