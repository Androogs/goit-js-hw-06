const inputElement = document.getElementById("font-size-control");
const spanElement = document.getElementById("text");

inputElement.addEventListener("input", () => {
  spanElement.style.fontSize = inputElement.value + "px";
});
