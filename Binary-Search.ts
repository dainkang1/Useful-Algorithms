var search = function(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;

    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);

        if(target > nums[mid]) {
            lo = mid + 1;
        } else if(target < nums[mid]) {
            hi = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
};