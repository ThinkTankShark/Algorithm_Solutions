/**
 * @param {string} word
 * @return {bool}
 */

var ValidWordAbbr = function(dictionary) {
    this.map = new Map();
    this.getAbbr = function(str) {
        const len = str.length;

        if (len <= 2) {
            return str;
        }

        return str.charAt(0) + (len - 2) + str.charAt(len - 1);
    };

    dictionary.forEach(word => {
        const abbr = this.getAbbr(word);

        if (!this.map.has(abbr)) {
            this.map.set(abbr, word);
        } else {
            if (this.map.get(abbr) !== word) {
                this.map.set(abbr, '');
            }
        }
    });
};


ValidWordAbbr.prototype.isUnique = function(word) {
    const abbr = this.getAbbr(word);

    return !this.map.has(abbr) || this.map.get(abbr) === word;
};

/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var vwa = new ValidWordAbbr(dictionary);
 * vwa.isUnique("word");
 * vwa.isUnique("anotherWord");
 */
