const baseURL = `http://localhost:3030/jsonstore/tasks/`;

const divList = document.getElementById('list');
const loadCoursesBtn = document.getElementById('load-course');
const addCourseBtn = document.getElementById('add-course');

const titleElement = document.getElementById('course-name');
const typeElement = document.getElementById('course-type');
const descriptionElement = document.getElementById('description');
const teacherElement = document.getElementById('teacher-name');
const editCourseBtn = document.getElementById('edit-course');

editCourseBtn.addEventListener('click', editCourseHandler);
addCourseBtn.addEventListener('click', addNewCourse);
loadCoursesBtn.addEventListener('click', loadAllCourses);

function loadAllCourses(e) {
    if (e) {
        e.preventDefault();
    }
    divList.innerHTML = '';
    fetch(baseURL)
        .then(response => response.json())
        .then(data => {
            for (let key in data) {
                let description = data[key]['description'];
                let teacher = data[key]['teacher'];
                let title = data[key]['title'];
                let type = data[key]['type'];
                let id = data[key]['_id'];
                
                if (!id) {
                    id = key
                }

                let divContainer = document.createElement('div');
                divContainer.classList.add('container');
                divContainer.id = id;

                let h2Title = document.createElement('h2');
                h2Title.textContent = title;

                let h3Teacher = document.createElement('h3');
                h3Teacher.textContent = teacher;

                let h3Type = document.createElement('h3');
                h3Type.textContent = type;

                let h4description = document.createElement('h4');
                h4description.textContent = description;

                let editBtn = document.createElement('button');
                editBtn.id = id;
                editBtn.classList.add('edit-btn');
                editBtn.textContent = 'Edit Course';

                let finishBtn = document.createElement('button');
                finishBtn.id = id;
                finishBtn.classList.add('finish-btn');
                finishBtn.textContent = 'Finish Course';

                finishBtn.addEventListener('click', finishHandler);
                editBtn.addEventListener('click', editHandler)

                divContainer.appendChild(h2Title);
                divContainer.appendChild(h3Teacher);
                divContainer.appendChild(h3Type);
                divContainer.appendChild(h4description);
                divContainer.appendChild(editBtn);
                divContainer.appendChild(finishBtn);

                divList.appendChild(divContainer);
            }
        })
}

function editCourseHandler(e) {
    if (e) {
        e.preventDefault();
    }

    let id = e.target.value;
    let patchUrl = baseURL + `${id}`;
    let description = descriptionElement.value;
    let teacher = teacherElement.value;
    let title = titleElement.value;
    let type = typeElement.value;
    let dataObj = {
        title,
        type,
        description,
        teacher
    };
    const headers = {
        method: 'PUT',
        body: JSON.stringify(dataObj)
    };

    fetch(patchUrl, headers)
        .then(() => loadAllCourses(e), clearInputs());
}

function addNewCourse(e) {
    if (e) {
        e.preventDefault();
    }
    let description = descriptionElement.value;
    let teacher = teacherElement.value;
    let title = titleElement.value;
    let type = typeElement.value;
    let dataObj = {
        title,
        type,
        description,
        teacher
    };
    const headers = {
        method: 'POST',
        body: JSON.stringify(dataObj)
    };

    fetch(baseURL, headers)
        .then(() =>
            loadAllCourses(e),
            clearInputs(),
            addCourseBtn.disabled = false,
            editCourseBtn.disabled = true);

}

function editHandler(e) {
    let course = e.target.parentNode;
    let title = course.children[0].textContent;
    let teacher = course.children[1].textContent;
    let type = course.children[2].textContent;
    let description = course.children[3].textContent;

    titleElement.value = title;
    typeElement.value = type;
    descriptionElement.value = description;
    teacherElement.value = teacher;

    addCourseBtn.disabled = true;
    editCourseBtn.disabled = false;
    editCourseBtn.value = course.id;
    course.remove();
}

function finishHandler(e) {
    let id = e.target.id;
    let delUrl = baseURL + `${id}`;
    const headers = { method: 'DELETE', };

    fetch(delUrl, headers)
        .then(() => loadAllCourses(е));
}

function clearInputs() {
    titleElement.value = '';
    typeElement.value = '';
    descriptionElement.value = '';
    teacherElement.value = '';
}



