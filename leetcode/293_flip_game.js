/**
 * @param {string} s
 * @return {string[]}
 */
var generatePossibleNextMoves = function(s) {
    var result = [];
    var arr = s.split('');

    for(var i = 0; i < s.length - 1; i++) {
        if(arr[i] === '+' && arr[i+1] === '+') {
            arr[i] = '-';
            arr[i+1] = '-';
            result.push(arr.join(''));
            arr[i] = '+';
            arr[i+1] = '+';
        }
    }

    return result;
};
