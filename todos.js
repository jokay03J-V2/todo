const todosList = [];

export const setupTodos = ({ input, todos, done, todo, send, all }) => {
  console.log(todosList);
  todos.innerHTML = ``;
  send.addEventListener("click", () => {
    if (input.value === "") return alert("Veuillez entrer une tâche");
    todosList.push({ title: input.value, checked: false });
    input.value = "";

    todosList.map((todo, index) => {
      todos.innerHTML += `
            <li class="todos">
                <input type="checkbox" id="todo-${index}" >
                <label for="todo-${index}">${todo.title}</label>
            </li>
            `;
      document.getElementById(`todo-${index}`).addEventListener("click", () => {
        todosList[index].checked = !todosList[index].checked;
        console.log(todosList);
      });
    });
  });

  done.addEventListener("click", () => {
    todos.innerHTML = "";
    renderList(todosList.filter((todo) => todo.checked), todos);
  });

  todo.addEventListener("click", () => {
    todos.innerHTML = "";
      renderList(todosList.filter((todo) => todo.checked === false),todos)
  });

  all.addEventListener("click", () => {
    todos.innerHTML = "";
    renderList(todosList,todos);
  });
};

function renderList(todosList,todos_container) {
    todos.innerHTML = "";
    todosList
        .map((todo, index) => {
        todos_container.innerHTML += `
                <li class="todos">
                    <input type="checkbox" id="todo-${index}" >
                    <label for="todo-${index}">${todo.title}</label>
                </li>
                `;
        });
}