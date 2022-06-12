/*MVC Code Structure Used*/
//Model
const input = document.getElementById('todo-title');
const list = document.getElementById('todo-list');
const addBtn = document.getElementById('addTodo');
const datePicker = document.getElementById('pick-date');
let todos = [];
let id = 0;
//Creates a todo
function createTodo(todo){
  todo = {
    title: input.value,
    date: datePicker.value,
    id: '' + id
  };
  id++;
  todos.push(todo);
  saveTodos();
}
//Removes a todo
function removeTodo(idToDelete){
  todos = todos.filter(todo => todo.id.toString() !== idToDelete);
  saveTodos();
}
//Saves todos
function saveTodos(){
    localStorage.setItem("Todos", JSON.stringify(todos));
}
//Retrieves todos
function retrieveTodos(){
    todos = JSON.parse(localStorage.getItem("Todos"));
}
function initializeStorage(){
  localStorage.setItem("Todos", JSON.stringify(todos));
}

//View
render();

function render(){
  list.innerHTML = "";
  initializeStorage();
  retrieveTodos();
  todos.forEach(function (todo){
    const todoContainer = document.createElement('div');
    const deleteBtn = document.createElement('button');
    todoContainer.innerText = todo.title + " " + todo.date;
    deleteBtn.innerText = 'Delete';
    deleteBtn.style = "margin-left: 12px";
    deleteBtn.onclick = deleteTodo;
    deleteBtn.id = todo.id;
    list.appendChild(todoContainer);
    todoContainer.appendChild(deleteBtn);
  });
}
//Control
addBtn.addEventListener("click", function (){
  addTodo();
});

function addTodo(){
  const todo = {};
  createTodo(todo)
  input.value = "";
  render();
}

function deleteTodo(event){
  const idToDelete = event.target.id;
  removeTodo(idToDelete);
  render();
}
