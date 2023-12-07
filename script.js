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

axios.get('http://localhost:3000/cliente')
  .then(function (response) {
    document.getElementById('exibir').innerHTML = response.data.map(function (cliente) {
      return (
        '<tr>' +
        '<td> <a class="btn btn-outline-info btn-sm" href="#" role="button" onclick="javascript:return editarCliente(`' + cliente._id + '`);">Editar</a> </td>' +
        '<th scope="row">' + cliente._id + '</th>' +
        '<td>' + cliente.nome + '</td>' +
        '<td>' + cliente.email + '</td>' +
        '<td>' + cliente.telefone + '</td>' +
        '<td>' + cliente.senha + '</td>' +
        '<td>' + cliente.CEP + '</td>' +
        '<td>' + cliente.rua + '</td>' +
        '<td>' + cliente.complemento + '</td>' +
        '<td>' + cliente.bairro + '</td>' +
        '<td>' + cliente.cidade + '</td>' +
        '<td> <a class="btn btn-outline-danger btn-sm" href="#" role="button" onclick="javascript:return excluirCliente(`' + cliente._id + '`);">Excluir</a> </td>' +
        '</tr>'
      );
    }).join('');
  })
  .catch(function (err) {
    document.getElementById('output').innerHTML = '<div class="alert alert-danger" role="alert">' + err.message + '</div>';
  });

function excluirCliente(id) {
  axios.delete('http://localhost:3000/cliente/' + id + '')
    .then(function (response) {
      location.reload();
    })
    .catch(function (err) {
      document.getElementById("output").innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>' + err.message + '</strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
    });
}

function editarCliente(id) {
  window.location.href = 'formCliente.html?id=' + id + '';
}


axios.get('http://localhost:3000/funcionario')
  .then(function (response) {
    document.getElementById('exibir').innerHTML = response.data.map(function (funcionario) {
      return (
        '<tr>' +
        '<td> <a class="btn btn-outline-info btn-sm" href="#" role="button" onclick="javascript:return editarFuncionario(`' + funcionario._id + '`);">Editar</a> </td>' +
        '<th scope="row">' + funcionario._id + '</th>' +
        '<td>' + funcionario.nome + '</td>' +
        '<td>' + funcionario.funcao + '</td>' +
        '<td>' + funcionario.email + '</td>' +
        '<td>' + funcionario.telefone + '</td>' +
        '<td>' + funcionario.senha + '</td>' +
        '<td>' + funcionario.CEP + '</td>' +
        '<td>' + funcionario.rua + '</td>' +
        '<td>' + funcionario.complemento + '</td>' +
        '<td>' + funcionario.bairro + '</td>' +
        '<td>' + funcionario.cidade + '</td>' +
        '<td> <a class="btn btn-outline-danger btn-sm" href="#" role="button" onclick="javascript:return excluirFuncionario(`' + funcionario._id + '`);">Excluir</a> </td>' +
        '</tr>'
      );
    }).join('');
  })
  .catch(function (err) {
    document.getElementById('output').innerHTML = '<div class="alert alert-danger" role="alert">' + err.message + '</div>';
  });

function excluirFuncionario(id) {
  axios.delete('http://localhost:3000/funcionario/' + id + '')
    .then(function (response) {
      location.reload();
    })
    .catch(function (err) {
      document.getElementById("output").innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>' + err.message + '</strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
    });
}

function editarFuncionario(id) {
  window.location.href = 'formFuncionario.html?id=' + id + '';
}

axios.get('http://localhost:3000/moto')
  .then(function (response) {
    document.getElementById('exibir').innerHTML = response.data.map(function (moto) {
      return (
        '<tr>' +
        '<td> <a class="btn btn-outline-info btn-sm" href="#" role="button" onclick="javascript:return editarMoto(`' + moto._id + '`);">Editar</a> </td>' +
        '<th scope="row">' + moto._id + '</th>' +
        '<td>' + moto.modelo + '</td>' +
        '<td>' + moto.ano + '</td>' +
        '<td>' + moto.preco + '</td>' +
        '<td> <a class="btn btn-outline-danger btn-sm" href="#" role="button" onclick="javascript:return excluirMoto(`' + moto._id + '`);">Excluir</a> </td>' +
        '</tr>'
      );
    }).join('');
  })
  .catch(function (err) {
    document.getElementById('output').innerHTML = '<div class="alert alert-danger" role="alert">' + err.message + '</div>';
  });

function excluirMoto(id) {
  axios.delete('http://localhost:3000/moto/' + id + '')
    .then(function (response) {
      location.reload();
    })
    .catch(function (err) {
      document.getElementById("output").innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>' + err.message + '</strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
    });
}

function editarMoto(id) {
  window.location.href = 'formMoto.html?id=' + id + '';
}