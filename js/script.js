const form = document.querySelector("form");
const list = document.querySelector(".todo-list");
const input = document.querySelector(".input-field");
const sub = document.querySelector(".sub");
const clear = document.querySelector(".clear");

clear.addEventListener("click", (e) => {
  e.preventDefault();
  const value = input.value;
  const element = document.createElement("div");

  list.remove(element);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  const element = document.createElement("div");
  element.textContent = value;
  element.addEventListener("click", () => {
    if (element.style.textDecoration === "line-through") {
      element.style.textDecoration = "none";
    } else {
      element.style.textDecoration = "line-through";
    }
  });
  list.append(element);
  input.value = "";
});
