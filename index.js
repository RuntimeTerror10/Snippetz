import { HandleThemeDropBtnClickEvent } from "./dropdown.js";
import { HandleLangDropBtnClickEvent } from "./dropdown.js";

const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  lineNumbers: true,
  mode: "javascript",
  theme: "dracula",
});
const langDropBtn = document.querySelector(".js-lang-dropbtn");
const themeDropBtn = document.querySelector(".js-theme-dropbtn");
const langDropContent = document.querySelector(".js-lang-dropdown-content");
const themeDropContent = document.querySelector(".js-theme-dropdown-content");
const colorPicker = document.querySelector(".js-color-picker");
const SnippetBackground = document.querySelector(
  ".js-export-container-wrapper"
);

colorPicker.addEventListener("input", (e) => {
  changeSnippetBackgroundColorOnChange();
});

themeDropBtn.addEventListener("click", function () {
  document.getElementById("themeDropdown").classList.toggle("show");
  HandleThemeDropBtnClickEvent(themeDropContent);
});
langDropBtn.addEventListener("click", function () {
  document.getElementById("langDropdown").classList.toggle("show");
  HandleLangDropBtnClickEvent(langDropContent);
});

function changeSnippetBackgroundColorOnChange() {
  const color = colorPicker.value;
  SnippetBackground.style.background = color;
}
