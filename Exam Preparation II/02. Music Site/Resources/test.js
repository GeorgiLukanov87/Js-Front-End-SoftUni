// function solve(text) {
//     for (let i = 0; i < text.length; i++) {
//         let char = text[i];
//         if (char === char.toUpperCase()) {
//             let index = text.indexOf(char);
//             console.log(`Letter is upper on index -> ${index}`)
//         }
//     }


//     function isAlpha(char){

//     }
// }
// solve('exAmPle MamPel')
// 65-90





function solve(string) {
    let result = [];
    for (let i = 65; i <= 90; i++) {
        let char = String.fromCharCode(i);
        result.push(char)
    }
    let isAlpha = true;
    for (let j = 0;j < string.length;j ++){
        let currentLetter = string[j].toUpperCase();
        if (!result.includes(currentLetter)){
            let index = string.indexOf(currentLetter);
            console.log(`At index ${index} is not alpha`)
            isAlpha = false;
            console.log(`Word "${string}" is not alpha!`)
            break;
        }
    }
    if (isAlpha){
        console.log(`Word - "${string}" is alpha!`)
    }
}

solve('aAaZz')
console.log(' ')
solve('zdSDda5dada')
console.log(' ')
solve('dsa$@c')
console.log(' ')
solve('12ABC')
console.log(' ')
solve('aBc')


