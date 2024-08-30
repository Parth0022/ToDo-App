document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo();
    });

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') return;

        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        const todoTextSpan = document.createElement('span');
        todoTextSpan.textContent = todoText;
        todoTextSpan.addEventListener('click', () => {
            todoItem.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '&times;';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });

        todoItem.appendChild(todoTextSpan);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);

        todoInput.value = '';
    }
});
