// MODAL GROUPE RESERVATION ---------------------------------------------------------

const modal = document.getElementById("modalGroupe");
const btnOpen = document.getElementById("openGroupeModal");
const btnClose = document.getElementById("closeGroupeModal");
const groupeSection = document.getElementById("groupeSection");

// ouvrir le modal
btnOpen.onclick = (e) => {
    e.preventDefault();
    modal.style.display = "block";
    groupeSection.scrollIntoView();
}

// fermer le modal avec X
btnClose.onclick = () => {
    modal.style.display = "none";
}

// fermer le modal en cliquant en dehors du modal
window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
  }
}