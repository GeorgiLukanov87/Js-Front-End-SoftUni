function solve(input) {
    for (let town of input) {
        let details = town.split(' | ');

        let townName = details[0];
        let latitude = Number(details[1]).toFixed(2);
        let longitude = Number(details[2]).toFixed(2);
        let townObj = {
            'town': townName,
            'latitude': latitude,
            'longitude': longitude,
        };

        console.log(townObj)
    }


}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)