const menu = document.getElementById("menu");
const nav = document.querySelector("header nav")
const closeBtn = document.getElementById("close-btn")

menu.addEventListener("click", () => {
  nav.style.transform = "translateX(0)"
})

closeBtn.addEventListener("click", () => {
  nav.style.transform = "translateX(100%)"
})

window.addEventListener("resize", () => {
  if (window.innerWidth > 700) {
    nav.style.transform = "unset"
  } else {
    nav.style.transform = "translateX(100%)"
  }

})