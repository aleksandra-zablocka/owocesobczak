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
    src="../src/images/logo/LOGO_SB_KOLOR_1280X1280.png"
    alt="Owoce Sobczak logo"
  />
</a>
    <div class="languages--mobile">
          <a href="../index.html"> <img class="lang__icon--mobile" src="../src/images/languages/poland.gif" /></a>
          <a href="./index.html"> <img class="lang__icon--mobile" src="../src/images/languages/uk.gif" /></a>
          <a href="./de/index.html"> <img class="lang__icon--mobile" src="../src/images/languages/germany.gif" /></a>
    </div>
    </header>
    
    <div>
    <ul class="mobile-nav__list">
      <li>
        <a class="mobile-nav__item" href="./index.html">Home</a>
      </li>
      <li>
        <a class="mobile-nav__item" href="./about-us.html">About us</a>
      </li>
      <li>
        <a class="mobile-nav__item" href="./offer.html">Offer</a>
      </li>
      <li>
        <a class="mobile-nav__item" href="./contact.html">Contact</a>
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
