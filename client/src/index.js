import "./css/style.css";
import "@fortawesome/fontawesome-free/css/all.css";

const modal = document.querySelector("#modal");
const modalBtn = document.querySelector("#modal-btn");

function open() {
  modal.style.display = "block";
}

function outsideClick(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}

modalBtn.addEventListener("click", open);
window.addEventListener("click", outsideClick);
