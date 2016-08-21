/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var len = nums.length;
    var output = Array(len).fill(1);
    var left = 1;
    var right = 1;

    for(var i = 0; i < len - 1; i++) {
        left *= nums[i];
        right *= nums[len - i - 1];
        output[i + 1] *= left;
        output[len - i - 2] *= right;
    }

    return output;
};
