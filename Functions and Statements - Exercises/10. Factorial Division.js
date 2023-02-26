function solve(n1, n2) {
    let result1 = factorial(n1)
    let result2 = factorial(n2)

    function factorial(n) {
        var total = 1;
        for (i = 1; i <= n; i++) {
            total = total * i;
        }
        return total;
    }

    let factorial_division = result1 / result2
    console.log(factorial_division.toFixed(2))
}

solve(6,
    2)