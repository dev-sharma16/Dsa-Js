//* Linked List Problems

//? Leetcode : 25. Reverse Nodes in k-Group
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseLinkedList = function (start, end){
    let cur = start, prev = null;
    while(cur != end){
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp
    }
    return prev;
}

var reverseKGroup = function(head, k) {
    if(head == null || head.next == null || k ==1) return head;
    let start = head, end = head;
    for(let i=0; i<k; i++){
        if(end == null) return head;
        end = end.next;
    }
    let newNode = reverseLinkedList(start, end);
    start.next = reverseKGroup(end, k);
    return newNode;
};

//? Leetcode : 2. Add Two Numbers
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let dummy = new ListNode(-1);
    let temp = dummy;
    while(l1 != null || l2 != null){
        let val1 = (l1 == null) ? 0 : l1.val;
        let val2 = (l2 == null) ? 0 : l2.val;
        let val = val1 + val2 + carry;
        carry = Math.floor(val/10);

        let newNode = new ListNode(val%10);
        temp.next = newNode;
        temp = temp.next;

        if(l1 != null) l1 = l1.next; 
        if(l2 != null) l2 = l2.next;
    }

    if(carry > 0) {
        temp.next = new ListNode(carry);
    }

    return dummy.next;
};

//? Leetcode : 19. Remove Nth Node From End of List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let fast = dummy;
    let slow = dummy;

    for(let i=0; i<n; i++){
        fast = fast.next;
    }

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
};

//? Leetcode : 24. Swap Nodes in Pairs
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function(head) {
    if(!head || !head.next) return head;

    let dummy = new ListNode(0, head);
    let prev = dummy;

    while(prev.next && prev.next.next){
        let first = prev.next;
        let second = prev.next.next;

        first.next = second.next;
        second.next = first;
        prev.next = second;

        prev = first;
    }

    return dummy.next;
};