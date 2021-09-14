import { changeTheme } from "./theme.js";
import { changeLanguage } from "./language.js";

const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  lineNumbers: false,
  mode: "javascript",
  theme: "material-darker",
});
console.log(editor);
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
    themeBtn.innerHTML = `${themeObj.themeName}
                         <svg class="arrow-svg" style="width:24px;height:24px" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M7,10L12,15L17,10H7Z" />
                         </svg>`;
    editor.setOption("theme", themeObj.themeId);
    console.log(editor);
  });
});

langItems.forEach((item) => {
  item.addEventListener("click", () => {
    let langObj = changeLanguage(item);
    langBtn.innerHTML = `${langObj.langName} 
                  <svg class="arrow-svg" style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M7,10L12,15L17,10H7Z" />
                  </svg>`;
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
