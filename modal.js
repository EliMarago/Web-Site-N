//modal section news
document.addEventListener("DOMContentLoaded", () => {
    const demoBtn = document.querySelector(".btn--open-modal");   // bottone Richiedi demo
    const btnCloseModal = document.querySelector(".btn--close-modal"); // pulsante ×
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
  
    // Apri modale
    const openModal = (e) => {
      e.preventDefault();
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
    };
  
    // Chiudi modale
    const closeModal = () => {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    };
  
    // Event listeners
    if (demoBtn) demoBtn.addEventListener("click", openModal);
    if (btnCloseModal) btnCloseModal.addEventListener("click", closeModal);
    if (overlay) overlay.addEventListener("click", closeModal);
  
    // Chiudi con ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
      }
    });
  
    console.log("Script modale inizializzato correttamente");
  });
  