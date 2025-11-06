//* Binary Tree
// Tree is an non linear data structure and it created using Nodes and Edges.
// 'Node' are the elements(object) and and 'Edges' are the 'connection' between nodes.
// In Doubly Linked List there are three elements inside an node prev,val,next.
// Like Doubly LL there are three elements in the node of the Tree are left,val,right.
// If parent node has '2 node' as child then its called 'Binary Tree'.
// If parent node has '3 node' as child then its called 'Trinary Tree'.
// If parent node has 'n number of node' as child then its called 'N-Array Tree'.
//? Traversal techniques :- 
// "Pre-Order" Traversal of printing the Tree is 'Data->Left->Right (Pre-Order-DLR)'.
// "Post-Order" Traversal of printing the Tree is 'Left->Right->Data (Post-Order-LRD)'
// "In-Order" Traversal of printing the Tree is 'Left->Data->Right (In-Order-LDR)'
//? All these three travelsal techniques are know as DFS( Depth-First-Search ) algorithms.

let prompt = require('prompt-sync')();

//* Implementation on Binary Tree
class Node {
  constructor(val){
    this.val = val;
    this.right = this.left = null;
  }
}

class Tree {
  buildTree(){
    let data =  Number(prompt("Enter the Value : "));
    if(data == -1) return null;
    let root = new Node(data);
    console.log("Enter the Left data of "+data+" : ");
    root.left = this.buildTree();
    console.log("Enter the Right data of "+data+" : ");
    root.right = this.buildTree();

    return root;
  }                       
  // Pre-Order-DLR
  preOrder(root){
    if(root == null) return;
    process.stdout.write(root.val+ " ") //Data
    this.preOrder(root.left); //Left
    this.preOrder(root.right); //Right
  }
  // Post-Order-LRD
  postOrder(root){
    if(root == null) return;
    this.postOrder(root.left); //Left
    this.postOrder(root.right); //Right
    process.stdout.write(root.val+ " ") //Data
  }
  // In-Order-LDR
  inOrder(root){
    if(root == null) return;
    this.inOrder(root.left); //Left
    process.stdout.write(root.val+ " ") //Data
    this.inOrder(root.right); //Right
  }
}

const tree = new Tree();
const root = tree.buildTree();
console.log("Pre-order Traversal:", );
tree.preOrder(root);
console.log("Post-order Traversal:");
tree.postOrder(root);
console.log("In-order Traversal:");
tree.inOrder(root);

//? Leetcode : 94. Binary Tree Inorder Traversal
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (root === null) return []; 

    const left = inorderTraversal(root.left);
    const right = inorderTraversal(root.right);

    return [...left, root.val, ...right]; 
};

//? Leetcode : 144. Binary Tree Preorder Traversal
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(root == null) return [];

    let left = preorderTraversal(root.left);
    let right = preorderTraversal(root.right);

    return [root.val, ...left, ...right];
};

//? Leetcode : 145. Binary Tree Postorder Traversal
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if(root == null) return [];

    let left = postorderTraversal(root.left);
    let right = postorderTraversal(root.right);

    return [ ...left, ...right, root.val];
};

//? Leetode : 104. Maximum Depth of Binary Tree
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
 * @return {number}
 */
var maxDepth = function(root) {
    if(root == null) return 0;

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    return Math.max(left, right) + 1;
};

//? Leetcode : 101. Symmetric Tree ( DFS Approach )
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
var isSymmetric = function(root) {
    if (!root) return true; 

    function dfs(left, right) {
        if (!left && !right) return true;        
        if (!left || !right) return false;       
        if (left.val !== right.val) return false; 

        return dfs(left.left, right.right) && dfs(left.right, right.left);
    }

    return dfs(root.left, root.right);
};