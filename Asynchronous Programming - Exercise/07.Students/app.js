
function attachEvents() {
  const url = 'http://localhost:3030/jsonstore/collections/students';
  loadStudentsInfo();

  const submitBtn = document.getElementById('submit');
  const tableResults = document.querySelector('#results tbody');
  const inputs = document.querySelector('#form .inputs');

  submitBtn.addEventListener('click', addNewStudent);

  function addNewStudent() {
    let inputFristName = inputs.children[0].value;
    let inputLastName = inputs.children[1].value;
    let inputFacNumber = inputs.children[2].value;
    let inputGrade = inputs.children[3].value;

    if (inputFristName === '' || inputLastName === '' || inputFacNumber === '' || inputGrade === '') {
      return;
    }
    
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        'firstName': inputFristName,
        'lastName': inputLastName,
        'facultyNumber': inputFacNumber,
        'grade': inputGrade
      })
    })
      .then(res => res.json())
      .then(loadStudentsInfo())
    // document.location.reload();
    inputs.children[0].value = '';
    inputs.children[1].value = '';
    inputs.children[2].value = '';
    inputs.children[3].value = '';

  }


  function loadStudentsInfo() {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        tableResults.innerHTML = ''
        for (obj in data) {
          let firstName = data[obj]['firstName']
          let lastName = data[obj]['lastName']
          let facultyNumber = data[obj]['facultyNumber']
          let grade = data[obj]['grade']

          let newTr = document.createElement('tr');

          let firstNameTd = document.createElement('td');
          firstNameTd.textContent = firstName;
          let lastNameTd = document.createElement('td');
          lastNameTd.textContent = lastName;
          let facultyNumberTd = document.createElement('td');
          facultyNumberTd.textContent = facultyNumber;
          let gradeTd = document.createElement('td');
          gradeTd.textContent = grade;

          newTr.appendChild(firstNameTd);
          newTr.appendChild(lastNameTd);
          newTr.appendChild(facultyNumberTd);
          newTr.appendChild(gradeTd);

          tableResults.appendChild(newTr);
        }
      })
  }

}

attachEvents();