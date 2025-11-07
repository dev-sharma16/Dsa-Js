//* Binary Tree

//* BFS ( Breath First Search )
//? Leetcode : 102. Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let ans = [];
  if (root == null) return ans;
  let q = [];
  q.push(root);

  while (q.length != 0) {
    let size = q.length;
    let curr = [];
    for (let i = 0; i < size; i++) {
      let node = q.shift();
      curr.push(node.val);

      if (node.left != null) q.push(node.left);
      if (node.right != null) q.push(node.right);
    }
    ans.push(curr);
  }

  return ans;
};

//* DFS ( Depth First Search )
//? Leetcode : 101. Symmetric Tree ( approach in video )
var isSymmetric = function(root) {
    if (!root) return true; 
    return solve(root.left, root.right);
};

var solve = function(left, right){
    if (left == null && right == null) return true;
    if ((left == null && right != null) || (left != null && right == null)) return false;

    if (left.val == right.val) {
        let l = solve(left.left, right.right);
        let r = solve(left.right, right.left);
        return l && r;
    }

    return false;
};


//? Leetcode : 112. Path Sum
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    return solve(root, targetSum);
};

var solve = function(root , target){
    if(root == null) return false;
    if(root.left == null && root.right == null && root.val == target) return true;

    let left = solve(root.left, target - root.val);
    let right = solve(root.right, target - root.val);

    if(left || right) return true; 
    else return false;
}


//? Leetcode : 226. Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root == null) return null;
    solve(root);
    return root;
};

var solve = function(root){
    if(root == null) return;
    solve(root.left);
    solve(root.right);
    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;
}

//? Leetcode : 100. Same Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    return solve(p, q);
};

var solve = function(p, q){
    if(p == null && q == null) return true;
    if((p == null && q != null) || (p != null && q == null)) return false;
    if(p.val == q.val){
        let left = solve(p.left, q.left)
        let right = solve(p.right, q.right)

        return left && right;
    }
    return false;
}

