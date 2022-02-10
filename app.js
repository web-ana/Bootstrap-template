const menu = document.getElementById("menu");
menu.classList.add("hide");

function toggle() {
  if (menu.classList.contains("hide")) {
    menu.classList.remove("hide");
    menu.classList.add("show");
  } else {
    menu.classList.remove("show");
    menu.classList.add("hide");
  }
}
