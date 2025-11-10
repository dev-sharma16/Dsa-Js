//* Binary Search Tree
// BST is almost same as the Binary Tree but the only difference is the left node of the root nood is small and right node will be the greater

//? Implementation of BST and its operation
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(){
    this.root = null;
  }
  insertNode(root, val){
    if(root == null){
      root = new TreeNode(val);
      return root;
    }
    if(root.val > val){
      root.left = this.insertNode(root.left, val);
    } else if(root.val < val){
      root.right = this.insertNode(root.right, val);
    }
    return root;
  }

  LDR(root){
    if(root == null) return;
    this.LDR(root.left);
    process.stdout.write(root.val+" ");
    this.LDR(root.right);
  }
}

let obj = new BST();
obj.root = obj.insertNode(obj.root, 50);
obj.root = obj.insertNode(obj.root, 40);
obj.root = obj.insertNode(obj.root, 30);
obj.root = obj.insertNode(obj.root, 45);
obj.root = obj.insertNode(obj.root, 55);
obj.root = obj.insertNode(obj.root, 60);

obj.LDR(obj.root);

//? Leetcode : 98. Validate Binary Search Tree (M) 
// Brute force : run LDR on root, if the array is sorted in ascending then its an valid BST.
// Optimzed : 
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return helper(root, null, null);
};

var helper = function(root, max, min){
    if(root == null) return true;

    if((max != null && max <= root.val) || (min != null && min >= root.val)){
        return false;
    }

    return helper(root.left, root.val, min) && helper(root.right, max, root.val) 
}

//? Leetcode : 700. Search in a Binary Search Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    return helper(root, val, null, null);
};

var helper = function(root, val){
    if(root == null) return null;
    if(root.val == val){ 
        return root;
    } else if(val <= root.val){
        return helper(root.left, val)
    } else {
        return helper(root.right, val)
    }
}

//? Leetcode : 230. Kth Smallest Element in a BST (M)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let arr = [];

    function LDR(root){
        if(root == null) return;
        
        LDR(root.left);
        arr.push(root.val);
        LDR(root.right);
    }

    LDR(root);

    return arr[k - 1];
};

//? Leetcode : 450. Delete Node in a BST (M)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(root == null) return null;
    else if(root.val>key) root.left = deleteNode(root.left, key);
    else if(root.val<key) root.right = deleteNode(root.right, key);
    else {
        if(root.left == null && root.right == null) return null;
        else if(root.right == null) return root.left;
        else if(root.left == null) return root.right;
        else {
            let leftMost = leftMostRightTree(root.right);
            root.val = leftMost.val;
            root.right = deleteNode(root.right, leftMost.val)
        }
    }

    return root;
};

var leftMostRightTree = function(root) {
    while(root != null && root.left != null){
        root = root.left;
    }

    return root;
}

