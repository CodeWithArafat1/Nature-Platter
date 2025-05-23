const tgrl = document.getElementById("tgrl");
const mobileMenu = document.getElementById("mobileMenu");

tgrl.addEventListener("click", () => {
  mobileMenu.classList.toggle("flex");
  mobileMenu.classList.toggle("hidden");
});
