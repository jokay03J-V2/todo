const todosList = [];

export const setupTodos = ({ input, todos, done, todo, send, all }) => {
  console.log(todosList);
  todos.innerHTML = ``;
  send.addEventListener("click", () => {
    if (input.value === "") return alert("Veuillez entrer une tâche");
    todosList.push({ title: input.value, checked: false });
    input.value = "";

    renderList(todosList, todos);

    todosList.map((todo, index) => {
      // let id = index;
      // todos.innerHTML += `
      //       <li class="todos">
      //           <input type="checkbox" id="todo-${id}" >
      //           <label for="todo-${id}">${todo.title}</label>
      //       </li>
      //       `;
      // document.getElementById(`todo-${id}`).addEventListener("click", () => {
      //   todosList[id].checked = !todosList[id].checked;
      //   // console.log(todosList[id]);
      //   console.log(todosList);
      // });
    });
    console.log(todosList);
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
                    <input type="checkbox" id="todo-${index}" ${todosList[index].checked ? "checked" : ""}>
                    <label for="todo-${index}">${todo.title}</label>
                </li>
                `;
        });
      for(let i = 0; i < todosList.length; i++) {
        document.getElementById(`todo-${i}`).addEventListener("click", () => {
          todosList[i].checked = !todosList[i].checked;
          console.log(todosList[i]);
        });
      }
}