function sum(n1, n2, n3) {
    let result = n1 + n2;
    let final_result = subtract(result, n3)
    console.log(final_result)
    
    function subtract(result, n3) {
        return result - n3
    }

}




sum(
    42,
    58,
    100
)