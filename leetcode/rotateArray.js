var rotate = function(nums, k) {
  var len = nums.length;
  if (k === 0){
    return;
  }
  else if (k < len && len >= 2 * k + 1){
    for (var i = 1; i <= k + 1; i++){
      var temp = nums.shift();
      nums.push(temp);
    }
  } else {
    for (var i = 0; i < k; i++){
      var temp = nums.shift();
      nums.push(temp);
    }
  }

};

var num = [1,2,3];
rotate(num, 2);
console.log(num);

// var eq = require('assert').deepEqual;
// var num = [1,2,3,4,5,6,7];
// rotate(num, 3);
// eq(num, [5, 6, 7, 1, 2, 3, 4]);


