const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const ulTodo = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodotext = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerhtml = ` <span type="text">${newTodotext}</span>
  <div class="todo-btns">
      <button class="complete-btn "><i class="fas fa-check done"></i></button><button class="trash-btn"><i class="fas fa-trash remove"></i></button>
  </div>`;
  newLi.innerHTML = newLiInnerhtml;
  ulTodo.append(newLi);

  todoInput.value = "";
});

ulTodo.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    const TargetedLi = e.target.parentNode.parentNode.parentNode;
    TargetedLi.remove();
  }
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
}); /*window.onload = function () {

/*const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const ulTodo = document.querySelector(".todo-list");

function saveTodoListToLocalStorage() {
  const todoListItems = ulTodo.innerHTML;
  localStorage.setItem("todoListItems", todoListItems);
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodotext = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerhtml = ` <span type="text">${newTodotext}</span>
  <div class="todo-btns">
      <button class="complete-btn "><i class="fas fa-check done"></i></button><button class="trash-btn"><i class="fas fa-trash remove"></i></button>
  </div>`;
  newLi.innerHTML = newLiInnerhtml;
  ulTodo.append(newLi);
  //console.log(newLi);
  todoInput.value = "";
  saveTodoListToLocalStorage();
});
ulTodo.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    const TargetedLi = e.target.parentNode.parentNode.parentNode;
    TargetedLi.remove();
    saveTodoListToLocalStorage();
  }
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
    saveTodoListToLocalStorage();
  }
});

function loadTodoListFromLocalStorage() {
  const todoListItems = localStorage.getItem("todoListItems");
  if (todoListItems) {
    ulTodo.innerHTML = todoListItems;
  }
}

/*window.addEventListener("load", loadTodoListFromLocalStorage);
  var defaultItem = document.getElementById("default-item");
  defaultItem.parentNode.removeChild(defaultItem);
};*/
