const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const li = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const storeText = todoInput.value;
  todoInput.value = "";
  const newEle = document.createElement("li");
  const textHtml = ` <span class="text">${storeText}</span>
      <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
      </div>`;

  newEle.innerHTML = textHtml;

  li.append(newEle);
});

li.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    const rem = e.target.parentNode.parentNode;
    rem.remove();
  }

  if (e.target.classList.contains("done")) {
    const don = e.target.parentNode.perviousElementSibling;
    don.style.textDecoration = "underline";
  }
});
