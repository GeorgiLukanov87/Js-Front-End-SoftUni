function sumTable() {
    let resultInputElement = document.getElementById('sum');
    resultInputElement.textContent = ''
    pricesElement = document.querySelectorAll('table  tbody  tr td:nth-child(2)')
    let sum = 0;
    for (let price of pricesElement) {
        console.log(price)
        sum += Number(price.textContent);
    }
    console.log(sum)

    resultInputElement.textContent = sum
    
}