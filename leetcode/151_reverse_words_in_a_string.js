/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    return str.split(' ').reverse().join(' ').replace(/^\s+|\s+$/g,'').replace(/\s+/g, ' ');
};
