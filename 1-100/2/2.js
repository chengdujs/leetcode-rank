/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var listNode = new ListNode(0);
  var current = listNode;
  var b = 0;
  do {
    var node = new ListNode(_getVal(l1) + _getVal(l2) + b);
    current.next = node;
    if (node.val >= 10) {
      node.val = node.val % 10;
      b = 1;
    } else {
      b = 0;
    }
    current = current.next;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  } while ((l1 && l1.next) || (l2 && l2.next));
  if (l1 || l2 || b) {
    current.next = new ListNode(_getVal(l1) + _getVal(l2) + b);
    if (current.next.val >= 10) {
      current.next.val = current.next.val % 10;
      current.next.next = new ListNode(1);
    }
  }
  return listNode.next;
};

function _getVal(listNode) {
  return (listNode && listNode.val) || 0;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}
