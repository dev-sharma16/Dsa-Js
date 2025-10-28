//* Linked list problems

//? Leetcode : 876. Middle of the Linked List
// brute force:
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
// var middleNode = function(head) {
//     let temp = head;
//     let size = 1;

//     while(temp.next != null){
//         temp = temp.next;
//         size++;
//     }

//     let mid = Math.floor(size / 2);
//     temp = head;

//     for (let i = 0; i < mid; i++) {
//         temp = temp.next;
//     }

//     return temp;
// };

// Using 'Floyd's Tortoise and Hare Algorithm':
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
var middleNode = function(head) {
    let fast = head;
    let slow = head;

    while(fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
};

//? Leetcode : 21. Merge Two Sorted Lists
//* iterative way
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let temp = dummy;

    while(list1 != null && list2 != null){
        if(list1.val < list2.val){
            temp.next = list1;
            list1 = list1.next;
        } else {
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;
    }

    if(list1 == null) temp.next = list2;
    else temp.next = list1;
    return dummy.next;
};

//* recursive way
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list1 == null) return list2;
    if(list2 == null) return list1;

    if(list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};

