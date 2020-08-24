var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// inicia vetor com itens armazenados localmente ou valor padrão vazio para vetor
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {

  // limpeza de todos os itens da lista, antes de renderizar
  listElement.innerHTML = '';

  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');

    var pos = todos.indexOf(todo);

    // ao clicar no link, será removido item da lista
    linkElement.setAttribute('onClick', 'deleteTodo(' + pos + ')');

    var linkText = document.createTextNode("Excluir");

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
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
    saveToStorage();
  }
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {

  // removerá quantidades de itens de array, conforme posição inicial indicada
  todos.splice(pos, 1);

  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}