const mobileButton = document.querySelector(".mobile__button");

mobileButton.addEventListener("click", () => {
  showMobileModal();
});

function showMobileModal() {
  document.body.classList.add("modal-open");

  const mobileModal = document.createElement("div");
  mobileModal.classList.add("mobile-modal");

  mobileModal.innerHTML = `
    <span class="mobile-close-btn">&times;</span>

    <div class="mobile-container">
        <div class="logo">
          <a class="logo__details" href="./index.html"
            ><svg class="logo__icon" width="40px" height="40px">
              <use href="./src/images/icons/icons.svg#logo"></use>
            </svg>
            <p>Owoce Sobczak</p></a
          >
        </div>
        </div>
    <nav>
    <ul class="mobile-nav__list">
      <li>
        <a class="mobile-nav__item" href="./index.html">Strona główna</a>
      </li>
      <li>
        <a class="mobile-nav__item" href="./o-nas.html">O nas</a>
      </li>
      <li>
        <a class="mobile-nav__item" href="./oferta.html">Oferta</a>
      </li>
      <li>
        <a class="mobile-nav__item" href="./kontakt.html">Kontakt</a>
      </li>
    </ul>
  </nav>
  
       `;

  function closeMobileModal() {
    document.body.classList.remove("modal-open");
    document.body.removeChild(mobileModal);
    document.removeEventListener("keydown", handleKeyPress);
  }

  function handleKeyPress(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }

  mobileModal.addEventListener("click", (event) => {
    if (event.target.classList.contains("mobile-close-btn")) {
      closeMobileModal();
    }
  });

  document.addEventListener("keydown", handleKeyPress);

  document.body.appendChild(mobileModal);
}
