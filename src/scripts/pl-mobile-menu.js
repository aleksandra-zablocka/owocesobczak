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
  <a class="logo" href="./index.html"
  ><img
    src="./src/images/logo/LOGO_SB_KOLOR_1280X1280.png"
    width="60px"
    height="60px"
    alt="logo Owoce Sobczak"
  />
</a>
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
