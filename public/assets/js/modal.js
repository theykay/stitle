const modal = document.getElementById("ppModal");
const showModal = document.getElementById("ppLink");
const closeModal = document.getElementById("modalClose");

showModal.onclick = () => {
  modal.style.display = "block";
};

closeModal.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}