const inputText = document.querySelector("#validation-input");

inputText.addEventListener("blur", (event) => {
  if (inputText.value.length !== 6) {
    inputText.setAttribute("class", "invalid");
  } else {
    inputText.setAttribute("class", "valid");
  }
});
