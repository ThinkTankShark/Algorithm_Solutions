/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }

    var div = 1;

    while(parseInt(x / div) >= 10) {
        div *= 10;
    }

    var left, right;

    while(div > 1) {
        left = parseInt(x / div);
        right = x % 10;
        if(left !== right) {
            return false;
        }

        x = x % div;
        x = parseInt(x/10);
        div /= 100;
    }

    return true;
};
