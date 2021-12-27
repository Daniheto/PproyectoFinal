let criptos = document.getElementById("criptos");
fetch("http://hp-api.herokuapp.com/api/characters/students")
  .then((response) => response.json())
  .then((datosCripto) => {
    let criptoArray = Object.entries(datosCripto);
    console.log(criptoArray);
  });
