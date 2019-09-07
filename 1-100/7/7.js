/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var isNegative = x < 0;
  var reverseX = +String(Math.abs(x))
    .split('')
    .reverse()
    .join('');
  if (reverseX > 2147483647) {
    return 0;
  }
  return isNegative ? -reverseX : reverseX;
};
