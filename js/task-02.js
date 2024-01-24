const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elements = document.querySelector("#ingredients");
ingredients.map((ingredient) => {
  let newIngredient = document.createElement("li");
  newIngredient.textContent = ingredient;
  elements.append(newIngredient);
});
