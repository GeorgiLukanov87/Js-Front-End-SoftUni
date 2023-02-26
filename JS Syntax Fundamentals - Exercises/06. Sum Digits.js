function solve(num) {
    let numAsString = num.toString();
    let result = 0;
    for (let i = 0; i < numAsString.length; i++){
        result += Number(numAsString[i])
    }
    console.log(result)
}

solve(543)
