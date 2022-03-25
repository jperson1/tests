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

//  Given the root of a binary tree, return the postorder traversal of its nodes' values.
var postorderTraversal = function (root) {
    var helper = function (node, sol) {
        if (node) {
            helper(node.left, sol);
            helper(node.right, sol);
            sol.push(node.val);
        }
        return;
    }

    var sol = [];
    helper(root, sol);
    return sol;
};