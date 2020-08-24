var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
  'Fazer café',
  'Estudar Javascript',
  'Acessar comunidade da Rocketseat'
];

function renderTodos() {

  //limpeza de todos os itens da lista, antes de renderizar
  listElement.innerHTML = '';

  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  var todoText = inputElement.value;

  // tratamento para não incluir item vazio na lista
  if (todoText !== '') {
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
  }
}

buttonElement.onclick = addTodo;