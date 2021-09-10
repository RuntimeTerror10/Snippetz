export function HandleThemeDropBtnClickEvent(dropContent) {
  let items = dropContent.getElementsByClassName("theme-item");
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active-theme");
      current[0].className = current[0].className.replace(" active-theme", "");
      this.className += " active-theme";
      dropContent.classList.remove("show");
    });
  }
}
export function HandleLangDropBtnClickEvent(dropContent) {
  let items = dropContent.getElementsByClassName("lang-item");
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active-lang");
      current[0].className = current[0].className.replace(" active-lang", "");
      this.className += " active-lang";
      dropContent.classList.remove("show");
    });
  }
}
