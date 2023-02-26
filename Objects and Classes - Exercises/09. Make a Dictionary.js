function solve(input) {
    let myDict = {};
    input.forEach(element => {
        let [rawTerm, rawDefinition] = (element.split('":"'))
        let term = rawTerm.slice(2, rawTerm.length)
        let definition = (rawDefinition.replace('"}', ''))
        myDict[term] = definition
    });

    for (const [key, value] of Object.entries(myDict).sort()) {
        console.log(`Term: ${key} => Definition: ${value}`)
    }
}


solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])