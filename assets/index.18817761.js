(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function u(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=u(e);fetch(e.href,n)}})();const d=[],f=({input:r,todos:t,done:u,todo:c,send:e,all:n})=>{console.log(d),t.innerHTML="",e.addEventListener("click",()=>{if(r.value==="")return alert("Veuillez entrer une t\xE2che");d.push({title:r.value,checked:!1}),r.value="",i(d,t),u.addEventListener("click",()=>{t.innerHTML="",i(d.filter(o=>o.checked),t)})}),c.addEventListener("click",()=>{t.innerHTML="",i(d.filter(o=>o.checked===!1),t)}),n.addEventListener("click",()=>{t.innerHTML="",i(d,t)});function i(o,a){t.innerHTML="",o.map((l,s)=>{a.innerHTML+=`
                <li class="todos">
                    <input type="checkbox" id="todo-${s}" ${o[s].checked?"checked":""}>
                    <label for="todo-${s}">${l.title}</label>
                </li>
                `});for(let l=0;l<o.length;l++)document.getElementById(`todo-${l}`).addEventListener("click",()=>{o[l].checked=!o[l].checked,console.log(o[l])})}};document.querySelector("#app").innerHTML=`
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
`;f({input:document.getElementById("inputs"),todos:document.getElementById("todos"),done:document.getElementById("done"),todo:document.getElementById("todo"),send:document.getElementById("send"),all:document.getElementById("all")});
