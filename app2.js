let profileBtn = document.querySelector(".profile");
let dropdownMenu = document.querySelector(".dropdown-menu");
profileBtn.addEventListener("click", () => {
  if (dropdownMenu.classList.contains("hidden")) {
    dropdownMenu.classList.remove("hidden");
  } else {
    dropdownMenu.classList.add("hidden");
  }
});

let menuIcon = document.querySelector(".menu-icon");
let mobMenu = document.querySelector(".mobile-menu");
let mobMenuLink = document.querySelector(".mobile-menu p");

menuIcon.addEventListener("click", () => {
  if (mobMenu.classList.contains("-left-full")) {
    mobMenu.classList.replace("-left-full", "left-0");
  } else {
    mobMenu.classList.replace("left-0", "-left-full");
  }
});
mobMenuLink.addEventListener("click", () => {
  mobMenu.classList.replace("left-0", "-left-full");
});
