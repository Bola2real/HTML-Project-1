function updateTotal() {
    const cards = document.querySelectorAll(".card-body");
    let total = 0;
  
    cards.forEach((card) => {
      const price = parseFloat(card.querySelector(".unit-price").textContent);
      const quantity = parseInt(card.querySelector(".quantity").textContent);
      total += price * quantity;
    });
  
    document.querySelector(".total").textContent = total + " $";
  }
  
  document.querySelectorAll(".fa-plus-circle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const quantityEl = btn.nextElementSibling;
      quantityEl.textContent = parseInt(quantityEl.textContent) + 1;
      updateTotal();
    });
  });
  
  document.querySelectorAll(".fa-minus-circle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const quantityEl = btn.previousElementSibling;
      if (parseInt(quantityEl.textContent) > 0) {
        quantityEl.textContent = parseInt(quantityEl.textContent) - 1;
        updateTotal();
      }
    });
  });
  
  document.querySelectorAll(".fa-trash-alt").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".card-body").remove();
      updateTotal();
    });
  });
  
  document.querySelectorAll(".fa-heart").forEach((heart) => {
    heart.addEventListener("click", () => {
      heart.classList.toggle("liked");
    });
  });
  