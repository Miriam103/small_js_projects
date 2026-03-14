function createTodoElement(todo) {
  const newListItem = document.createElement("li");
  newListItem.classList.add("todo-li-item");

  // add html structure for todo element
  const div = document.createElement("div");
  div.classList.add("todo-item");

  const p = document.createElement("p");
  p.textContent = todo;

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("change", function () {
    p.classList.toggle("done");
  });

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "🗑";
  deleteButton.addEventListener("click", function () {
    newListItem.remove();
  });

  div.appendChild(checkbox);
  div.appendChild(p);
  div.appendChild(deleteButton);

  newListItem.appendChild(div);
  return newListItem;
}

function addTodoElement(value) {
  if (value) {
    todoList.append(createTodoElement(value));
  }
}

// array with the initial todos
const todos = ["grocery shopping", "vacuuming"];

// add all initial todos to the todo list
const todoList = document.querySelector(".todolist");
todos.forEach(function (todo) {
  todoList.appendChild(createTodoElement(todo));
});

// add input event for new todo item
const todoInput = document.querySelector("#todo-input");
todoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodoElement(todoInput.value);
    todoInput.value = "";
  }
});
