const mobileButton = document.querySelector(".mobile__button");

mobileButton.addEventListener("click", () => {
  showMobileModal();
});

function showMobileModal() {
  // const mobileBackdrop = document.createElement("div");
  // mobileBackdrop.classList.add("mobile-backdrop");

  const mobileModal = document.createElement("div");
  mobileModal.classList.add("mobile-modal");

  mobileModal.innerHTML = `
    <span class="mobileCloseBtn">&times;</span>

    <div class="mobileContainer">
        <div class="logo">
          <a class="logo__details" href="./index.html"
            ><svg class="logo__icon" width="40px" height="40px">
              <use href="./src/images/icons/icons.svg#logo"></use>
            </svg>
            <p>Owoce Sobczak</p></a
          >
        </div>

    <nav>
    <ul class="mobileNavigation__list">
      <li>
        <a class="mobileNavigation__item" href="./index.html">Strona główna</a>
      </li>
      <li>
        <a class="mobileNavigation__item" href="./o-nas.html">O nas</a>
      </li>
      <li>
        <a class="mobileNavigation__item" href="./oferta.html">Oferta</a>
      </li>
      <li>
        <a class="mobileNavigation__item" href="./kontakt.html">Kontakt</a>
      </li>
    </ul>
  </nav>
  </div>
       `;

  function closeMobileModal() {
    document.body.removeChild(mobileModal);
    document.removeEventListener("keydown", handleKeyPress);
  }

  function handleKeyPress(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }

  mobileModal.addEventListener("click", (event) => {
    if (event.target.classList.contains("mobileCloseBtn")) {
      closeMobileModal();
    }
  });

  document.addEventListener("keydown", handleKeyPress);

  document.body.appendChild(mobileModal);
}
