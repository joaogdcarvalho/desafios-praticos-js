var list = document.querySelector('ul');
var input = document.querySelector('input');
var botao = document.querySelector('button');


function buscarReps(repositorios) {
  for (rep of repositorios) {
    const text = document.createTextNode(rep.name);
    const item = document.createElement('li');

    item.appendChild(text);
    list.appendChild(item);
  }
}

function listarReps() {
  
  list.innerHTML = '';

  var username = input.value;

  if (username !== '') {
    axios.get('https://api.github.com/users/' + username + '/repos')
      .then(function (response) {
        buscarReps(response.data);
      }
    )
  }
}

botao.onclick = listarReps;