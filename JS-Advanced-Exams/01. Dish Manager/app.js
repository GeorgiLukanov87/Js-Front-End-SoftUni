window.addEventListener("load", solve);

function solve() {
  let formBtn = document.getElementById('form-btn');
  formBtn.addEventListener('click', submitHandler);

  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = document.getElementById('age');

  let description = document.getElementById('task');
  let ulInProgress = document.getElementById('in-progress');
  let ulFinished = document.getElementById('finished');
  let inProgress = document.getElementById('progress-count');
  let progressCounter = 0;
  let clearBtn = document.getElementById('clear-btn');

  function submitHandler(e) {
    if (firstName.value == '' ||
      lastName.value == '' ||
      age.value == '' ||
      description.value == '') {
      console.log('fail')
      return;
    }
    
    let gender = document.getElementById('genderSelect');
    let genderOption = gender.options[gender.selectedIndex].text;

    let savedData = {
      firstName: firstName.value,
      lastName: lastName.value,
      age: age.value,
      gender: gender.options[gender.selectedIndex].text,
      description: description.value,
    }

    let newLi = document.createElement('li');
    newLi.setAttribute('class', 'each-line');
    newLi.innerHTML = `
    <article>
    <h4>${firstName.value} ${lastName.value}</h4>
    <p>${savedData['gender']}, ${age.value}</p>
    <p>Dish description: ${description.value}</p>
    </article>
    <button class="edit-btn">Edit</button>
    <button class="complete-btn">Mark as complete</button>
    `
    ulInProgress.appendChild(newLi);
    firstName.value = '';
    lastName.value = '';
    age.value = '';
    description.value = '';
    progressCounter++;
    inProgress.textContent = progressCounter;

    let editBtn = Array.from(document.querySelectorAll('.edit-btn'));
    let completeBtn = Array.from(document.querySelectorAll('.complete-btn'));

    editBtn.forEach(btn => btn.addEventListener('click', editHandler));
    completeBtn.forEach(btn => btn.addEventListener('click', completeHandler));

    function editHandler(e) {
      firstName.value = savedData['firstName'];
      lastName.value = savedData['lastName'];
      age.value = savedData['age'];
      gender.value = savedData['gender'];
      description.value = savedData['description'];
      e.currentTarget.parentNode.remove();
      progressCounter--;
      inProgress.textContent = progressCounter;

    }

    function completeHandler(e) {
      progressCounter--;
      inProgress.textContent = progressCounter;

      ulFinished.appendChild(e.currentTarget.parentNode)
      e.currentTarget.parentNode.children[1].remove();
      e.currentTarget.parentNode.children[1].remove();

    }

    clearBtn.addEventListener('click', clearHander);
    function clearHander(e) {
      let toClear = document.getElementById('finished');
      toClear.innerHTML = '';
    }

  }

}



