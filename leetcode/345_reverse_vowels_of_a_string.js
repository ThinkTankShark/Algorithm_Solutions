/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) { // "hello"
    if(s.length < 2){ return s; }

var p1 = 0, p2 = s.length - 1; //p1 = 0, p2 = 4
var newStr = s.split(''); // '' ['h', 'e', 'l', 'l', 'o']

while(p1 < p2){
  if(isVowel(newStr[p1]) && isVowel(newStr[p2])){
    newStr = swap(newStr, p1, p2);
    p1++;
    p2--;
  }else if(!isVowel(newStr[p1])){
    p1++;
  }else if(!isVowel(newStr[p2])){
    p2--;
    }
}

return newStr.join('');
};

function isVowel(char){
  var vowels = {
    'a': true,
    'e': true,
        'i': true,
        'o': true,
        'u': true
  };
    char = char.toLowerCase();
  return vowels[char] ? true : false;
}

function swap(arr, idx1, idx2){
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;

  return arr;
}
