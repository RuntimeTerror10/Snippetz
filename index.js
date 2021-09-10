const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  lineNumbers: true,
  mode: "javascript",
  theme: "dracula",
});

const colorPicker = document.querySelector(".js-color-picker");
const SnippetBackground = document.querySelector(
  ".js-export-container-wrapper"
);

colorPicker.addEventListener("input", (e) => {
  changeSnippetBackgroundColorOnChange();
});

function changeSnippetBackgroundColorOnChange() {
  const color = colorPicker.value;
  SnippetBackground.style.background = color;
}
