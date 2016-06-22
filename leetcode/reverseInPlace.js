// naive solution
// function reverseWords(str) {
//   var newStr = str.split(' ');
//   var length = str.length;
//   for (var i = newStr.length - 1; i >= 0; i--){
//     newStr.push(newStr[i]);
//   }
//   newStr = newStr.join(' ').slice(length);
// }

// in place I
// var reverseWords = function(words) {
//   words = words.reverse();

//   var start = 0;
//   var val;
//   for (var i = 0; i < words.length; i ++) {
//     val = words[i];
//     if (val === ' ') {
//       reverseWord(words, start, i - 1);
//       start = i + 1;
//     }
//   }
//   reverseWord(words, start, i - 1);
// }

// function reverseWord(arr, start, end) {
//   if (start >= end || end >= arr.length) return;

//   while (start < end) {
//     tmp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = tmp;
//     start ++;
//     end --;
//   }
// }

// in place II
function reverseWords(str) {
  var index = [0];
  var idx = 0;
  var length = str.length;
  while((idx = str.indexOf(' ', idx + 1)) > 0) {
    index.push(idx);
  }

  index.push(length);
  var p1 = index.length - 1;
  var p2 = p1 - 1;
  while (p2 >= 0){
    if (p2 === 0){
      str = str + ' ' + str.slice(index[p2], index[p1]);
    } else {
      str = str + str.slice(index[p2], index[p1]);
    }
    p1--;
    p2--;
  }
  str = str.slice(length).trim();
  return str;
}

console.log(reverseWords("the sky is blue"));
