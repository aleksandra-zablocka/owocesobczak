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
          <use href="../src/images/icons/icons.svg#logo"></use>
        </svg>
        <p>Owoce Sobczak</p></a
      >
    </div>
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
