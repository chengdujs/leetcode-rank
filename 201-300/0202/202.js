/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var value = n;
  var valueCache = [];
  do {
    value = String(value)
      .split('')
      .map(x => Number(x))
      .reduce((total, item) => (total += item * item), 0);
    if (valueCache[value]) {
      return false;
    }
    valueCache[value] = true;
  } while (value !== 1);
  return true;
};
