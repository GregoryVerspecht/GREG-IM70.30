/* ==================================================================
   TODO.JS — persoonlijke to-do lijst voor de admin-pagina.
   Opgeslagen in localStorage van JOUW browser/toestel (niet gedeeld,
   niet gesynchroniseerd tussen toestellen — puur lokaal & privé).
   ================================================================== */

const TODO_KEY = "im703_todo";

function loadTodos() {
  const raw = localStorage.getItem(TODO_KEY);
  if (raw) return JSON.parse(raw);
  const defaults = window.CONFIG.todoDefaults.map((txt) => ({ txt, done: false }));
  localStorage.setItem(TODO_KEY, JSON.stringify(defaults));
  return defaults;
}

function saveTodos(items) {
  localStorage.setItem(TODO_KEY, JSON.stringify(items));
}

function renderTodos() {
  const items = loadTodos();
  const list = document.getElementById("todo-list");
  list.innerHTML = "";
  items.forEach((item, idx) => {
    const li = document.createElement("li");
    if (item.done) li.classList.add("done");
    li.innerHTML = `
      <input type="checkbox" ${item.done ? "checked" : ""} data-idx="${idx}" class="todo-check" />
      <span class="txt">${item.txt}</span>
      <button class="del" data-idx="${idx}" title="Verwijder">&times;</button>
    `;
    list.appendChild(li);
  });

  list.querySelectorAll(".todo-check").forEach((cb) => {
    cb.addEventListener("change", () => {
      const items = loadTodos();
      items[cb.dataset.idx].done = cb.checked;
      saveTodos(items);
      renderTodos();
    });
  });
  list.querySelectorAll(".del").forEach((btn) => {
    btn.addEventListener("click", () => {
      const items = loadTodos();
      items.splice(btn.dataset.idx, 1);
      saveTodos(items);
      renderTodos();
    });
  });
}

function renderPage() {
  renderTodos();
  renderStrategy();
  const form = document.getElementById("todo-add-form");
  const input = document.getElementById("todo-add-input");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const txt = input.value.trim();
    if (!txt) return;
    const items = loadTodos();
    items.push({ txt, done: false });
    saveTodos(items);
    input.value = "";
    renderTodos();
  });
}
