/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(!nums || nums.length === 0) {
        return 0;
    }

    var end = 0;

    for(var i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[end]) {
            end++;

            if(i !== end) {
                nums[end] = nums[i];
            }
        }
    }

    return end+1;
};
