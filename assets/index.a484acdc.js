(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const i=[],u=({input:d,todos:t,done:r,todo:l,send:e,all:n})=>{console.log(i),t.innerHTML="",e.addEventListener("click",()=>{if(d.value==="")return alert("Veuillez entrer une t\xE2che");i.push({title:d.value,checked:!1}),d.value="",i.map((o,c)=>{t.innerHTML+=`
            <li class="todos">
                <input type="checkbox" id="todo-${c}" >
                <label for="todo-${c}">${o.title}</label>
            </li>
            `,document.getElementById(`todo-${c}`).addEventListener("click",()=>{i[c].checked=!i[c].checked,console.log(i)})})}),r.addEventListener("click",()=>{t.innerHTML="",s(i.filter(o=>o.checked),t)}),l.addEventListener("click",()=>{t.innerHTML="",s(i.filter(o=>o.checked===!1),t)}),n.addEventListener("click",()=>{t.innerHTML="",s(i,t)})};function s(d,t){todos.innerHTML="",d.map((r,l)=>{t.innerHTML+=`
                <li class="todos">
                    <input type="checkbox" id="todo-${l}" >
                    <label for="todo-${l}">${r.title}</label>
                </li>
                `})}document.querySelector("#app").innerHTML=`
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
`;u({input:document.getElementById("inputs"),todos:document.getElementById("todos"),done:document.getElementById("done"),todo:document.getElementById("todo"),send:document.getElementById("send"),all:document.getElementById("all")});
