function solve(text) {
    let result = [];
    let words = text.toLowerCase().split(' ');

    for (let word of words) {
        let occurances = 0;
        for (let i = 0; i < words.length; i++) {
            if (words[i] === word)
                occurances++;
        }
        if (occurances % 2 !== 0 && !result.includes(word)) {
            result.push(word)
        }

    }

    console.log(result.join(' '))

}


solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')

solve('Cake IS SWEET is Soft CAKE sweet Food')
