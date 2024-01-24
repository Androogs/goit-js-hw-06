let cumulateInput = [];
let flag = true;
const inputText = document.getElementById("name-input");
const spanText = document.querySelector("#name-output");
inputText.addEventListener("input", (event) => {
  if (event.data === null) {
    cumulateInput.pop();
  } else {
    cumulateInput.push(event.data);
  }
  if (cumulateInput.length === 0) {
    spanText.textContent = "Anónimo";
  } else {
    spanText.textContent = cumulateInput.join("");
  }
});
