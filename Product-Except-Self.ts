
const productExceptSelf = (nums) => {

    let results = [];

    const mult = (arr) => {
         return arr.reduce( (acc, curr) => {
            return  acc * curr;
        })
    }

    function removeElement(array, index) {
    return array.filter((_, i) => i !== index);
    }

    for( let i = 0; i < nums.length; i++) {
        var temp = removeElement(nums, i)
        results.push(mult(temp))
    }

    return results
}

//Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]