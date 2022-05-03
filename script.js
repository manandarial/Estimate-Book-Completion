const totalPages = document.querySelector("#page");
const pagesToRead = document.querySelector("#read");
const result = document.querySelector(".result-value");

console.log(result.textContent);

totalPages.addEventListener("change", update);
pagesToRead.addEventListener("change", update);

function update() {
  result.textContent = Math.floor(totalPages.value / pagesToRead.value);
}
