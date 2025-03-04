document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".button");
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#9333ea";
    });
    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "#a855f7";
    });
});
