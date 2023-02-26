function solve(text) {
    let objects = {};
    let words = text.shift().split(' ')

    for (let word of words) {
        let occurances = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] === word)
                occurances++;
        }
        objects[word] = occurances;
    }

    let result = Object.entries(objects).sort((a, b) => b[1] - a[1]);
    result.forEach(element => {
        console.log(`${element[0]} - ${element[1]}`)
    });



}




solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])

