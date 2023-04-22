
function solve(inputData) {
    const tokens = inputData.shift();
    const details = tokens.split('|');

    while (inputData) {
        let item = inputData.shift();
        if (item === 'Finish') {
            console.log(details.join('->'));
            let length = details.length;
            let idx1 = length - 1;
            let idx2 = details[idx1];
            console.log(`The winner is: ${idx2}`);
            break;


        } else {
            let currentWorking = item.split(' ');
            let cmd = currentWorking.shift();
            if (cmd === 'Retake') {
                let firstH = currentWorking.shift();
                let secondH = currentWorking.shift();

                let firstIdx = details.indexOf(firstH);
                let secondHIdx = details.indexOf(secondH);

                let neededIndex = firstIdx + 1;
                if (secondHIdx >= neededIndex) {
                    let temp = details[firstIdx];
                    details[firstIdx] = details[secondHIdx];
                    details[secondHIdx] = temp;
                    console.log(`${firstH} retakes ${secondH}.`)
                } else {
                    continue;
                }


            } else if (cmd === 'Trouble') {
                let firstHorse = currentWorking.shift();
                let firstHorseIndex = details.indexOf(firstHorse);
                let secondHorseIndex = firstHorseIndex - 1;
                if (firstHorseIndex === 0) {
                    continue;
                } else {
                    let current = details[firstHorseIndex];
                    details[firstHorseIndex] = details[secondHorseIndex];
                    details[secondHorseIndex] = current;
                    console.log(`Trouble for ${firstHorse} - drops one position.`)
                }

            } else if (cmd === 'Rage') {
                let firstHorse = currentWorking.shift();
                let firstHorseIndex = details.indexOf(firstHorse);
                let maxIndex = details.length;
                let winnerIdx = maxIndex - 1;
                if (firstHorseIndex === winnerIdx) {
                    console.log(`${firstHorse} rages 2 positions ahead.`);
                    continue;
                } else {
                    let secondHorseIndex = firstHorseIndex + 1;
                    let temp = details[firstHorseIndex];
                    details[firstHorseIndex] = details[secondHorseIndex];
                    details[secondHorseIndex] = temp;
                }

                let secondFirstHorseIndex = details.indexOf(firstHorse);
                let secondMaxIndex = details.length;
                let secondChampionIndex = secondMaxIndex - 1;

                if (secondFirstHorseIndex === secondChampionIndex) {
                    console.log(`${firstHorse} rages 2 positions ahead.`);
                    continue;
                } else {
                    let secondSecondHorseIndex = secondFirstHorseIndex + 1;
                    let temporary = details[secondFirstHorseIndex];
                    details[secondFirstHorseIndex] = details[secondSecondHorseIndex];
                    details[secondSecondHorseIndex] = temporary;
                }

                console.log(`${firstHorse} rages 2 positions ahead.`);

            } else if (cmd === 'Miracle') {
                let lastHorse = details.shift();
                details.push(lastHorse);
                console.log(`What a miracle - ${lastHorse} becomes first.`)
            }
        }
    }
}

solve((['Bella|Alexia|Sugar',
    'Retake Alexia Sugar',
    'Rage Bella',
    'Trouble Bella',
    'Finish']))