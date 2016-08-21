/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if(digits.length === 0){ return [1] }

    var pointer = digits.length - 1,
        val = 0, check = true;

    while(check){
        val = digits[pointer] + 1;
        if(val > 9 && pointer === 0){
            digits[pointer] = 0;
            digits.unshift(1);
            check = false;
        }else if(val > 9){
            digits[pointer] = 0;
            pointer--;
        }else {
            digits[pointer] = val;
            check = false;
        }
    }

    return digits;
};
