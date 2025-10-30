//* Linked List problems

//? Reverse a Linked list
// iteravite way
let prev = null;
let curr = head;

while(curr != null){
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
}

return prev;

// recursive way (h.w)


//? Leetcode : 141. Linked List Cycle
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head || !head.next) {
        return false
    }

    let fast = head.next;
    let slow = head;

    while (fast != null && fast.next != null) {
        if (fast == slow) return true;

        fast = fast.next.next;
        slow = slow.next;
    }

    return false;
};


//? Leetcode : 142. Linked List Cycle II
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var detectCycle = function(head) {
//     if (!head || !head.next) {
//         return null;
//     }

//     let fast = head;
//     let slow = head;

//     while(fast != null && fast.next != null){
//         slow =  slow.next;
//         fast = fast.next.next;

//         if(fast == slow) {
//             fast = head;
//             while(fast != slow){
//                 fast = fast.next;
//                 slow = slow.next;
//             }
//             return fast;
//         }
//     }

//     return null;
// };
//* using hashMap
var detectCycle = function(head) {
    let map = new Map();
    let temp = head;

    while(temp && temp.next !== null){
        if(map.has(temp)){
            return temp;
        }
        map.set(temp, temp.val);
        temp = temp.next;
    }

    return null;
};


//? Leetcode : 83. Remove Duplicates from Sorted List
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
var deleteDuplicates = function(head) {
    let temp = head;

    while(temp != null && temp.next != null){
        if(temp.val == temp.next.val){
            temp.next = temp.next.next;
        } else {
            temp = temp.next
        }
    }

    return head;
};


//? Leetcode : 82. Remove Duplicates from Sorted List II
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
var deleteDuplicates = function(head) {
    if (!head) return null;

    let dummy = new ListNode(-1);
    dummy.next = head;
    let prev = dummy;
    let temp = head;

    while (temp) {
        if (temp.next && temp.val === temp.next.val) {
            let dup = temp.val;
            while (temp && temp.val === dup) {
                temp = temp.next;
            }
            prev.next = temp;
        } else {
            prev = temp;
            temp = temp.next;
        }
    }

    return dummy.next;
};


//? Leetcode : 160. Intersection of Two Linked Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;

    let pA = headA, pB = headB;

    while(pA !== pB){
        pA = (pA == null) ? headB : pA.next;
        pB = (pB == null) ? headA : pB.next;
    }

    return pA
};

//? Leetcode : 203. Remove Linked List Elements
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) return head;

    while (head && head.val === val) {
        head = head.next;
    }

    let prev = head;
    let temp = head ? head.next : null;

    while (temp) {
        if (temp.val === val) {
            prev.next = temp.next;  
        } else {
            prev = temp;            
        }
        temp = temp.next;           
    }

    return head; 
};

//? Leetcode : 237. Delete Node in a Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

//? Leetcode : 234. Palindrome Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var reverseLL = function(head){
    let prev = null;
    let curr = head
    while (curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return prev; 
}
var isPalindrome = function(head) {
    let isPlaindrome = true;
    let slow = head;
    let fast = head;

    while (fast && fast.next){
        slow = slow.next
        fast = fast.next.next;
    }

    let mid = reverseLL(slow);

    while(mid){
        if(head.val != mid.val){
            isPlaindrome = false;
        }
        head = head.next;
        mid = mid.next;
    }

    return isPlaindrome;
};
