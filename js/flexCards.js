const panels = document.querySelectorAll(".panel");

const removeClass = (array, className) => {
    array.forEach((e) => {
        e.classList.remove(className);
    });
};

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeClass(panels, "active");
        panel.classList.add("active");
    });
});