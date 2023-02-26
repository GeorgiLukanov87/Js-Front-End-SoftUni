function matrix(n) {
    let matrix = [];
    matrix.length = n;
    matrix.fill(n)

    for (let i = 0; i < n;i++){
        console.log(...matrix)
    }
    
}

matrix(7)