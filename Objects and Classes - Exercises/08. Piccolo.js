function solve(input) {
    let parking = [];
    for (let i = 0; i < input.length; i++) {
        let details = input[i].split(', ')
        let direction = details[0];
        let carNumber = details[1];


        if (direction === 'IN') {
            if (!parking.includes(carNumber)){
                parking.push(carNumber);
               }
        } else if (direction === 'OUT') {
            if (parking.includes(carNumber)){
                let index = parking.indexOf(carNumber);
                parking.splice(index, 1)
            }
           
        }

    }
    if (parking.length > 0) {
        console.log(parking.sort().join('\n'))
    } else {
        console.log('Parking Lot is Empty')
    }

}



solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'])




// function piccolo(arr) {
//     let cars = [];
 
//     for (let carDetails of arr) {
//        let [direction, number] = carDetails.split(', ');
//        if (direction === 'IN') {
//            cars.push(number);
//        } else if (direction === 'OUT') {
//            if (cars.includes(number)) {
//             let index = cars.indexOf(number);
//             cars.splice(index, 1);
//            }
//        }
//     }
 
//     if (cars.length > 0) {
//         let sorted = cars.sort((a, b) => a.localeCompare(b));
//         for (let carNum of sorted) {
//             console.log(carNum);
//         }
//     } else {
//         console.log('Parking Lot is Empty');
//     }
    
// }