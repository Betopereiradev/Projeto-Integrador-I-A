const modal = document.querySelectorAll(".modal");
const botaoAbrir = document.querySelectorAll(".abrirModal");
const botaoFechar = document.querySelectorAll(".fecharModal");

botaoAbrir.forEach((abrirModal) => {
  abrirModal.addEventListener("click", function () {
    const modalId = this.getAttribute("data-modal-id");
    const modal = document.getElementById(modalId);
    modal.classList.add("aberto");
  });
});

botaoFechar.forEach((fecharModal) => {
  fecharModal.addEventListener("click", function () {
    const modal = this.closest(".modal");
    modal.classList.remove("aberto");
  });
});

function filtrar() {
  // Obtém o valor digitado pelo usuário
  const query = document.getElementById("filtro").value.toLowerCase();

  // Obtém todos os cards da página
  const cards = document.getElementsByClassName("card");

  // Percorre todos os cards e verifica se eles correspondem à pesquisa
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const titulo = card.querySelector(".card-titulo").textContent.toLowerCase();
    const conteudo = card
      .querySelector(".card-conteudo")
      .textContent.toLowerCase();
    const matches = titulo.includes(query) || conteudo.includes(query);

    // Oculta ou exibe o card conforme a correspondência com a pesquisa
    card.style.display = matches ? "" : "none";
  }
}

const filtroInput = document.getElementById("filtro");
filtroInput.addEventListener("input", filtrar);
