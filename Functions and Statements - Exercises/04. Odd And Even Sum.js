function solve(input) {
    let evenSum = 0;
    let oddSum = 0;
    let numAsString = input.toString();
    for (let i = 0; i < numAsString.length; i++) {
        let currNum = Number(numAsString[i]);
        if (currNum % 2 == 0) {
            evenSum += currNum;
        } else {
            oddSum += currNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}


solve( 3495892137259234)

