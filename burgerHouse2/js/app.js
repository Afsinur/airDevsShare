let menuIcon = document.querySelector(".menu-icon");
let menuContainer = document.querySelector(".menu-container");
let menuContainerUl = document.querySelector(".menu-container ul");

menuIcon.addEventListener("click", () => {
  menuContainer.classList.remove("translate-x-full");
});

menuContainer.addEventListener("click", () => {
  menuContainer.classList.add("translate-x-full");
});

menuContainerUl.addEventListener("click", (e) => {
  e.stopPropagation();
});
