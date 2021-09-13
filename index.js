import { changeTheme } from "./theme.js";
import { changeLanguage } from "./language.js";

const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  lineNumbers: true,
  mode: "javascript",
  theme: "dracula",
});

const themeBtn = document.querySelector(".js-theme-drop-btn");
const langBtn = document.querySelector(".js-lang-drop-btn");
const themeItems = document.querySelectorAll(".js-theme-item");
const langItems = document.querySelectorAll(".js-lang-item");
const colorPicker = document.querySelector(".js-color-picker");
const snippetBackground = document.querySelector(
  ".js-export-container-wrapper"
);

themeItems.forEach((item) => {
  item.addEventListener("click", () => {
    let themeObj = changeTheme(item);
    themeBtn.innerText = themeObj.themeName;
    editor.setOption("theme", themeObj.themeId);
    console.log(editor);
  });
});

langItems.forEach((item) => {
  item.addEventListener("click", () => {
    let langObj = changeLanguage(item);
    langBtn.innerText = langObj.langName;
    editor.setOption("mode", langObj.langId);
  });
});

colorPicker.addEventListener("input", (e) => {
  changeSnippetBackgroundColor();
});

function changeSnippetBackgroundColor() {
  const color = colorPicker.value;
  snippetBackground.style.background = color;
}
