function solve(input1, input2, input3) {
    let numberOfPersons = input1;
    let typeOfPersons = input2;
    let day = input3;
    let total_price = 0;

    if (typeOfPersons === 'Students') {
        if (day === 'Friday') {
            total_price += numberOfPersons * 8.45
        } else if (day === 'Saturday') {
            total_price += numberOfPersons * 9.80
        } else if (day === 'Sunday') {
            total_price += numberOfPersons * 10.46
        }

        if (numberOfPersons >= 30) {
            total_price *= 0.85
        }

    } else if (typeOfPersons === 'Business') {
        if (day === 'Friday') {
            total_price += numberOfPersons * 10.90
        } else if (day === 'Saturday') {
            total_price += numberOfPersons * 15.60
        } else if (day === 'Sunday') {
            total_price += numberOfPersons * 16
        }

        if (numberOfPersons >= 100) {
            let discount = (total_price / numberOfPersons) * 10
            total_price -= discount
        }

    } else if (typeOfPersons === 'Regular') {
        if (day === 'Friday') {
            total_price += numberOfPersons * 15
        } else if (day === 'Saturday') {
            total_price += numberOfPersons * 20
        } else if (day === 'Sunday') {
            total_price += numberOfPersons * 22.50
        }

        if (numberOfPersons >= 10 && numberOfPersons <= 20) {
            total_price *= 0.95
        }

    }

    console.log(`Total price: ${total_price.toFixed(2)}`)

}


solve(30,
    "Students",
    "Sunday")

solve(40,
    "Regular",
    "Saturday")