//* Binary Tree

//? Leetcode : 543. Diameter of Binary Tree
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
var diameterOfBinaryTree = function (root) {
  let total = 0;

  var solve = function (root) {
    if (root == null) return 0;
    let left = solve(root.left);
    let right = solve(root.right);
    total = Math.max(total, left + right);

    return Math.max(left, right) + 1;
  };

  solve(root);
  return total;
};

//? Gfg : Left View of Binary Tree
//* DFS approach :
/**
 * @param {Node} root
 * @returns {number[]}
 */

/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
// DFS Approach
class Solution {
  leftView(root) {
    let ans = [];
    this.solve(root, 0, ans);
    return ans;
  }
  solve(root, lvl, ans) {
    if (root == null) return;
    if (lvl == ans.length) ans.push(root.data);
    this.solve(root.left, lvl + 1, ans);
    this.solve(root.right, lvl + 1, ans);
  }
}
//* BSF approach :
/**
 * @param {Node} root
 * @returns {number[]}
 */

/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
// BFS Approach
class Solution {
  leftView(root) {
    let ans = [];
    if (root == null) return ans;
    let q = [];
    q.push(root);

    while (q.length != 0) {
      let size = q.length;

      for (let i = 0; i < size; i++) {
        let temp = q.shift();
        if (i == 0) ans.push(temp.data);

        if (temp.left != null) q.push(temp.left);
        if (temp.right != null) q.push(temp.right);
      }
    }

    return ans;
  }
}

//? Gfg : Right view of Binary Tree ( assignment )
//* DFS Approach :
/**
 * @param {Node} root
 * @returns {number[]}
 */

/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
class Solution {
  rightView(root) {
    let ans = [];
    this.solve(root, 0, ans);
    return ans;
  }
  solve(root, lvl, ans) {
    if (root == null) return;
    if (lvl == ans.length) ans.push(root.data);
    this.solve(root.right, lvl + 1, ans);
    this.solve(root.left, lvl + 1, ans);
  }
}
//* BFS Approach :
/**
 * @param {Node} root
 * @returns {number[]}
 */

/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
class Solution {
  rightView(root) {
    let ans = [];
    if (root == null) return ans;
    let q = [];
    q.push(root);

    while (q.length != 0) {
      let size = q.length;
      for (let i = 0; i < size; i++) {
        let temp = q.shift();
        if (i == size - 1) ans.push(temp.data);

        if (temp.left != null) q.push(temp.left);
        if (temp.right != null) q.push(temp.right);
      }
    }

    return ans;
  }
}

//? Gfg : Top View of Binary Tree
/**
 * @param {Node} root
 * @returns {number[]}
 */

/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
class Distance {
  constructor(node, val) {
    this.node = node;
    this.hd = val;
  }
}
class Solution {
  topView(root) {
    let ans = [];
    if (root == null) return ans;
    let tempNode = new Distance(root, 0);
    let q = [];
    q.push(tempNode);
    let map = new Map();

    while (q.length != 0) {
      let size = q.length;
      for (let i = 0; i < size; i++) {
        let temp = q.shift();
        if (!map.has(temp.hd)) {
          map.set(temp.hd, temp.node.data);
        }

        if (temp.node.left != null) {
          let tempLeft = new Distance(temp.node.left, temp.hd - 1);
          q.push(tempLeft);
        }

        if (temp.node.right != null) {
          let tempRight = new Distance(temp.node.right, temp.hd + 1);
          q.push(tempRight);
        }
      }
    }

    const sortedKeys = [...map.keys()].sort((a, b) => a - b);
    for (let key of sortedKeys) {
      ans.push(map.get(key));
    }

    return ans;
  }
}

//? Gfg : Bottom View of Binary Tree ( only difference between top and bottom is updating the values of the key if they exists or not )
/**
 * @param {Node} root
 * @returns {number[]}
 */

/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
class Distance {
  constructor(node, val) {
    this.node = node;
    this.hd = val;
  }
}
class Solution {
  bottomView(root) {
    let ans = [];
    if (root == null) return ans;
    let tempNode = new Distance(root, 0);
    let q = [];
    q.push(tempNode);
    let map = new Map();

    while (q.length != 0) {
      let size = q.length;
      for (let i = 0; i < size; i++) {
        let temp = q.shift();
        map.set(temp.hd, temp.node.data);

        if (temp.node.left != null) {
          let tempLeft = new Distance(temp.node.left, temp.hd - 1);
          q.push(tempLeft);
        }

        if (temp.node.right != null) {
          let tempRight = new Distance(temp.node.right, temp.hd + 1);
          q.push(tempRight);
        }
      }
    }

    let sortedKeys = [...map.keys()].sort((a, b) => a - b);
    for (let key of sortedKeys) {
      ans.push(map.get(key));
    }

    return ans;
  }
}
