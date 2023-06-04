document.querySelector(".krest").addEventListener("click", () => {
    document.querySelector(".header-mobile").style.display = "none";
    document.querySelector(".menu").style.display = "block";
});

document.querySelector(".menu").addEventListener("click", () => {
    document.querySelector(".menu").style.display = "none";
    document.querySelector(".header-mobile").style.display = "block";
});