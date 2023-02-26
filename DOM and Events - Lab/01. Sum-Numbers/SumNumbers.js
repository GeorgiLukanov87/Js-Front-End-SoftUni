function calc() {
    let num1Element = document.getElementById("num1").value;
    let num2Element = document.getElementById("num2").value;
    let resultElement = document.getElementById("sum");

    console.log(num1Element);
    console.log(num2Element);
    console.log(resultElement);

    let sumResult = Number(num1Element) + Number(num2Element);
    console.log(sumResult);
    resultElement.value = sumResult;
}
