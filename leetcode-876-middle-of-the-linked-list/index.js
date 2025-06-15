class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

const n1 = new ListNode(1)
const n2 = new ListNode(2)
const n3 = new ListNode(3)
const n4 = new ListNode(4)
const n5 = new ListNode(5)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
// console.log("🚀 ~ n1:", n1)

// [1,2,3,4,5] => 3
// [1,2,4,5,6,7,8] => 5
// [1,2,3,4] => 2
// [1,2,3,4,5,6] => 4

//slow fast
// slow, fast = head
// fast && fast.next => slow.next; fast.next.next
// result return slow

const middleLinkedList = (head) => {
  let slow = head, fast = head

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

const middle = middleLinkedList(n1);
console.log(middle.val);
