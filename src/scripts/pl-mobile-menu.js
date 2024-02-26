const mobileButton = document.querySelector(".mobile__button");

mobileButton.addEventListener("click", () => {
  showMobileModal();
});

function showMobileModal() {
  document.body.classList.add("modal-open");

  const mobileModal = document.createElement("div");
  mobileModal.classList.add("mobile-modal");

  mobileModal.innerHTML = `
  <header>
  <div class="header-container container">
  <span class="mobile-close-btn">&times;</span>
    <div class="logo">
      <a class="logo__details" href="./index.html"
        ><svg class="logo__icon" width="40px" height="40px">
          <use href="./src/images/icons/icons.svg#logo"></use>
        </svg>
        <p>Owoce Sobczak</p></a
      >
    </div>
    <div class="languages--mobile">
          <a href="./index.html"> <img class="lang__icon--mobile" src="./src/images/languages/poland.gif" /></a>
          <a href="./en/index.html"> <img class="lang__icon--mobile" src="./src/images/languages/uk.gif" /></a>
          <a href="./de/index.html"> <img class="lang__icon--mobile" src="./src/images/languages/germany.gif" /></a>
    </div>
    </header>
    
    <div>
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
    </div>
  </div>
  `;

  function closeMobileModal() {
    document.body.classList.remove("modal-open");
    document.body.removeChild(mobileModal);
    document.removeEventListener("keydown", handleKeyPress);
  }

  function handleKeyPress(event) {
    if (event.key === "Escape") {
      closeMobileModal();
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
