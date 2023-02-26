function subtract() {
    let firstNumElement = document.getElementById('firstNumber')
    let secondNumElement = document.getElementById('secondNumber')
    let resultElement = document.getElementById('result')
    let result = Number(firstNumElement.value) - Number(secondNumElement.value)
    resultElement.textContent = result
}