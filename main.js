import "./style.css";
import { setupTodos } from "./todos";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>todo-list</h1>
    <div id="container">
      <div class="inputs">
        <input id="inputs"></input>
        <button id="send">ajouter</button>
      </div>
      <div class="todos_container"><ul id="todos"></ul></div>
      <div id="buttons">
      <button id="done">done</button>
      <button id="todo">todo</button>
      <button id="all">all</button>
      </div>
    </div>
  </div>
`;

setupTodos({
  input: document.getElementById("inputs"),
  todos: document.getElementById("todos"),
  done: document.getElementById("done"),
  todo: document.getElementById("todo"),
  send: document.getElementById("send"),
  all: document.getElementById("all"),
});
