/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {

    var result = [];
    var map = new Map();

    for(var i = 0; i < strings.length; i++){
        var string = strings[i];
        var shift = '';

        for(var j = 0; j < string.length; j++){
            shift += (string.charCodeAt(j) - string.charCodeAt(0) + 26) % 26;
            shift += ' ';
        }

        if(map.has(shift)){
            map.get(shift).push(string);
        }else{
          map.set(shift, [string]);
        }
    //   console.log(map);
    }

    map.forEach(function(value, key){
       result.push(value);
    });

    return result;

};
