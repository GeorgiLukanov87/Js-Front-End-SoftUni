function solve(num) {
    let load_bar = "";
    let iterations = Math.floor(num / 10);
    for (let i = 0; i < 10; i++) {
        if (i < iterations) {
            load_bar += ('%');
        } else {
            load_bar += ('.')
        }

    }
    let result = [];
    result.unshift('[')
    result.push(']')
    if (iterations == 10) {
        console.log('100% Complete!')
    }
    console.log(`${iterations}0% ` + "[" + load_bar + ']')

    if (iterations < 10) {
        console.log('Still loading...')
    }

}

solve(30)
solve(50)
solve(100)

