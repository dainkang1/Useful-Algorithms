
var sortNumsInPlace= function(nums) {
    let l = 0;
    let r = nums.length-1;
    let i = 0;

    const swap = (a,b) => [nums[a], nums[b]] = [nums[b], nums[a]];

    while( i <= r) {
        let n = nums[i]
        if(n == 0){
            swap(i,l)
            l++
            i++
        }
         else if(n == 2) {
            swap(i,r)
            r--
        } else {
            i++
        }
       
    }

};

nums = [2,0,2,1,1,0]
