import { changeTheme } from "./theme.js";
import { changeLanguage } from "./language.js";
import { saveSnippet } from "./save.js";
import { handleSnippetDeleteEvent } from "./modal.js";

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
const loadBtn = document.querySelector(".js-load-btn");
const modal = document.querySelector(".js-modal");
const modalBody = document.querySelector(".js-modal-body");
const closeBtn = document.querySelector(".js-close");
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
loadBtn.addEventListener("click", function () {
  displayModal();
  displayAllLoadSnippet();
});

closeBtn.addEventListener("click", function () {
  hideModal();
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    hideModal();
  }
});

function changeSnippetBackgroundColor() {
  const color = colorPicker.value;
  snippetBackground.style.background = color;
}
function displayAllLoadSnippet() {
  clearModalBody();
  for (let i = 0; i < Object.keys(localStorage).length; i++) {
    let key = Object.keys(localStorage)[i];
    const snippetTab = document.createElement("div");
    snippetTab.classList.add("snippet-tab");
    snippetTab.innerHTML = `<h1 class="tab-head">${key}</h1>
                            <div class="tab-btns" id="${key}">
                              <button class="load-snippet-btn js-load-snippet-btn">Load</button>
                              <button class="delete-snippet-btn js-delete-snippet-btn">Delete</button>
                            </div>`;
    modalBody.appendChild(snippetTab);
  }
  handleLoadSnippetEvent();
  handleSnippetDeleteEvent();
}

function clearModalBody() {
  modalBody.innerHTML = "";
}

function displayModal() {
  modal.style.display = "block";
}

function hideModal() {
  modal.style.display = "none";
}

function handleLoadSnippetEvent() {
  document.querySelectorAll(".js-load-snippet-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      let emptyStr = "";
      editor.setValue(emptyStr);
      let SnippetObj = JSON.parse(localStorage.getItem(btn.parentElement.id));
      editor.setValue(SnippetObj.snippet);
      editor.setOption("mode", SnippetObj.languageid);
      langBtn.innerHTML = `${SnippetObj.language}
                          <svg class="arrow-svg" style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M7,10L12,15L17,10H7Z" />
                          </svg>`;
      hideModal();
    });
  });
}
