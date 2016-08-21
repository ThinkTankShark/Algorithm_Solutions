/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var hash = {};
  var mLen = magazine.length;
  var rLen = ransomNote.length;
  var mIdx = 0;
  var rIdx = 0;

  while(rIdx < rLen) {
    var rc = ransomNote[rIdx];

    if(hash[rc] === undefined || hash[rc] === 0) {
      var found = false;

      while(mIdx < mLen) {
        var mc = magazine[mIdx];
        hash[mc] = hash[mc] || 0;
        hash[mc]++;
        mIdx++;

        if(mc === rc) {
          found = true;
          break;
        }
      }

      if(!found) {
        return false;
      }
    }

    hash[rc]--;
    rIdx++;
  }

  return true;
};
