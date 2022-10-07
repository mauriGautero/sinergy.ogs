const showOnPx = 500;
let backToTopButton = document.querySelector(".subir");
let tabpanel=document.querySelector(".section_1");

const scrollContainer = () => {
return document.documentElement.scrollTop || tabpanel;
};
document.addEventListener("scroll", () => {
if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
} else {
    backToTopButton.classList.add("hidden")
}
});
const goToTop = () => {
    tabpanel.scrollIntoView({
        behavior: "smooth",
    });
};
backToTopButton.addEventListener("click", goToTop);
backToTopButton.classList.add("hidden")