const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.value = "15";

fontSizeControl.addEventListener("input", (event) => {
  const fontSize = event.target.value;
  text.style.fontSize = `${fontSize}px`;
});
