const serviceList = document.querySelector(".services__list");

fetch("../src/datasource/en-services.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((service) => {
      const serviceItem = document.createElement("li");
      serviceItem.classList.add("services__item");

      serviceItem.innerHTML = `
        <figure class="services__figure">
          <img class="services__image" src="${service.img}" alt="${service.alt}" /> 
          <figcaption class="services__figcaption">${service.type}</figcaption>
        </figure>
      `;

      serviceItem.addEventListener("click", () => {
        showModalService(service);
      });

      serviceList.appendChild(serviceItem);
    });
  });

function showModalService(service) {
  const serviceBackdrop = document.createElement("div");
  serviceBackdrop.classList.add("service-backdrop");

  const serviceModal = document.createElement("div");
  serviceModal.classList.add("service-modal");

  serviceModal.innerHTML = `
   <span class="close-btn">&times;</span>
       <h3 class="service-title">${service.type}</h3>
       <div class="service-description">
       <p>${service.description}</p>
       </div>
       <img src="${service.img}" alt="${service.alt}">
     `;

  function closeModal() {
    document.body.removeChild(serviceBackdrop);
    document.removeEventListener("keydown", handleKeyPress);
  }

  function handleKeyPress(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }

  serviceBackdrop.addEventListener("click", (event) => {
    if (event.target === serviceBackdrop || event.target.classList.contains("close-btn")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", handleKeyPress);

  serviceBackdrop.appendChild(serviceModal);
  document.body.appendChild(serviceBackdrop);
}
