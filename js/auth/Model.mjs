export const ModelAuth = (() => {
  function login(user) {
    try {
      localStorage.setItem('user', JSON.stringify({ email: user.email, senha: user.senha, carrinho: [] }))
      return true;
    } catch (e) {
      return e;
    }
  }

  function isLogged() {
    const isLoggedJson = localStorage.getItem('user')

    if (!isLoggedJson) {
      return false;
    }
    return true;
  }

  function logout() {
    try {
      localStorage.removeItem('user')
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