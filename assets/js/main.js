let toggler = document.querySelector(".the-toggler");
let nav = document.querySelector(".nav .menu-nav");
toggler.addEventListener("click", (item) => {
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    nav.style.height = `${nav.scrollHeight}px`;
  } else {
    nav.style.height = 0;
  }
});