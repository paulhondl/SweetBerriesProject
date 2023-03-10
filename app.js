const menu = document.getElementById("menu");
const navBar = document.querySelector("header nav");
const navLinks = document.querySelectorAll("header nav li");


menu.addEventListener("click", () => {
  navBar.classList.toggle("active");
})

navLinks.forEach(link => link.addEventListener("click", () => {
  navBar.classList.toggle("active");
}))