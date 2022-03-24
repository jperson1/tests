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

//  Given the root of a binary tree, return the preorder traversal of its nodes' values.
var preorderTraversal = function (root) {
    var print = function (node, sol) {
        if (node) {
            sol.push(node.val);
            print(node.left, sol);
            print(node.right, sol);
        }
        return;
    }

    var sol = [];
    print(root, sol);
    return sol;
};