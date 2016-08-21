/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function(nestedList) {

    function traverse(arr, lvl) {
        var sum = 0;

        for(var i = 0; i < arr.length; i++) {
            if(arr[i].isInteger()) {
                sum += arr[i].getInteger()*lvl;
            } else {
                sum += traverse(arr[i].getList(), lvl + 1);
            }
        }

        return sum;
    }

    return traverse(nestedList, 1);
};
