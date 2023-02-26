function solve(input) {
    let data = input.split(" ")

    for (let word of data) {
        if (word[0].trim().includes('#') && word.length > 1) {
            if (/\B#[A-Za-z]+\b/g.test(word)) {
                console.log(word.slice(1))
            }

        }
    }

}


solve('The sym#bol # is #social@Media known #variously in English-speaking #regions as the #number sign')

