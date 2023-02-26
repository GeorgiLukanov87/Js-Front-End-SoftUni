function solve(speed, area) {
    let limits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }

    let speedDif = 0;
    let currLimit = limits[area];

    if (speed <= currLimit) {
        console.log(`Driving ${speed} km/h in a ${currLimit} zone`)
    } else {
        speedDif = Math.abs(currLimit - speed)
        let status = 'reckless driving';
        if (speedDif <= 20) {
            status = 'speeding'
        } else if (speedDif <= 40) {
            status = 'excessive speeding'
        }
        console.log(`The speed is ${speedDif} km/h faster than the allowed speed of ${currLimit} - ${status}`)
    }


}




solve(21, 'residential')
