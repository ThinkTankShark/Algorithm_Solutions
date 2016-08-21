/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    var idx1 = -1;
    var idx2 = -1;
    var dist = words.length - 1;

    for(var i = 0; i < words.length; i++) {
        if(words[i] === word1) {
            idx1 = i;
        } else if(words[i] === word2) {
            idx2 = i;
        }

        if(idx1 !== -1 && idx2 !== -1) {
          dist = Math.min(dist, Math.abs(idx1 - idx2))
        }
    }

    return dist;
};
