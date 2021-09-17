const saveBtn = document.querySelector(".js-save-btn");

function saveSnippet(code, name, langName, langid) {
  let key = name;
  let obj = {
    snippet: code,
    language: langName,
    languageid: langid,
  };
  window.localStorage.setItem(key, JSON.stringify(obj));
  showSaveMsg();
}
function showSaveMsg() {
  saveBtn.innerText = "Saved!";
  setTimeout(function () {
    saveBtn.innerText = "Save";
  }, 800);
}

export default saveSnippet;
