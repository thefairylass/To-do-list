const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (text !== '') {
    const li = document.createElement('li');
    li.textContent = text;

    li.addEventListener('click', () => {
      li.classList.toggle('done');
    });

    todoList.appendChild(li);
    input.value = '';
  }
});