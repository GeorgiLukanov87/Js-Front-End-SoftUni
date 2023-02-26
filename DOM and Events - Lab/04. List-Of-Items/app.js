function addItem() {
    ulListElement = document.getElementById('items')
    inputTextElement = document.getElementById('newItemText')

    console.log(ulListElement);
    console.log(inputTextElement);

    if (inputTextElement.value !== "") {
        let newLi = document.createElement('li');
        newLi.textContent = inputTextElement.value;
        ulListElement.appendChild(newLi);

    }

    inputTextElement.value = ""

}