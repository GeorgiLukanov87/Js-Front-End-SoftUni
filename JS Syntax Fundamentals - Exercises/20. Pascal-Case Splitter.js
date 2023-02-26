function solve(input) {
    let result = '';
    let output = [];
    result += input[0]
    
    for (let char of input.slice(1)) {
        is_true = (containsUppercase(char))
        if (is_true) {
            output.push(result)
            result = char
        } else {
            result += char
        }

    }

    function containsUppercase(str) {
        return Boolean(str.match(/[A-Z]/));
    }
    output.push(result)
    console.log(output.join(', '))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve('HoldTheDoor')
solve('ThisIsSoAnnoyingToDo')