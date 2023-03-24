window.addEventListener('load', solve);

function solve() {
    nextBtn = document.querySelector('#next-btn');

    firstName = document.getElementById('first-name');
    lastName = document.getElementById('last-name');
    dateIn = document.getElementById('date-in');
    dateOut = document.getElementById('date-out');
    people = document.getElementById('people-count');

    reservationInfo = document.querySelector('.info-list');
    confirmReservation = document.querySelector('.confirm-list');

    nextBtn.addEventListener('click', nextHandler);
    function nextHandler(e) {
        e.preventDefault()
        if ((firstName.value == '' ||
            lastName.value == '' ||
            dateIn.value == '' ||
            dateOut.value == '' ||
            people.value == '')) {
            console.log('fail')
            return;
        }
        let x = new Date(dateIn.value);
        let y = new Date(dateOut.value);
        if (x >= y) {
            return;
        }

        let SavedData = {
            firstName: firstName.value,
            lastName: lastName.value,
            dateIn: dateIn.value,
            dateOut: dateOut.value,
            people: people.value,
        };
        let newLi = document.createElement('li');
        newLi.setAttribute('class', 'reservation-content');

        let newArticle = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstName.value} ${lastName.value}`;
        let fromDateP = document.createElement('p');
        fromDateP.textContent = `From date: ${dateIn.value}`;
        let toDateP = document.createElement('p');
        toDateP.textContent = `To date: ${dateOut.value}`;
        let peopleP = document.createElement('p');
        peopleP.textContent = `For ${people.value} people`;

        newArticle.appendChild(h3);
        newArticle.appendChild(fromDateP);
        newArticle.appendChild(toDateP);
        newArticle.appendChild(peopleP);

        newLi.appendChild(newArticle)

        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';
        let continueBtn = document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';

        newLi.appendChild(editBtn);
        newLi.appendChild(continueBtn);
        reservationInfo.appendChild(newLi);

        firstName.value = '';
        lastName.value = '';
        dateIn.value = '';
        dateOut.value = '';
        people.value = '';
        nextBtn.disabled = true;

        editBtn.addEventListener('click', editHandler);
        continueBtn.addEventListener('click', continueHandler);

        function editHandler(e) {
            console.log('edit')
            firstName.value = SavedData['firstName'];
            lastName.value = SavedData['lastName'];
            dateIn.value = SavedData['dateIn'];
            dateOut.value = SavedData['dateOut'];
            people.value = SavedData['people'];
            nextBtn.disabled = false;
            reservationInfo.innerHTML = '';
        }

        function continueHandler() {
            console.log('continue')
            reservationInfo.innerHTML = '';

            confirmReservation.appendChild(newLi);
            editBtn.classList.remove('edit-btn');
            editBtn.setAttribute('class', 'confirm-btn');
            editBtn.textContent = 'Confirm';

            continueBtn.classList.remove('continue-btn');
            continueBtn.setAttribute('class', 'cancel-btn');
            continueBtn.textContent = 'Cancel';

            editBtn.removeEventListener('click', editHandler);
            continueBtn.removeEventListener('click', continueHandler);

            editBtn.addEventListener('click', confirmHandler);
            continueBtn.addEventListener('click', cancelHandler);
        }

        let h1 = document.getElementById('verification');

        function confirmHandler() {
            nextBtn.disabled = false;
            h1.textContent = 'Confirmed.'
            h1.setAttribute('class', 'reservation-confirmed');
            confirmReservation.remove();
        }
        function cancelHandler() {
            nextBtn.disabled = false;
            h1.textContent = 'Calcelled.'
            h1.setAttribute('class', 'reservation-cancelled');
            confirmReservation.remove();
        }

    }

}





