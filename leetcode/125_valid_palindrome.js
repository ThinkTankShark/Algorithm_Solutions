/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s){
    s = s.toLowerCase();
    var p1 = 0, p2 = s.length - 1;

    while(p1 < p2){
        if(!s[p1].match(/[a-z0-9]/)){
            p1++;
        }else if(!s[p2].match(/[a-z0-9]/)){
            p2--;
        }else if(s[p1] !== s[p2]){
            return false;
        }else {
            p1++;
            p2--;
        }
    }

    return true;
}
