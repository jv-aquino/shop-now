import { ControllerCatalogo } from ".";

export const ViewCatalogo = (() => {
  const slimesDOM = document.getElementById('#slimes');
  const carrinhoDOM = document.getElementById('#carrinho');

  function addSlime(slime) {
    const slimeComponent = document.createElement('div');
    slimeComponent.innerHTML = `<img src='${slime.src}' alt='${slime.descricao}' />`;
    slimeComponent.innerHTML += `<h2>Slime ${slime.nome}</h2>`;
    slimeComponent.innerHTML += `<p>Slime ${slime.nome}</h1>`;

    const botao = document.createElement('button')
    botao.id = slime.id
    botao.textContent = 'Adicionar ao carrinho';
    botao.addEventListener('click', ControllerCatalogo.alterarSlimeCarrinho)
    slimeComponent.appendChild(botao)
    
    slimeComponent.classList.add('slimeCard');

    slimesDOM.appendChild(slimeComponent);
  }

  function updateCarrinho(number, isAdd, buttonId) {
    const buttonDOM = document.getElementById(buttonId);
    buttonDOM.setAttribute('data-isAdd', isAdd ? 'false' : 'true');

    if (isAdd) {
      buttonDOM.classList.add('remover')
    } else {
      buttonDOM.classList.remove('remover')
    }

    carrinhoDOM.textContent = number;
  }

  return {
    addSlime,
    updateCarrinho
  }
})()