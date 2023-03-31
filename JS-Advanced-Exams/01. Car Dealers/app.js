window.addEventListener("load", solve);

function solve() {
  const makeElement = document.getElementById('make');
  const modelElement = document.getElementById('model');
  const yearElement = document.getElementById('year');
  const fuelElement = document.getElementById('fuel');
  const originalElement = document.getElementById('original-cost');
  const sellElement = document.getElementById('selling-price');
  const tableBodyElement = document.getElementById('table-body');
  const profitElement = document.getElementById('profit');
  const form = document.querySelector('form');
  let profitValues = 0;

  document.getElementById('publish').addEventListener('click', publishHandler)


  function publishHandler(e) {
    e.preventDefault();
    console.log(e.target)
    if (!makeElement.value ||
      !modelElement.value ||
      !yearElement.value ||
      !fuelElement.value ||
      !originalElement ||
      !sellElement ||
      Number(originalElement.value) > Number(sellElement.value)) {
      return;
    }

    let trRow = document.createElement('tr');
    trRow.classList.add('row');
    customHtmlElement('td', makeElement.value, trRow, '');
    customHtmlElement('td', modelElement.value, trRow, '');
    customHtmlElement('td', yearElement.value, trRow, '');
    customHtmlElement('td', fuelElement.value, trRow, '');
    customHtmlElement('td', originalElement.value, trRow, '');
    customHtmlElement('td', sellElement.value, trRow, '');

    let tdBtnContainer = document.createElement('td');
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');
    editBtn.addEventListener('click', editHandler);

    let sellBtn = document.createElement('button');
    sellBtn.textContent = 'Sell';
    sellBtn.classList.add('action-btn');
    sellBtn.classList.add('sell');
    sellBtn.addEventListener('click', sellHandler);
    tdBtnContainer.appendChild(editBtn);
    tdBtnContainer.appendChild(sellBtn);

    trRow.appendChild(tdBtnContainer);
    tableBodyElement.appendChild(trRow);
    form.reset();

  }

  function editHandler(e) {
    let currentOffer = Array.from(e.target.parentNode.parentNode.children);
    makeElement.value = currentOffer[0].textContent;
    modelElement.value = currentOffer[1].textContent;
    yearElement.value = currentOffer[2].textContent;
    fuelElement.value = currentOffer[3].textContent;
    originalElement.value = currentOffer[4].textContent;
    sellElement.value = currentOffer[5].textContent;
    e.target.parentNode.parentNode.remove();
  }

  function sellHandler(e) {
    console.log(e.target)

  }
  
  function customHtmlElement(type, content, parent, className) {
    let newElement = document.createElement(type);
    if (content) {
      newElement.textContent = content;
    }
    if (className) {
      newElement.classList.add([...className]);
    }
    if (parent) {
      parent.appendChild(newElement);
    }
    return newElement;
  }
}
