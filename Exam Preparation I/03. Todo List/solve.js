const loadBtn = document.getElementById('load-button');
const url = `http://localhost:3030/jsonstore/tasks/`;
const toDoList = document.getElementById('todo-list');
const addBtn = document.getElementById('add-button');
const titleInput = document.getElementById('title');

let AllData = {};


function refreshTasks(AllData) {
    for (obj in AllData) {
        let name = AllData[obj]['name'];
        let id = AllData[obj]['_id']

        AllData[id] = name

        let li = document.createElement('li');

        let span = document.createElement('span');
        span.textContent = name;

        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';

        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';



        li.appendChild(span);
        li.appendChild(removeBtn);
        li.appendChild(editBtn);

        toDoList.appendChild(li);

        removeBtn.addEventListener('click', function removeTask(e) {
            let TaskName = e.currentTarget.parentNode.children[0].textContent
            for (el in AllData) {
                if (AllData[el] === TaskName) {
                    let id = AllData[el];
                    delete AllData[el];
                }
            }

            let deleteUrl = `${url}${id}`
            console.log(deleteUrl)
            fetch(deleteUrl, {
                method: 'DELETE',
            })
            e.currentTarget.parentNode.remove()

        })

        editBtn.addEventListener('click', function editTask(e) {
            e.preventDefault();
            let inputText = e.currentTarget.parentNode.children[0].textContent;
            let parent = e.currentTarget.parentNode
            parent.children[0].remove()
            parent.children[0].remove()
            parent.children[0].remove()

            let input = document.createElement('input');
            input.value = inputText;
            parent.appendChild(input)
            parent.appendChild(removeBtn);
            let submitBtn = document.createElement('button');
            submitBtn.textContent = 'Submit';
            parent.appendChild(submitBtn);

            submitBtn.addEventListener('click', function updateTaskName(e) {
                e.preventDefault();
                let TaskName = e.currentTarget.parentNode.children[0].textContent
                for (el in AllData) {
                    if (AllData[el] === TaskName) {
                        let id = AllData[el];
                        delete AllData[el];
                    }
                }
                let patchURL = `${url}${id}`
                // console.log(patchURL)
                let patchText = input.value;
                fetch(patchURL, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        'name': patchText,
                    })
                })
                loadInfo(e);
            })

        })

    }

}

loadBtn.addEventListener('click', loadInfo)
function loadInfo(e) {
    e.preventDefault()
    toDoList.innerHTML = '';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            refreshTasks(data);
        });
}

addBtn.addEventListener('click', addTask);
function addTask(e) {
    let name = titleInput.value;
    e.preventDefault();
    fetch(url, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            'name': name,

        })
    })
        .then(res => res.json())
        .then(data => {
            let obj = {};
            for (i in data) {
                obj[i] = data;
                let name = obj[i]['name']
                let id = obj[i]['_id']
                AllData[id] = name
                break;
            }
            refreshTasks(obj);
            loadInfo(e)
        })
}


function attachEvents() {
}

attachEvents();





// const BASE_URL = 'http://localhost:3030/jsonstore/tasks';
// const addButton = document.querySelector("#add-button");
// const loadButton = document.getElementById('load-button');
// const ulElement = document.querySelector("#todo-list");
// const inputElement = document.querySelector("#title");

// function attachEvents() {
//     loadButton.addEventListener('click', loadTasksHandler);
//     addButton.addEventListener('click', addTodo);
// }

// function loadTasksHandler(e) {
//     if (e) {
//         e.preventDefault();
//     }
//     ulElement.innerHTML = '';
//     fetch(BASE_URL)
//         .then((res) => res.json())
//         .then((list) => {
//             Object.values(list)
//                 .forEach(({ name, _id }) => {
//                     const liItem = createElement('li', '', ulElement);
//                     createElement('span', name, liItem);
//                     const removeBtn = createElement('button', 'Remove', liItem);
//                     removeBtn.id = _id;
//                     removeBtn.addEventListener('click', removeTaskHandler);

//                     const editBtn = createElement('button', 'Edit', liItem);
//                     editBtn.id = _id;
//                     editBtn.addEventListener('click', createEditInput);
//                 })
//         })
// }

// function addTodo(event) {
//     event.preventDefault();
//     const headers = {
//         method: 'POST',
//         body: JSON.stringify({ name: inputElement.value })
//     };
//     if (typeof inputElement.value !== "string" ||
//         inputElement.value.length <= 3) {
//         return;
//     }
//     fetch(BASE_URL, headers)
//         .then(() => loadTasksHandler(event))
//     inputElement.value = "";
// }

// function createEditInput(e) {
//     const parentElement = e.target.parentElement;
//     e.target.parentElement.innerHTML = `
//   <input value='${e.target.parentElement.querySelector("span").textContent
//         }'/>
//     <button id=${e.target.id} class="remove-button">Remove</button>
//     <button id=${e.target.id} class="submit-button">Submit</button>`;
//     parentElement.querySelector('.remove-button')
//         .addEventListener('click', removeTaskHandler);
//     parentElement.querySelector('.submit-button')
//         .addEventListener('click', editTaskHandler);
// }

// function removeTaskHandler(e) {
//     const id = e.target.id;
//     const headers = {
//         method: 'DELETE'
//     };

//     fetch(BASE_URL + `/${id}`, headers)
//         .then(() => loadTasksHandler());
// }

// function editTaskHandler(e) {
//     const inputVal = e.target.parentElement.querySelector('input').value;
//     const headers = {
//         method: 'PATCH',
//         body: JSON.stringify({ name: inputVal })
//     };

//     fetch(BASE_URL + `/${e.target.id}`, headers)
//         .then(() => loadTasksHandler(e));
// }

// function createElement(elementTag, value, parent) {
//     const newElement = document.createElement(elementTag);
//     newElement.innerHTML = value;
//     if (parent) {
//         parent.appendChild(newElement);
//     }

//     return newElement;
// }

// attachEvents();
