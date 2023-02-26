function solve(nums) {
    for (let i = 0; i < nums.length; i++) {
        let currNumber = nums[i];
        let result = isPalindrome(currNumber);
        console.log(result)
    }

    function isPalindrome(x){
        if (x < 0) return false
    
        let reversed = 0, y = x
    
        while (y > 0) {
            const lastDigit = y % 10
            reversed = (reversed * 10) + lastDigit
            y = (y / 10) | 0
        }
        return x === reversed
    }
}



solve([123, 323, 421, 121])