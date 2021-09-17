const modalBody = document.querySelector(".js-modal-body");

function handleSnippetDeleteEvent() {
  document.querySelectorAll(".js-delete-snippet-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const snippetName = btn.parentNode.id;
      window.localStorage.removeItem(snippetName);
      let temp = btn.parentNode;
      temp.parentNode.style.display = "none";
      if (Object.keys(window.localStorage).length === 0) {
        modalBody.innerHTML = `<h2 class="no-snip-msg">No snippet saved yet</h2>`;
      }
    });
  });
}

export default handleSnippetDeleteEvent;
