function solve() {
    let taskElement = document.getElementById("task");
    let descriptionElement = document.getElementById("description");
    let dateElement = document.getElementById("date");

    let sections = document.getElementsByTagName("section");
    let openList = sections[1];
    let parent = document.getElementById('in-progress')
    let completeList = sections[3];

    document.getElementById('add').addEventListener('click', addTask);
    data = {};

    function addTask(e) {
        e.preventDefault();
        data = {
            task: taskElement.value,
            description: descriptionElement.value,
            date: dateElement.value,
        }
        if (data.task == '' || data.description == '' || data.date == '') {
            alert('Please fill all inputs');
            return;
        }

        let newArticle = document.createElement('article');
        newArticle.innerHTML = `
        <h3>${data.task}</h3>
        <p>Description: ${data.description}</p>
        <p>Due Date: ${data.date}</p>`

        let divBtnsContainer = createCustomElement('div', 'flex');
        let startBtn = createCustomElement('button', 'green', 'Start', divBtnsContainer);
        startBtn.addEventListener('click', startTask)

        let deleteBtn = createCustomElement('button', 'red', 'Delete', divBtnsContainer);
        deleteBtn.addEventListener('click', deleteTask)
        newArticle.appendChild(divBtnsContainer)

        openList.children[1].appendChild(newArticle)
    }

    function startTask(e) {
        let currentTask = e.target.parentNode.parentNode;
        cleanArticle(currentTask);
        let deleteBtn = createCustomElement('button', 'red', 'Delete', currentTask.children[3]);
        deleteBtn.addEventListener('click', deleteTask);
        let finishBtn = createCustomElement('button', 'orange', 'Finish', currentTask.children[3]);
        finishBtn.addEventListener('click', finishTask);
        parent.appendChild(currentTask);
    }

    function deleteTask(e) {
        let currentTask = e.target.parentNode.parentNode;
        currentTask.remove();
    }

    function finishTask(e) {
        let currentTask = e.target.parentNode.parentNode;
        cleanArticle(currentTask);
        currentTask.querySelector('.flex').remove();
        completeList.children[1].appendChild(currentTask);
    }

    function cleanArticle(article) {
        Array.from(article.querySelectorAll('button')).forEach(btn => { btn.remove() });
    }

    function createCustomElement(type, className, content, parent) {
        let newElement = document.createElement(type);
        newElement.classList.add(className);
        if (content) {
            newElement.textContent = content;
        }
        if (parent) {
            parent.appendChild(newElement);
        }
        return newElement;
    }

}
