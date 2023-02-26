function solve(data1, data2) {
    let words = data1.split(', ');
    let text = data2.split(' ');

    for (let el of text) {
        if (el.includes('*')) {
            for (let currWord of words) {
                if (el.length === currWord.length) {
                    let index = text.indexOf(el);
                    text.splice(index, 1, currWord)
                }
            }

        }
    }
    console.log(...text)

}

solve('great',
'softuni is ***** place for learning new programming languages')

solve('great, learning',
    'softuni is ***** place for ******** new programming languages')