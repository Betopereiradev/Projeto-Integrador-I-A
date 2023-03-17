function filtrar() {
  // Pega a entrada no campo de pesquisa
  const query = document.getElementById("filtro").value.toLowerCase();

  // Pega os cards
  const cards = document.getElementsByClassName("card");

  // Loop para percorrer todos os cards e pegar os relacionados à pesquisa
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const titulo = card.querySelector(".card-titulo").textContent.toLowerCase();
    const conteudo = card
      .querySelector(".card-conteudo")
      .textContent.toLowerCase();
    const matches = titulo.includes(query) || conteudo.includes(query);

    // Mostra ou esconde o card de acordo com a pesquisa
    card.style.display = matches ? "" : "none";
  }
}

const filtroInput = document.getElementById("filtro");
filtroInput.addEventListener("input", filtrar);
