const divParent = document.querySelector("#grid");
const Limpiar_btn = document.querySelector("#btnLimpiar");
const numCeldas_input = document.querySelector("#numCeldas");
const set_btn = document.querySelector("#set");
let num = 0;
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

const modGrid = (num) => {
  divParent.style["grid-template-columns"] = `repeat(${num},${100 / num}%)`;
  divParent.style["grid-template-rows"] = `repeat(${num},${100 / num}%)`;
};

const modMatriz = (num) => {
  let numi = num * num;
  console.log(numi);
  for (let i = 0; i < numi; i++) {
    const div = document.createElement("div");
    divParent.appendChild(div).classList.add("cuadritos");
  }
};

pintarCuadros();
set_btn.addEventListener("click", () => {
  num = Number(prompt("Ingrese el número de celdas por lado que desea"));
  modGrid(num);
  modMatriz(num);
  pintarCuadros();
});
Limpiar_btn.addEventListener("click", () => limpiarCuadros());
