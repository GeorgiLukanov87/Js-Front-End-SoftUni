window.addEventListener('load', solution);

function solution() {
  const fnameElement = document.getElementById('fname');
  const emailElement = document.getElementById('email');
  const phoneElement = document.getElementById('phone');
  const addressElement = document.getElementById('address');
  const codeElement = document.getElementById('code');
  const mainContainer = document.getElementById('block');

  const infoPreview = document.getElementById('infoPreview');

  const submitBtn = document.getElementById('submitBTN');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');

  submitBtn.addEventListener('click', submitInfo);
  editBtn.addEventListener('click', editHandler);
  continueBtn.addEventListener('click', continueHandler);

  let data = {}
  function submitInfo() {
    data = {
      fname: fnameElement.value,
      email: emailElement.value,
      phone: phoneElement.value,
      address: addressElement.value,
      code: codeElement.value,
    }
    if (data.fname == '' || data.email == '') {
      return;
    }

    customLiElement('li', data.fname, 'Full Name:', infoPreview);
    customLiElement('li', data.email, 'Email:', infoPreview);
    customLiElement('li', data.phone, 'Phone Number:', infoPreview);
    customLiElement('li', data.address, 'Address:', infoPreview);
    customLiElement('li', data.code, 'Postal Code:', infoPreview);

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;
    clearInputs();
  }

  function editHandler() {
    fnameElement.value = data.fname;
    emailElement.value = data.email;
    phoneElement.value = data.phone;
    addressElement.value = data.address;
    codeElement.value = data.code;

    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;
    Array.from(infoPreview.querySelectorAll('li')).forEach(li => {
      li.remove();
    })
  }

  function continueHandler() {
    console.log(mainContainer)

    mainContainer.innerHTML = ''
    console.log(mainContainer)
    let finalMsgH3 = document.createElement('h3');
    finalMsgH3.textContent = "Thank you for your reservation!";
    mainContainer.appendChild(finalMsgH3);
  }

  function customLiElement(type, content, extraInfo, parent) {
    let newElement = document.createElement(type);
    newElement.textContent = `${extraInfo} ${content}`;
    parent.appendChild(newElement);
    return newElement;
  }

  function clearInputs() {
    fnameElement.value = '';
    emailElement.value = '';
    phoneElement.value = '';
    addressElement.value = '';
    codeElement.value = '';
  }


}
