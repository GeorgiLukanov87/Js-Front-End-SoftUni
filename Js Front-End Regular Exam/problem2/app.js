window.addEventListener('load', solve);

// function solve() {
//     const totalPointsElement = document.getElementById('total-sprint-points');

//     const taskIdHiddenElement = document.getElementById('task-id');
//     const titleElement = document.getElementById('title');
//     const descriptionElement = document.getElementById('description');
//     const labelElement = document.getElementById('label');
//     const pointsElement = document.getElementById('points');
//     const assigneeElement = document.getElementById('assignee');

//     const taskBtn = document.getElementById('create-task-btn');
//     const deleteBtn = document.getElementById('delete-task-btn');
//     const taskSectionElement = document.getElementById('tasks-section');
//     taskBtn.addEventListener('click', taskHandler);

//     let lastTaskId = '';
//     let data = {};
//     let idCounter = 0;
//     let pointsCounter = 0;

//     let iconsMapper = {
//         feature: '&#8865',
//         low: '&#9737',
//         high: '&#9888',
//     }

//     let additionClassMapper = {
//         feature: "feature",
//         low: "low-priority",
//         high: "high-priority",
//     }

//     function taskHandler(e) {
//         e.preventDefault();
//         console.log(e.target)
//         data = {
//             title: titleElement.value,
//             description: descriptionElement.value,
//             label: labelElement.value,
//             points: pointsElement.value,
//             assignee: assigneeElement.value,
//         }
//         if (!data.title || !data.description || !data.label || !data.points || !data.assignee) {
//             alert('wrong data');
//             return
//         }

//         idCounter++;
//         let article = document.createElement('article');
//         article.id = `task-${idCounter}`;
//         taskIdHiddenElement.value = article.id;
//         article.classList.add('task-card');

//         let iconToAdd = '';
//         let classToAdd = '';

//         if (data.label === 'Feature') {
//             iconToAdd += iconsMapper['feature']
//             classToAdd += additionClassMapper['feature']

//         } else if (data.label === 'Low Priority Bug') {
//             iconToAdd += iconsMapper['low']
//             classToAdd += additionClassMapper['low']

//         } else if (data.label === 'High Priority Bug') {
//             iconToAdd += iconsMapper['high']
//             classToAdd += additionClassMapper['high']
//         }

//         let label = cunstomHtml('div', 'task-card-label', data.label, article);
//         label.innerHTML += " " + iconToAdd;
//         label.classList.add(classToAdd)

//         label.classList.add('feature')
//         let title = cunstomHtml('h3', 'task-card-title', data.title, article);
//         let description = cunstomHtml('p', 'task-card-description', data.description, article);
//         let points = cunstomHtml('div', 'task-card-points', `Estimated at ${data.points} pts`, article);
//         let assignee = cunstomHtml('div', 'task-card-assignee', `Assigned to: ${data.assignee}`, article);
//         let divBtnContainer = cunstomHtml('div', 'task-card-actions', '', article)

//         let delBtn = document.createElement('button');
//         delBtn.textContent = 'Delete';
//         delBtn.addEventListener('click', deleteHandler);
//         divBtnContainer.appendChild(delBtn);
//         taskSectionElement.appendChild(article)

//         clearInputs();
//         pointsCounter += Number(data.points);
//         totalPointsElement.textContent = `Total Points ${pointsCounter}pts`
//     }
//     function deleteHandler(e) {
//         let task = e.target.parentNode.parentNode;
//         let label = task.children[0].textContent;

//         if (label.includes('Feature')) {
//             labelElement.value = 'Feature'
//         } else if (label.includes('Low')) {
//             labelElement.value = "Low Priority Bug";
//         } else if (label.includes('High')) {
//             labelElement.value = "High Priority Bug";
//         }

//         let title = task.children[1].textContent;
//         let description = task.children[2].textContent;
//         let points = task.children[3].textContent.split(' ')[2];
//         let assignee = task.children[4].textContent.split(': ')[1];

//         titleElement.value = title;
//         descriptionElement.value = description;
//         pointsElement.value = points;
//         assigneeElement.value = assignee;

//         taskBtn.disabled = true;
//         deleteBtn.disabled = false;

//         labelElement.disabled = true;
//         titleElement.disabled = true;
//         descriptionElement.disabled = true;
//         pointsElement.disabled = true;
//         assigneeElement.disabled = true;
//         lastTaskId = task.id;
//     }

//     deleteBtn.addEventListener('click', function deleteTask() {
//         document.getElementById(lastTaskId).remove();
//         taskBtn.disabled = false;
//         deleteBtn.disabled = true;

//         labelElement.disabled = false;
//         titleElement.disabled = false;
//         descriptionElement.disabled = false;
//         pointsElement.disabled = false;
//         assigneeElement.disabled = false;

//         pointsCounter -= Number(pointsElement.value);
//         totalPointsElement.textContent = `Total Points ${pointsCounter}pts`
//         clearInputs();

//     });

//     function cunstomHtml(type, className, text, parent) {
//         let newElement = document.createElement(type);
//         newElement.classList.add(className);
//         newElement.textContent = text;
//         if (parent) {
//             parent.appendChild(newElement);
//         }
//         return newElement
//     }

//     function clearInputs() {
//         titleElement.value = '';
//         descriptionElement.value = '';
//         labelElement.value = '';
//         pointsElement.value = '';
//         assigneeElement.value = '';
//     }
// }



function solve() {
    let form = document.querySelector('#create-task-form');
    let section = document.querySelector('#tasks-section');
    let createBtn = document.querySelector('#create-task-btn');
    let deleteBtn = document.querySelector('#delete-task-btn');
    let pointsElement = document.getElementById('total-sprint-points');

    const [titleInput, descriptionInput, labelInput, pointInput, assigneeInput] =
        Array.from(document.querySelectorAll('#title, #description, #label, #points, #assignee'));

    let task = 0;
    let totalPoint = 0;

    createBtn.addEventListener('click', (e) => {
        let [title, description, label, point, assignee] =
            [titleInput.value, descriptionInput.value, labelInput.value, pointInput.value, assigneeInput.value];

        if (!title || !description || !label || !point || !assignee) return;

        task++
        const labelIcon = getLabelIcon(label);
        const labelClass = getLabelClass(label);
        let sumPoints = Number(point);
        totalPoint += sumPoints
        console.log(totalPoint)
        console.log(point)

        pointsElement.innerHTML = `Total Points ${totalPoint}pts`

        section.innerHTML += `
                            <article id="task-${task}" class="task-card">
                                <div class="task-card-label ${labelClass}">${label} ${labelIcon}</div>
                                <h3 class="task-card-title">${title}</h3>
                                <p class="task-card-description">${description}</p>
                                <div class="task-card-points">Estimated at ${point} pts</div>
                                <div class="task-card-assignee">Assigned to: ${assignee}</div> 
                                <div class="task-card-actions">
                                    <button>Delete</button> 
                                </div>
                            </article>`



        Array.from(section.querySelectorAll('button')).forEach(btn => { btn.addEventListener('click', deleteHandler) });
        form.reset();
    })

    function deleteHandler(e) {
        console.log(e.target)
        titleInput.value = e.target.parentNode.parentNode.querySelector('h3').textContent;
        descriptionInput.value = e.target.parentNode.parentNode.querySelector('p').textContent;

        let currentLabel = e.target.parentNode.parentNode.querySelector('.task-card-label').textContent;
        const label = getLabel(currentLabel);
        labelInput.value = getLabel(currentLabel);

        pointInput.value = e.target.parentNode.parentNode.querySelector('.task-card-points').textContent.split(' ')[2];
        assigneeInput.value = e.target.parentNode.parentNode.querySelector('.task-card-assignee').textContent.split('Assigned to: ')[1];


        createBtn.disabled = true;
        deleteBtn.disabled = false;

        deleteBtn.addEventListener('click', () => {
            e.target.parentNode.parentNode.remove();
            form.reset();
            createBtn.disabled = false;
            deleteBtn.disabled = true;



        })
    }

    function getLabelIcon(labelValue) {
        if (labelValue === 'Feature') {
            return '&#8865;';
        } else if (labelValue === 'Low Priority Bug') {
            return '&#9737;';
        } else if (labelValue === 'High Priority Bug') {
            return '&#9888;';
        }
    }

    function getLabelClass(labelValue) {
        if (labelValue === 'Feature') {
            return 'feature';
        } else if (labelValue === 'Low Priority Bug') {
            return 'low-priority';
        } else if (labelValue === 'High Priority Bug') {
            return 'high-priority';
        }
    }

    function getLabel(labelValue) {
        if (labelValue.includes('Feature')) {
            return 'Feature';
        } else if (labelValue.includes('Low Priority Bug')) {
            return 'Low Priority Bug';
        } else if (labelValue.includes('High Priority Bug')) {
            return 'High Priority Bug';
        }
    }
}

