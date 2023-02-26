function toggle() {
    btnElement = Array.from(document.getElementsByClassName('button'))[0]
    textElement = document.getElementById('extra')

    if (btnElement.textContent === 'More') {
        btnElement.textContent = 'Less'
        textElement.style.display = 'block'
    } else {
        btnElement.textContent = 'More'
        textElement.style.display = 'none'
    }

}