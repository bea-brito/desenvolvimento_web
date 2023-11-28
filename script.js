document.getElementById('login-form').addEventListener('submit', function(event) {
  if (!this.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  this.classList.add('was-validated');
});
// Barra de busca
function redirect() {
  // Obtém o valor digitado na caixa de pesquisa
  let digitado = $('#searchInput').val().toLowerCase();

  // Verifica o valor e redireciona para a página correspondente
  switch (digitado) {
    case 'costum':
      window.location.href = 'costum.html';
      break;
    case 'motos':
    case 'moto':
      window.location.href = 'index.html';
      break;
    case 'driver':
    case 'drivers':
      window.location.href = 'driver.html';
      break;
    case 'vespas':
    case 'vespa':
      window.location.href = 'vespas.html';
      break;
    default:
      // Redireciona para uma página padrão se nenhum termo correspondente for encontrado
      alert("Página não encontrada!");
      alert(" Busque por nossas motos Costum, Driver ou Vespas");
      break;
  }
}


