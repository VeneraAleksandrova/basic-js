const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const mainStr = s1.length>=s2.length?s1:s2
  let addStr = mainStr===s2?s1:s2
  let count = 0
  mainStr.split('').forEach(char=>{
    if(addStr.includes(char)){
      addStr=addStr.replace(char,'')
      count++
    }
})
  return count
}

module.exports = {
  getCommonCharacterCount
};
