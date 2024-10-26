export const ViewAuth = (() => {
  function showApproved(user) {
    console.log("Login Aprovado!")
    console.log("Email: " + user.email)
    console.log("Senha: " + user.senha)
  }
  function showReproved(erro, user) {
    alert("Erro ao efetuar login: " + erro);
    if (user) {
      alert("Email: " + user.email + "\nSenha: " + user.senha)
    }
  }

  return {
    showApproved, 
    showReproved
  }
})()