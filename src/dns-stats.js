const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  return domains.map(element=>element.split('.')).reduce(function(obj,currentDomain){
    let str = ''
    for(let i=currentDomain.length-1; i>=0; i--){
      str+=`.${currentDomain[i]}`
      obj[str]?obj[str]+=1:obj[str]=1
    }
    return obj
  },{})
}

module.exports = {
  getDNSStats
};
