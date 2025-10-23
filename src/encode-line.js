const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let num=0
return str.split('').reduce((accumulator, currentValue, index,array) => {
  num++
  if(currentValue!==array[index+1]){
    accumulator += `${num>1?num:''}${currentValue}`
    num=0
  }
  return accumulator
}, '');
}


module.exports = {
  encodeLine
};
