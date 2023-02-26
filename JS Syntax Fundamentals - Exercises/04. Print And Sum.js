function solve(start, end) {
    let sum = 0;
    result = [];
    for (let i = start;i <= end;i++){
        result.push(i);
        sum += i;
    }
    console.log(...result);
    console.log(`Sum: ${sum}`)
}

solve(5, 10)
solve(0, 26)
solve(50, 60)