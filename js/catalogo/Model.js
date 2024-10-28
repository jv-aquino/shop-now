export const ModelCatalogo = (() => {
  const carrinho = [];

  if (!localStorage.getItem('carrinho')) {
    localStorage.setItem('carrinho', carrinho)
  }

  function addCarrinho(slimeId) {
    if (carrinho.includes(slimeId)) {
      return false;
    }
    carrinho.append(slimeId);
    localStorage.setItem('carrinho', carrinho);

    return carrinho.length;
  }
  function removerCarrinho(slimeId) {
    if (!carrinho.includes(slimeId)) {
      return false;
    }
    carrinho.splice(carrinho.indexOf(slimeId));
    localStorage.setItem('carrinho', carrinho);

    return carrinho.length;
  }

  return {
    addCarrinho,
    removerCarrinho
  }
})()