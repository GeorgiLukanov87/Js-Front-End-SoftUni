function solve(word, data) {
    let text = data.toLowerCase().split(' ')
    for (let el of text) {
        if (word === el) {
            console.log(word)
            return
        }

    }
    console.log(`${word} not found!`)

}

solve('javascript',
    'JavaScript is the best programming language')


solve('python',
    'JavaScript is the best programming language')