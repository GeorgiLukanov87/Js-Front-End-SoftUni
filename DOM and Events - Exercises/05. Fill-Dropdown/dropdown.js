function addItem() {
    dropMenuElement = document.getElementById('menu')
    textElement = document.getElementById('newItemText')
    valueElement = document.getElementById('newItemValue')

    newOptionElement = document.createElement('option')
    newOptionElement.value = valueElement.value
    newOptionElement.textContent = textElement.value
    dropMenuElement.appendChild(newOptionElement)

    textElement.value = ""
    valueElement.value = ""


}