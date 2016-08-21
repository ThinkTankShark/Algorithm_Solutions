/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var hash = {};
    var result = [];
    var i = 0;
    while(i < nums1.length || i < nums2.length) {
        if(i < nums1.length) {
            hash[nums1[i]] = hash[nums1[i]] || [];
            hash[nums1[i]][0] = true;
        }

        if(i < nums2.length) {
            hash[nums2[i]] = hash[nums2[i]] || [];
            hash[nums2[i]][1] = true;
        }

        i++
    }

    for(i in hash) {
        if(hash[i][0] && hash[i][1]) {
            result.push(parseInt(i));
        }
    }

    return result;
};
