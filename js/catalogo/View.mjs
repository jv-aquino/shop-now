import { ControllerCatalogo } from "./index.mjs";

export const ViewCatalogo = (() => {
  const navItensDOM = document.getElementById('navItens');

  const carrinhoDOM = document.getElementById('carrinho');
  const userEmailDOM = document.getElementById('userEmail');
  const slimesDOM = document.getElementById('slimes');
  
  const popupDOM = document.getElementById('popupContainer');
  const popupReticenciasDOM = document.getElementById('popupReticencias');

  function addSlime(slime) {
    const slimeComponent = document.createElement('div');
    slimeComponent.innerHTML = `<img src='./assets/images/slimes/${slime.src}' alt='${slime.descricao}' />`;
    slimeComponent.innerHTML += `<h2>Slime ${slime.nome} <span class='preco'>- $${slime.preco}</span></h2>`;
    slimeComponent.innerHTML += `<p>${slime.descricao}</p>`;

    const botao = document.createElement('button')
    botao.id = slime.id;
    botao.textContent = 'Adicionar ao Carrinho';
    botao.setAttribute('data-isAdd', 'true');
    botao.addEventListener('click', ControllerCatalogo.alterarSlimeCarrinho)
    slimeComponent.appendChild(botao)

    slimeComponent.classList.add('slimeCard');

    slimesDOM.appendChild(slimeComponent);
  }

  function updateCarrinho(number, isAdd, buttonId) {
    const buttonDOM = document.getElementById(buttonId);
    buttonDOM.setAttribute('data-isAdd', isAdd ? 'false' : 'true');

    if (isAdd) {
      buttonDOM.textContent = 'Remover do Carrinho';
      buttonDOM.classList.add('remover')
    } else {
      buttonDOM.textContent = 'Adicionar ao Carrinho'
      buttonDOM.classList.remove('remover')
    }

    carrinhoDOM.textContent = number;
  }

  function updateEmail(email) {
    userEmailDOM.textContent = email
  }

  function showLogout() {
    popupDOM.classList.add('view')

    const pri = setTimeout(() => {
      popupReticenciasDOM.textContent = '.'
    }, 500)
    const seg = setTimeout(() => {
      clearTimeout(pri)
      popupReticenciasDOM.textContent = '..'
    }, 1500)
    const ter = setTimeout(() => {
      clearTimeout(seg)
      popupReticenciasDOM.textContent = '...'
    }, 2500)
    setTimeout(() => {
      clearTimeout(ter)
      popupReticenciasDOM.textContent = '....'
    }, 3500)
  }

  function toggleNav() {
    if (navItensDOM.classList.contains('view')) {
      navItensDOM.classList.remove('view');
    } else {
      navItensDOM.classList.add('view')
    }
  }

  return {
    addSlime,
    updateCarrinho,
    updateEmail,
    showLogout,
    toggleNav
  }
})()