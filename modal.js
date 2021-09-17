function handleSnippetDeleteEvent() {
  document.querySelectorAll(".js-delete-snippet-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const snippetName = btn.parentNode.id;
      window.localStorage.removeItem(snippetName);
      let temp = btn.parentNode;
      temp.parentNode.style.display = "none";
    });
  });
}

export default handleSnippetDeleteEvent;
