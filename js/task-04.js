let counterValue = 0;

const counter = document.querySelector("#counter");
const countsView = document.querySelector("#value");
const action = (event) => {
  switch (event.target.attributes[1].value) {
    case "decrement":
      counterValue -= 1;
      break;
    case "increment":
      counterValue += 1;
      break;
    default:
      return "Valor no permitido";
  }
  countsView.textContent = counterValue;
};
counter.addEventListener("click", action);
