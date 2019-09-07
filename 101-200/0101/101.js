/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root === null) {
    return true;
  }
  return isSymmetricTree([root]);
};

function isSymmetricTree(nodeArr) {
  // 判断这一层的数字构成的数组是否是回文数组，不是，就不对称
  var valArr = nodeArr.map(x => (x === null ? null : x.val));
  if (!isPalindromeArr(valArr)) {
    return false;
  }
  var childNodeArr = [];
  for (var i = 0, len = nodeArr.length; i < len; i++) {
    var node = nodeArr[i];
    if (node !== null) {
      childNodeArr.push(node.left, node.right);
    } else {
      childNodeArr.push(null, null);
    }
  }
  if (childNodeArr.every(x => x === null)) {
    return true;
  }
  return isSymmetricTree(childNodeArr);
}

/**
 * 判断数组是否是回文数组
 * @param {*} arr
 */
function isPalindromeArr(arr) {
  var len = arr.length;
  var middleLen = Math.floor(len / 2);
  for (var i = 0; i < middleLen; i++) {
    if (arr[i] !== arr[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
