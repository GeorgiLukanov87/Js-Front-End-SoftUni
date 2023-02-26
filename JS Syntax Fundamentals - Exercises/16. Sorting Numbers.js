function solve(input) {
    let nums = input;
    result = [];
    nums.sort(function (a, b) {
        return a - b;
    });

    while (nums.length > 0) {
        let first_num = nums.shift()
        let second_num = nums.pop()
        result.push(first_num, second_num)
    }

    return result
}