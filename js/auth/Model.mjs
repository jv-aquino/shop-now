export const ModelAuth = (() => {
  function login(user) {
    try {
      localStorage.setItem(user.email, { senha: user.senha, carrinho: [] })
      localStorage.setItem('isLogged', true)
      return true;
    } catch (e) {
      return e;
    }
  }

  function isLogged() {
    const isLoggedJson = localStorage.getItem('isLogged')

    if (!isLoggedJson) {
      return false;
    }

    const isLogged = JSON.parse(isLoggedJson)

    if (isLogged === true) {
      return true;
    } 
    return false;
  }

  function logout(user) {
    try {
      localStorage.removeItem(user.email)
      return true;
    } catch (e) {
      return e;
    }
  }

  return { 
    login,
    isLogged,
    logout
   }
})()