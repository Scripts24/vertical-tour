// Activar menú

const burger_menu = document.querySelector(".burguer-menu");
const container = document.querySelector(".container");

burger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
});