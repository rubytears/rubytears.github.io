// Functions for Navigation
function revealMenu(name) {
  const currentMenu = document.querySelector(`#${name}`);
  previousMenu.classList.add("hidden");
  document.title = `JBBae : ${name.charAt(0).toUpperCase() + name.slice(1)}`; // First letter upper-cased title
  currentMenu.classList.remove("hidden");
  previousMenu = document.querySelector(`#${name}`);
}

function galleryHover(picture) {
  const text = picture.nextElementSibling;
  text.classList.remove("hidden");
  // text.setAttribute("class", "text");
}

const baseURL = "https://rubytears.github.io/";
let previousMenu = document.querySelector("#home");
let cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});
