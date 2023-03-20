function solve(input) {
    let collection = {};
    let n = Number(input.shift());

    while (n > 0) {
        [piece, composer, key] = input.shift().split('|');
        collection[piece] = { composer, key };
        n--;
    }

    input.forEach(line => {
        let details = line.split('|');
        let action = details.shift();

        if (action === 'Add') {
            [piece, composer, key] = details;
            if (!collection.hasOwnProperty(piece)) {
                collection[piece] = { composer, key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }

        } else if (action === 'Remove') {
            let piece = details.shift();
            if (!collection.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else {
                console.log(`Successfully removed ${piece}!`)
                delete collection[piece];
            }

        } else if (action === 'ChangeKey') {
            [piece, newKey] = details;
            if (!collection.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            } else {
                collection[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }
        }

    });

    for ([piece, info] of Object.entries(collection)) {
        console.log(`${piece} -> Composer: ${info.composer}, Key: ${info.key}`)
    }

}


solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])