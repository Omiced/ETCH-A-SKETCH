const divParent = document.querySelector("#grid");
const Limpiar_btn = document.querySelector("#btnLimpiar");
for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  divParent.appendChild(div).classList.add("cuadritos");
}

const pintarCuadros = () => {
  let cuadritos = document.querySelectorAll(".cuadritos");
  for (let i = 0; i < cuadritos.length; i++) {
    cuadritos[i].addEventListener("mouseover", function () {
      cuadritos[i].style.backgroundColor = colorHex();
    });
  }
};

const limpiarCuadros = () => {
  let cuadritos = document.querySelectorAll(".cuadritos");
  for (let i = 0; i < cuadritos.length; i++) {
    cuadritos[i].style.backgroundColor = "white";
  }
};

const randomLetter = () => {
  let hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let ramHexChar = Math.floor(Math.random() * 15);
  return hex[ramHexChar];
};

const colorHex = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += randomLetter();
  }
  return color;
};
pintarCuadros();

Limpiar_btn.addEventListener("click", function () {
  limpiarCuadros();
});
