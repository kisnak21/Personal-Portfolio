// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
window.addEventListener("click", (event) => {
  if (event.target != navMenu && event.target != hamburger) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

//navbar
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const backTop = document.querySelector("#back-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    backTop.classList.remove("hidden");
    backTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    backTop.classList.add("hidden");
    backTop.classList.remove("flex");
  }
};

// darkmode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", () => {
  darkToggle.checked
    ? html.classList.add("dark")
    : html.classList.remove("dark");
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
