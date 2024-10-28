export const ViewAuth = (() => {
  const popupDOM = document.getElementById('popupContainer');
  const popupEmailDOM = document.getElementById('popupEmail');
  const popupSenhaDOM = document.getElementById('popupSenha');
  const popupReticenciasDOM = document.getElementById('popupReticencias');
  
  function showApproved(user) {
    console.log("Login Aprovado!")
    console.log("Email: " + user.email)
    console.log("Senha: " + user.senha);

    popupDOM.classList.add('view')
    popupEmailDOM.textContent = user.email
    popupSenhaDOM.textContent = user.senha

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