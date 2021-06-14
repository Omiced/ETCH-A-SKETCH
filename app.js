const divParent = document.querySelector("#grid");
for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.addEventListener("mouseover", function () {
    div.style.backgroundColor = colorHex();
  });
  divParent.appendChild(div);
}

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
