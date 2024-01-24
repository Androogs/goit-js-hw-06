const list = document.querySelectorAll(".item");
console.log(`Number of categories: ${list.length}`);
for (const element of list) {
  console.log("");
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
}
