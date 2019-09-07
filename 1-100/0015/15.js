/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var result = [];
  if (nums.length < 3) {
    return result;
  }
  // 先排序
  nums = nums.sort((a, b) => a - b);
  // 循环匹配
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    var remaindValue = 0 - nums[i];
    for (var j = i + 1; j < len; j++) {
      var remaindValue2 = remaindValue - nums[j];
      for (var k = j + 1; k < len; k++) {
        if (nums[k] === remaindValue2) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  // 去重
  var keyObj = {};
  return result.filter(x => {
    const key = String(x);
    if (keyObj[key]) {
      return false;
    }
    keyObj[key] = true;
    return true;
  });
};
