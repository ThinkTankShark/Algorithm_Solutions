/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var hash = {};
    var arr1, arr2;

    if(nums1.length > nums2.length) {
        arr1 = nums2;
        arr2 = nums1;
    } else {
        arr1 = nums1;
        arr2 = nums2;
    }

    var count = arr1.length;
    var result = [];

    for(var i = 0; i < arr1.length; i++) {
        hash[arr1[i]] = hash[arr1[i]] || 0;
        hash[arr1[i]]++;
    }

    for(i = 0; i < arr2.length && count !== 0; i++) {
        if(hash[arr2[i]] > 0) {
            hash[arr2[i]]--;
            count--;
            result.push(arr2[i]);
        }
    }

    return result;
};
