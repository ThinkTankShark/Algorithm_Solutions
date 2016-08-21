/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n < 1) { return false; }
    if(n === 1){ return true; }

    var count = 1;

    while(count <= n){
        count *= 2;
    }
    // console.log(count);
    return count / 2 === n;
};
