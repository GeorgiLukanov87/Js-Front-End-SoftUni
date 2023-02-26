function employees(input) {
    for (let person of input) {
        let employeeObj = {
            'name': person,
            'id': person.length,
        }
        console.log(`Name: ${employeeObj.name} -- Personal Number: ${employeeObj.id}`)
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])