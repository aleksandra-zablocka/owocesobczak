const productList = document.querySelector(".products__list");

fetch("./src/datasource/apples.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((apple) => {
      const listItem = document.createElement("li");
      listItem.classList.add("products__item");

      listItem.innerHTML = `
        <figure class="product__figure">
          <img class="products__image" src="${apple.img}" alt="${apple.alt}" /> 
          <figcaption class="product__figcaption">${apple.name}</figcaption>
        </figure>
      `;

      listItem.addEventListener("click", () => {
        showModal(apple);
      });

      productList.appendChild(listItem);
    });
  });

function showModal(apple) {
  const appleBackdrop = document.createElement("div");
  appleBackdrop.classList.add("apple-backdrop");

  const appleModal = document.createElement("div");
  appleModal.classList.add("apple-modal");

  appleModal.innerHTML = `
   <span class="closeBtn">&times;</span>
       <h3 class="apple-title">${apple.name}</h3>
       <p>Kolor: ${apple.color}</p>
       <p>Klasa: ${apple.class}</p>
       <img src="${apple.img}" alt="${apple.alt}">
     `;

  function closeModal() {
    document.body.removeChild(appleBackdrop);
    document.removeEventListener("keydown", handleKeyPress);
  }

  function handleKeyPress(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }

  appleBackdrop.addEventListener("click", (event) => {
    if (event.target === appleBackdrop || event.target.classList.contains("closeBtn")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", handleKeyPress);

  appleBackdrop.appendChild(appleModal);
  document.body.appendChild(appleBackdrop);
}
