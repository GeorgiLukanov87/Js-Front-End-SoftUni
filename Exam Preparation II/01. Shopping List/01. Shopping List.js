function solve(input) {
    let products = input.shift().split('!');
    while (true) {
        let details = input.shift()
        if (details === 'Go Shopping!') {
            break;
        }
        let cmd = details.split(' ');

        if (cmd.length === 3) {
            let oldItem = cmd[1];
            let newItem = cmd[2];
            if (products.includes(oldItem)) {
                let index = products.indexOf(oldItem);
                products.splice(index, 1, newItem);
            }

        } else {
            let item = cmd[1];
            if (cmd[0] === 'Urgent') {
                if (!products.includes(item)) {
                    products.unshift(item);
                }

            } else if (cmd[0] === 'Unnecessary') {
                if (products.includes(item)) {
                    let index = products.indexOf(item);
                    products.splice(index, 1);
                }

            } else if (cmd[0] === 'Rearrange') {
                if (products.includes(item)) {
                    let index = products.indexOf(item);
                    products.splice(index, 1);
                    products.push(item);
                }
            }
        }
    } console.log(products.join(', '))
}


solve(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])


