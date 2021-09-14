const modal = document.querySelector(".js-modal");
const loadBtn = document.querySelector(".js-load-btn");
const closeBtn = document.getElementsByClassName("close")[0];

loadBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
