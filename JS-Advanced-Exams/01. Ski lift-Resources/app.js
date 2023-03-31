window.addEventListener('load', solve);

function solve() {
    const [fName, lName, people, date, days] = document.querySelectorAll('input')
    const nextStepBtn = document.getElementById('next-btn');
    nextStepBtn.addEventListener('click', nextStepHandler);
    const ticketPreview = document.querySelector('.ticket-info-list');
    const confirmTicket = document.querySelector('.confirm-ticket');
    const form = document.querySelector('.container-text form');
    const mainElement = document.getElementById('main');
    const bodyElement = document.getElementById('body');
    let savedData = {};


    function nextStepHandler(e) {
        e.preventDefault();
        if (!fName.value || !lName.value || !people.value || !date.value || !days.value) {
            alert('Fill all inputs!')
            return;
        }
        savedData = {
            fName: fName.value,
            lName: lName.value,
            people: people.value,
            date: date.value,
            days: days.value,
        }

        let liContainer = customHtmlElement('li', '', '', 'ticket');
        let article = customHtmlElement('article', '', liContainer);
        customHtmlElement('h3', `Name: ${fName.value} ${lName.value}`, article);
        customHtmlElement('p', `From date: ${date.value}`, article);
        customHtmlElement('p', `For ${days.value} days`, article);
        customHtmlElement('p', `For ${people.value} people`, article);
        let editBtn = customHtmlElement('button', 'Edit', liContainer, 'edit-btn');
        editBtn.addEventListener('click', editHandler);
        let continueBtn = customHtmlElement('button', 'Continue', liContainer, 'continue-btn');
        continueBtn.addEventListener('click', continueHandler);

        ticketPreview.appendChild(liContainer);
        form.reset();
        nextStepBtn.disabled = true;
    }

    function editHandler(e) {
        fName.value = savedData.fName;
        lName.value = savedData.lName;
        people.value = savedData.people;
        date.value = savedData.date;
        days.value = savedData.days;
        nextStepBtn.disabled = false;
        e.target.parentNode.remove();
    }

    function continueHandler(e) {
        confirmTicket.appendChild(e.target.parentNode);
        Array.from(confirmTicket.querySelectorAll('button')).forEach(btn => { btn.remove() });

        let confirmBtn = customHtmlElement('button', 'Confirm', confirmTicket.children[0], 'confirm-btn');
        confirmBtn.textContent = 'Confirm';
        confirmBtn.addEventListener('click', confirmHandler);

        let cancelBtn = customHtmlElement('button', 'Cancel', confirmTicket.children[0], 'cancel-btn');
        cancelBtn.addEventListener('click', cancelHandler);
    }

    function confirmHandler() {
        mainElement.remove();
        customHtmlElement('h1', 'Thank you, have a nice day!', bodyElement, '', 'thank-you');
        let backBtn = customHtmlElement('button', 'Back', bodyElement, '', 'back-btn');
        backBtn.addEventListener('click', () => {
            document.location.reload();
        })

    }

    function cancelHandler(e) {
        e.target.parentNode.remove();
        nextStepBtn.disabled = false;
    }

    function customHtmlElement(type, content, parent, className, id) {
        let newElement = document.createElement(type);
        if (content) {
            newElement.textContent = content;
        }
        if (className) {
            newElement.classList.add(className);
        }
        if (parent) {
            parent.appendChild(newElement);
        }
        if (id) {
            newElement.id = id;
        }
        return newElement;
    }
}




