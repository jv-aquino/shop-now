import { ModelAuth } from "./Model.js";
import { ViewAuth } from "./View";

function redirect(url) {
  window.location.assign(url);
}

const ControllerAuth = (() => {

  function restrictRoute() {
    if (!ModelAuth.isLogged()) {
      redirect('/')
    }
  }

  return {
    restrictRoute
  }
})()

const Produto = () => {
  
}

const ControllerCatalogo = (() => {
  const carrinhoItens = {

  }

  function updateCarrinho(qtd) {

  }

  return {
    updateCarrinho
  }
})()