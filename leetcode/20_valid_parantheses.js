/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    var index = 0;

    while(index < s.length){
        var cur = s[index];

        if(cur === '(' || cur === '[' || cur === '{'){
            stack.push(cur);
        }else{
            var oldCur = stack.pop();
            if( oldCur === '(' && cur !== ')' ){
                return false;
            }else if( oldCur === '[' && cur !== ']' ){
                return false;
            }else if( oldCur === '{' && cur !== '}' ){
                return false;
            }else if(oldCur === undefined) {
                return false;
            }
        }

        index++;
    }
    // console.log(stack);
    return stack.length === 0;
};
