// 01. Work Process
// Js Advanced Final Exam - 19 February 2022
// https://judge.softuni.org/Contests/Practice/Index/3367#0

function solve() {
    const fnameElement = document.getElementById('fname');
    const lnameElement = document.getElementById('lname');
    const emailElement = document.getElementById('email');
    const birthElement = document.getElementById('birth');
    const positionElement = document.getElementById('position');
    const salaryElement = document.getElementById('salary');

    const tableElement = document.getElementById('tbody');
    const budgetElement = document.getElementById('sum');
    document.getElementById('add-worker').addEventListener('click', hireWorker);
    let totalSalary = [];

    function hireWorker(e) {
        e.preventDefault();
        let DataSaved = {
            fname: fnameElement.value, lname: lnameElement.value,
            email: emailElement.value, birth: birthElement.value,
            position: positionElement.value, salary: salaryElement.value,
        }
        if (DataSaved.fname == '' || DataSaved.lname == '' || DataSaved.email == '' ||
            DataSaved.birth == '' || DataSaved.position == '' || DataSaved.salary == '') {
            alert('Fill all inputs')
            return;
        }

        let tr = document.createElement('tr');
        createCustomEl('td', DataSaved.fname, tr); createCustomEl('td', DataSaved.lname, tr);
        createCustomEl('td', DataSaved.email, tr); createCustomEl('td', DataSaved.birth, tr);
        createCustomEl('td', DataSaved.position, tr); createCustomEl('td', DataSaved.salary, tr);
        let btnsContainer = document.createElement('td');

        let firedBtn = document.createElement('button');
        firedBtn.textContent = 'Fired';
        firedBtn.classList.add('fired');
        firedBtn.addEventListener('click', fireWorker)

        let editBtn = document.createElement('button')
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit');
        editBtn.addEventListener('click', editInfo)

        btnsContainer.appendChild(firedBtn);
        btnsContainer.appendChild(editBtn);
        tr.appendChild(btnsContainer);
        tableElement.appendChild(tr);

        totalSalary.push(Number(DataSaved.salary))
        displaySalary();
        clearInputs();
    }

    function editInfo(e) {
        currentWorker = e.target.parentNode.parentNode;
        let editSalary = currentWorker.children[5].textContent;

        fnameElement.value = currentWorker.children[0].textContent;
        lnameElement.value = currentWorker.children[1].textContent;
        emailElement.value = currentWorker.children[2].textContent;
        birthElement.value = currentWorker.children[3].textContent;
        positionElement.value = currentWorker.children[4].textContent;
        salaryElement.value = currentWorker.children[5].textContent;

        editBudget(editSalary)
        displaySalary();
        currentWorker.remove();
    }

    function displaySalary() {
        let totalSum = totalSalary.reduce((a, b) => a + b, 0)
        budgetElement.textContent = totalSum.toFixed(2);
    }

    function fireWorker(e) {
        currentWorker = e.target.parentNode.parentNode;
        let editSalary = currentWorker.children[5].textContent;
        editBudget(editSalary)
        displaySalary();
        currentWorker.remove();
        alert(`Worker with name: "${currentWorker.children[0].textContent} ${currentWorker.children[1].textContent}" was FIRED!`)
    }

    function editBudget(editSalary) {
        let index = totalSalary.indexOf(Number(editSalary));
        totalSalary.splice(index, 1);
    }

    function clearInputs() {
        fnameElement.value = ''; lnameElement.value = ''; emailElement.value = '';
        birthElement.value = ''; positionElement.value = ''; salaryElement.value = '';
    }
    function createCustomEl(type, text, parent, className) {
        let newElement = document.createElement(type);
        newElement.textContent = text;
        if (className) {
            newElement.classList.add(className);
        }
        parent.appendChild(newElement);
    }

}
solve()