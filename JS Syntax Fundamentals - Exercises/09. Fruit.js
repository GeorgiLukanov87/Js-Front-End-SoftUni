function solve(fruit , grams, price) {
    let kgs = grams/1000;
    let money = kgs * price;
    console.log(`I need $${money.toFixed(2)} to buy ${kgs.toFixed(2)} kilograms ${fruit}.`)

}


solve('orange', 2500, 1.80)
solve('apple', 1563, 2.35)