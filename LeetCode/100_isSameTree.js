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

//  Given the roots of two binary trees p and q, write a function to check if they are the same or not.
//  Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
var isSameTree = function (p, q) {
    var helper = function (p, q) {
        //  p/q both null
        if (!p && !q) { return true; }
        //  one is not null
        if (!p || !q) { return false; }
        //  values are not the same
        if (p.val != q.val) { return false; }

        //  Check the children
        return helper(p.left, q.left) && helper(p.right, q.right);
    }

    return helper(p, q);
};