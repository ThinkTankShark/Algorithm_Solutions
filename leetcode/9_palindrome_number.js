/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  var div = 1;

  while (parseInt(x / div) >= 10) {
    div *= 10;
  }

  var left, right;

  while (div > 1) {
    left = parseInt(x / div);
    right = x % 10;
    if (left !== right) {
      return false;
    }

    x = x % div;
    x = parseInt(x / 10);
    div /= 100;
  }

  return true;
};

// a slightly different approach (easier to read)
const isPalindrome2 = (number) => {
  if (number < 0) {
    return false;
  }

  if (number < 10) {
    return true;
  }

  let reverse = 0;
  let temp = number;
  while (temp !== 0) {
    const remainder = temp % 10;
    reverse = reverse * 10 + remainder;
    temp = Math.floor(temp / 10);
  }

  if (number === reverse) {
    return true;
  }

  return false;
};
