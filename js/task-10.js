function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBoxes(amount) {
  // Eliminar cuadros existentes antes de crear nuevos
  destroyBoxes();

  let width = 30;
  for (let i = 0; i < amount; i++) {
    let newBox = document.createElement("div");
    newBox.setAttribute("id", `box${i}`); // Cambiado el id para que sea único
    newBox.style.width = `${width}px`;
    newBox.style.height = `${width}px`;
    newBox.style.background = `${getRandomHexColor()}`;
    divBoxes.append(newBox);
    width += 10;
  }
}

function destroyBoxes() {
  const parent = document.getElementById("boxes");
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
}

const controlButtons = document.querySelectorAll("button");
const inputValue = document.querySelector("input");
const divBoxes = document.querySelector("#boxes");

const action = (event) => {
  switch (event.target.attributes[1].name) {
    case "data-create":
      createBoxes(inputValue.value);
      break;
    case "data-destroy":
      destroyBoxes();
      break;
    default:
      console.log("Valor inválido");
  }
};
controlButtons[0].addEventListener("click", action);
controlButtons[1].addEventListener("click", action);
