const incrementEl = document.querySelector("#increment");
const decrementEl = document.querySelector("#decrement");
const valueEl = document.querySelector("#value");

incrementEl.addEventListener("click", () => {
    valueEl.innerHTML = Number(valueEl.innerText) + 1;
})

decrementEl.addEventListener("click", () => {
    valueEl.innerHTML = Number(valueEl.innerText) - 1;
})