function solve(product_list1, product_list2) {
    let myObj = {};

    function calc_products(product_list) {
        for (let i = 0; i < product_list.length; i += 2) {
            let name = product_list[i];
            let qnty = Number(product_list[i + 1]);
            let result = myObj.hasOwnProperty(name);
            if (!result) {
                myObj[name] = 0;
            }
            myObj[name] += qnty;
        }
        return myObj
    }

    calc_products(product_list1);
    calc_products(product_list2);

    for (let [key, value] of Object.entries(myObj)) {
        console.log(`${key} -> ${value}`);
    }
}

solve([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ])