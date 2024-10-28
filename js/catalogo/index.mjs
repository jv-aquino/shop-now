import { ModelCatalogo } from "./Model.mjs";
import { ViewCatalogo } from "./View.mjs";
import { slimes } from "../../assets/data/slimes.mjs";

export const ControllerCatalogo = (() => {
  function loadProdutos() {
    for (let slime of slimes) {
      ViewCatalogo.addSlime(slime)
    }
  }

  function loadEmail() {
    return ViewCatalogo.updateEmail(ModelCatalogo.getFilteredEmail())
  }

  function alterarSlimeCarrinho(e) {
    const slimeId = Number(e.target.id);
    const isAdd = e.target.getAttribute('data-isAdd') === 'true' ? true : false;

    if (isAdd) {
      return ViewCatalogo.updateCarrinho(ModelCatalogo.addCarrinho(slimeId), isAdd, String(slimeId));
    }
    return ViewCatalogo.updateCarrinho(ModelCatalogo.removerCarrinho(slimeId), isAdd, String(slimeId));
  }

  return {
    loadProdutos,
    loadEmail,
    alterarSlimeCarrinho
  }
})()