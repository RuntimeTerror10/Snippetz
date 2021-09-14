import { changeTheme } from "./theme.js";
import { changeLanguage } from "./language.js";
import { saveSnippet } from "./save.js";

const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  lineNumbers: false,
  mode: "javascript",
  theme: "material-darker",
  fontSize: "16px",
});
console.log(editor);
const editor2 = document.querySelector(".CodeMirror");
const themeBtn = document.querySelector(".js-theme-drop-btn");
const langBtn = document.querySelector(".js-lang-drop-btn");
const themeItems = document.querySelectorAll(".js-theme-item");
const langItems = document.querySelectorAll(".js-lang-item");
const lineNumberCheckbox = document.querySelector(".js-line-number-checkbox");
const fontSizeInput = document.querySelector(".js-font-size-input");
const snippetNameInput = document.querySelector(".js-snippet-input");
const saveBtn = document.querySelector(".js-save-btn");
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

lineNumberCheckbox.addEventListener("change", () => {
  if (lineNumberCheckbox.checked) {
    editor.setOption("lineNumbers", true);
  } else {
    editor.setOption("lineNumbers", false);
  }
});

fontSizeInput.addEventListener("keyup", () => {
  let value = `${fontSizeInput.value}px`;
  editor2.style.fontSize = value;
});

colorPicker.addEventListener("input", (e) => {
  changeSnippetBackgroundColor();
});

saveBtn.addEventListener("click", () => {
  let code = editor.getValue();
  let languageName = langBtn.innerText;
  let languageid = editor.getOption("mode");
  let snippetName = snippetNameInput.value;
  if (snippetName.length === 0) {
    alert("Give this snippet a name before saving!");
  } else {
    saveSnippet(code, snippetName, languageName, languageid);
    snippetNameInput.value = "";
  }
});

function changeSnippetBackgroundColor() {
  const color = colorPicker.value;
  snippetBackground.style.background = color;
}
