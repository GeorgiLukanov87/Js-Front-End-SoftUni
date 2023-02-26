function solve(char1, char2) {
    let asciiNum1 = char1.charCodeAt(0);
    let asciiNum2 = char2.charCodeAt(0);
    let start = 0;
    let end = 0;
    let result = [];

    if (asciiNum1 < asciiNum2) {
        start = asciiNum1;
        end = asciiNum2;
    } else {
        start = asciiNum2;
        end = asciiNum1;
    }

    for (let i = start + 1; i < end; i++) {
        let char = String.fromCharCode(i);
        result.push(char)
    }

    console.log(...result)
}

solve('C',
    '#')