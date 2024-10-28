import { ModelAuth } from "./Model.mjs";
import { ViewAuth } from "./View.mjs";

function redirect(url) {
  window.location.assign(url);
}

export const ControllerAuth = (() => {
  function restrictRoute(redirectUrl, invert) {
    const isLogged = ModelAuth.isLogged();
    if (!isLogged && !invert) {
      redirect(redirectUrl)
    } else if (isLogged && invert) {
      redirect(redirectUrl)
    }
  }

  function login(e) {
    e.preventDefault();

    const formData = new FormData(e.target)
    const user = {
      email: formData.get("email"),
      senha: formData.get("senha")
    }

    if (!user.email || !user.senha) {
      return ViewAuth.showReproved('Email ou senha vazios')
    } else if (user.senha.length < 8) {
      return ViewAuth.showReproved('Senha com menos de 8 caracteres', user)
    }

    if (ModelAuth.login(user)) {
      setTimeout(() => {
        window.location.assign('/index.html')
      }, 4100)

      return ViewAuth.showApproved(user)
    }
    return ViewAuth.showReproved('Problema do servidor', user)
  }

  return {
    restrictRoute,
    login,
  }
})()