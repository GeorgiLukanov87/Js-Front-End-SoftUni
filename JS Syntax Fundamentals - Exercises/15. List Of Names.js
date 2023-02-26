function solve(input) {
    let items = input;
    items.sort((a, b) => a.localeCompare(b));
    
    for (let i = 0; i < items.length; i++) {
        console.log(`${i + 1}.${items[i]}`)
    }

}