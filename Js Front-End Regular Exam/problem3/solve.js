// TODO:
function attachEvents() {
    const baseURL = `http://localhost:3030/jsonstore/tasks/`
    const loadBtn = document.getElementById('load-board-btn');
    const addTask = document.getElementById('create-task-btn');
    loadBtn.addEventListener('click', loadAll);
    addTask.addEventListener('click', addTaskHandler)
    const toDo = document.getElementById('todo-section')
    const inProgress = document.getElementById('in-progress-section');
    const codeReview = document.getElementById('code-review-section');
    const done = document.getElementById('done-section');

    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');

    function loadAll(e) {
        if (e) {
            e.preventDefault();
        }

        toDo.innerHTML = '';
        inProgress.innerHTML = '';
        codeReview.innerHTML = '';
        done.innerHTML = '';

        fetch(baseURL)
            .then(res => res.json())
            .then(data => {
                for (let row in data) {
                    let description = data[row]['description']
                    let status = data[row]['status']
                    let title = data[row]['title']
                    let id = data[row]['_id']

                    if (!status) {
                        status = 'ToDo'
                    }

                    let li = document.createElement('li');
                    li.id = id;
                    li.classList.add('task');
                    let h3 = document.createElement('h3');
                    h3.textContent = title;
                    let p = document.createElement('p');
                    p.textContent = description;

                    let btn = document.createElement('button');
                    btn.id = id;
                    if (status === 'ToDo') {
                        btn.textContent = 'Move to In Progress'
                    } else if (status === 'In Progress') {
                        btn.textContent = 'Move to Code Review'
                    } else if (status === 'Code Review') {
                        btn.textContent = 'Move to Done'
                    } else if (status === 'Done') {
                        btn.textContent = 'Close'
                    }
                    btn.addEventListener('click', btnHandler);

                    li.appendChild(h3);
                    li.appendChild(p);
                    li.appendChild(btn);

                    if (status === 'ToDo') {
                        toDo.appendChild(li)
                    } else if (status === 'In Progress') {
                        inProgress.appendChild(li)
                    } else if (status === 'Code Review') {
                        codeReview.appendChild(li)
                    } else if (status === 'Done') {
                        done.appendChild(li)
                    }

                }
            })
    }


    function addTaskHandler(e) {
        if (e) {
            e.preventDefault()
        }
        let title = titleElement.value;
        let description = descriptionElement.value,
            savedTask =
            {
                title,
                description,
            }

        const headers = { method: 'POST', body: JSON.stringify(savedTask) };

        fetch(baseURL, headers)
            .then(() => loadAll(e), titleElement.value = '', descriptionElement.value = '');

    }

    function btnHandler(e) {
        if (e) {
            e.preventDefault();
        }
        let currentId = e.target.id;
        console.log(currentId)
        console.log(e.target.textContent)
        let currentStatus = e.target.textContent;
        let fetchStatus = '';
        let fetchURL = `${baseURL}${currentId}`;

        if (currentStatus === 'Close') {
            const headers = { method: 'DELETE', };
            fetch(fetchURL, headers)
                .then(() => loadAll(e))

        } else {
            if (currentStatus === 'Move to In Progress') {
                fetchStatus = 'In Progress';
            } else if (currentStatus === 'Move to Code Review') {
                fetchStatus = 'Code Review';
            } else if (currentStatus === 'Move to Done') {
                fetchStatus = 'Done'
            }

            const headers = { method: 'PATCH', body: JSON.stringify({ status: fetchStatus }) };
            fetch(fetchURL, headers)
                .then(() => loadAll(e));
        }

    }

}

attachEvents();
