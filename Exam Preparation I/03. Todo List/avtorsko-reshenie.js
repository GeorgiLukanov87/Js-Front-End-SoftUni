const BASE_URL = 'http://localhost:3030/jsonstore/tasks';
const addButton = document.querySelector("#add-button");
const loadButton = document.getElementById('load-button');
const ulElement = document.querySelector("#todo-list");
const inputElement = document.querySelector("#title");

function attachEvents() {
    loadButton.addEventListener('click', loadTasksHandler);
    addButton.addEventListener('click', addTodo);
}

function loadTasksHandler(e) {
    if (e) {
        e.preventDefault();
    }
    ulElement.innerHTML = '';
    fetch(BASE_URL)
        .then((res) => res.json())
        .then((list) => {
            Object.values(list)
                .forEach(({ name, _id }) => {
                    const liItem = createElement('li', '', ulElement);
                    createElement('span', name, liItem);
                    const removeBtn = createElement('button', 'Remove', liItem);
                    removeBtn.id = _id;
                    removeBtn.addEventListener('click', removeTaskHandler);

                    const editBtn = createElement('button', 'Edit', liItem);
                    editBtn.id = _id;
                    editBtn.addEventListener('click', createEditInput);
                })
        })
}

function addTodo(event) {
    event.preventDefault();
    const headers = {
        method: 'POST',
        body: JSON.stringify({ name: inputElement.value })
    };
    if (typeof inputElement.value !== "string" ||
        inputElement.value.length <= 3) {
        return;
    }
    fetch(BASE_URL, headers)
        .then(() => loadTasksHandler(event))
    inputElement.value = "";
}

function createEditInput(e) {
    const parentElement = e.target.parentElement;
    e.target.parentElement.innerHTML = `
  <input value='${e.target.parentElement.querySelector("span").textContent
        }'/>
    <button id=${e.target.id} class="remove-button">Remove</button>
    <button id=${e.target.id} class="submit-button">Submit</button>`;
    parentElement.querySelector('.remove-button')
        .addEventListener('click', removeTaskHandler);
    parentElement.querySelector('.submit-button')
        .addEventListener('click', editTaskHandler);
}

function removeTaskHandler(e) {
    const id = e.target.id;
    const headers = {
        method: 'DELETE'
    };

    fetch(BASE_URL + `/${id}`, headers)
        .then(() => loadTasksHandler());
}

function editTaskHandler(e) {
    const inputVal = e.target.parentElement.querySelector('input').value;
    const headers = {
        method: 'PATCH',
        body: JSON.stringify({ name: inputVal })
    };

    fetch(BASE_URL + `/${e.target.id}`, headers)
        .then(() => loadTasksHandler(e));
}

function createElement(elementTag, value, parent) {
    const newElement = document.createElement(elementTag);
    newElement.innerHTML = value;
    if (parent) {
        parent.appendChild(newElement);
    }

    return newElement;
}

attachEvents();
