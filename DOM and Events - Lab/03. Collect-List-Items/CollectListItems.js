function extractText() {
    resultElement = document.getElementById('result')
    itemsElement = Array.from(document.querySelectorAll('#items li'))
    console.log(itemsElement)

    let result = [];
    for (let item of itemsElement) {
        result.push(item.textContent)
    }
    
    resultElement.textContent = result.join('\n')
}