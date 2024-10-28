export const ModelCatalogo = (() => {
  const carrinho = [];

  if (!localStorage.getItem('carrinho')) {
    localStorage.setItem('carrinho', carrinho)
  }

  function addCarrinho(slimeId) {
    if (carrinho.includes(slimeId)) {
      return false;
    }
    carrinho.push(slimeId);
    localStorage.setItem('carrinho', carrinho);

    return carrinho.length;
  }
  function removerCarrinho(slimeId) {
    if (!carrinho.includes(slimeId)) {
      return false;
    }
    carrinho.splice(carrinho.indexOf(slimeId), 1);
    localStorage.setItem('carrinho', carrinho);

    return carrinho.length;
  }

  function getFilteredEmail() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.email.split('@')[0]
  }

  return {
    addCarrinho,
    removerCarrinho,
    getFilteredEmail
  }
})()