const darkModeSwitch = document.querySelector(".dark-mode-switch");

darkModeSwitch.addEventListener("click", () => {
  darkModeSwitch.classList.toggle("active");
  document.body.classList.toggle("dark-mode");
});
