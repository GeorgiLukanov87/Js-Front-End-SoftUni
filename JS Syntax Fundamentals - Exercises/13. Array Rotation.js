function solve(nums, iterations) {
    while (iterations !== 0) {
        iterations--;
        nums.push(nums.shift());
    }
    console.log(...nums)
}

solve([51, 47, 32, 61, 21], 2)

solve([32, 21, 61, 1], 4)

solve([2, 4, 15, 31], 5)