function saveSnippet(code, name, langName, langid) {
  let key = name;
  let obj = {
    snippet: code,
    language: langName,
    languageid: langid,
  };
  window.localStorage.setItem(key, JSON.stringify(obj));
}

export default saveSnippet;
