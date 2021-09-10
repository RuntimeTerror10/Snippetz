const langDropBtn = document.querySelector(".js-lang-dropbtn");
const themeDropBtn = document.querySelector(".js-theme-dropbtn");

themeDropBtn.addEventListener("click", function () {
  document.getElementById("themeDropdown").classList.toggle("show");
});
themeDropBtn.addEventListener("blur", function () {
  let a = document.querySelector(".js-theme-dropdown-content");
  a.classList.remove("show");
});

langDropBtn.addEventListener("click", function () {
  document.getElementById("langDropdown").classList.toggle("show");
});
langDropBtn.addEventListener("blur", function () {
  let a = document.querySelector(".js-lang-dropdown-content");
  a.classList.remove("show");
});
