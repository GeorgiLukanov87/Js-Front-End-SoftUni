function solve(input, param2) {
    let nums = input;
    let step = param2
    let result = []

    for (i = 0; i < nums.length; i += step) {
        result.push(nums[i])
    }
    return result

}