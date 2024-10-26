export const ViewAuth = (() => {
  function showApproved(email, senha) {
    console.log("Login Aprovado!")
    console.log("Email: " + email)
    console.log("Senha: " + senha)
  }
  function showReproved(erro) {
    alert("Erro ao efetuar login: " + erro);
    alert("Email: " + email + "\nSenha: " + senha)
  }

  return {
    showApproved, 
    showReproved
  }
})()