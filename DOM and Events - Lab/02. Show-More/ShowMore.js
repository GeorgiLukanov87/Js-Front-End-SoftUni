function showText() {
    let textElement = document.getElementById('text')
    let moreElement = document.getElementById('more')
    console.log(textElement.textContent)
    console.log(moreElement.textContent)

    moreElement.style.display = 'none'
    textElement.style.display = 'inline'

}