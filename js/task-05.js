const inputText = document.getElementById("name-input");
const spanText = document.querySelector("#name-output");

inputText.addEventListener("input", (event) => {
  if (inputText.value === "") {
    spanText.textContent = "Hello, Anónimo";
  } else {
    spanText.textContent = "Hello, " + inputText.value;
  }
});
