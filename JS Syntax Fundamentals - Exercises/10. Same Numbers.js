function solve(number) {
    let numAsString = number.toString();
    let sum = 0;
    let is_equal = true;
    for (let i = 0; i < numAsString.length; i++) {
        let firstNum = Number(numAsString[0]);
        let currentNum = Number(numAsString[i]);
        sum += currentNum;
        if (firstNum !== currentNum){
            is_equal = false;
        }
    }
    console.log(is_equal)
    console.log(sum)
}

solve(2222222)
solve(1234)