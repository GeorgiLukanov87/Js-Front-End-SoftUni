function addItem() {
    let ulItemsElement = document.getElementById('items')
    let inputElement = document.getElementById('newItemText') // value ?
    console.log(inputElement.value);
    console.log(ulItemsElement);

    let newLi = document.createElement('li');
    let newA = document.createElement('a');
    let link = document.createTextNode("[Delete]");
    newA.href = "#";
    newA.appendChild(link);

    newLi.textContent = inputElement.value;
    newLi.appendChild(newA);

    ulItemsElement.appendChild(newLi);

    inputElement.value = '';

    let aItemsElement = Array.from(document.querySelectorAll('#items li a'));

    newA.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove();
    })


}