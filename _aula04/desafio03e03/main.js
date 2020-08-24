var list = document.querySelector('ul');
var input = document.querySelector('input');
var botao = document.querySelector('button');


function buscarReps(repositorios) {
  list.innerHTML = '';

  for (rep of repositorios) {
    const text = document.createTextNode(rep.name);
    const item = document.createElement('li');

    item.appendChild(text);
    list.appendChild(item);
  }
}

function exibeCarregamento() {
  list.innerHTML = '';

  var text = document.createTextNode('Carregando...');
  var status = document.createElement('li');

  status.style.color = '#0000FF';

  status.appendChild(text);
  list.appendChild(status);
}

function exibeErro() {
  list.innerHTML = '';

  var text = document.createTextNode('Erro!');
  var erro = document.createElement('li');

  erro.style.color = '#FF0000';

  erro.appendChild(text);
  list.appendChild(erro);
}

function listarReps() {
  list.innerHTML = '';

  var username = input.value;

  if (username !== '') {

    exibeCarregamento();

    axios.get('https://api.github.com/users/' + username + '/repos')
      .then(function (response) {
        buscarReps(response.data);
      })
      .catch(function () {
        exibeErro();
      })
    ;
  }
}

botao.onclick = listarReps;