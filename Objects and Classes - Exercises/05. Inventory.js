function solve(input) {
    class Hero {
        constructor(hero, level, ...items) {
            this.hero = hero;
            this.level = level;
            this.items = items;
        }
    }

    let heroes = [];

    for (let details of input) {
        currHeroDetails = details.split(' / ')
        let name = currHeroDetails[0];
        let level = Number(currHeroDetails[1]);
        let skills = currHeroDetails[2];

        heroes.push(new Hero(name, level, skills))
    }

    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach((e) => {
        console.log(`Hero: ${e.hero}`)
        console.log(`level => ${e.level}`)
        console.log(`items => ${e.items}`)

    });

}




solve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ])