function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeButton = document.querySelector("button");
const bodySelector = document.querySelector("Body");
const spanText = document.querySelector("span");
bodySelector.setAttribute("id", "body");
spanText.textContent = "#FFFFFF";

document.getElementById("body").style.backgroundColor = `#FFFFFF`;
changeButton.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.getElementById("body").style.backgroundColor = `${color}`;
  spanText.textContent = color.toUpperCase();
});
