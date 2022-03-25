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

// Given the head of a singly linked list, return true if it is a palindrome.
var isPalindrome = function (head) {
    var arr = [];
    while (head){
        arr.push(head.val);
        head = head.next;
    }
    console.log(arr);
    return arr.join('') == arr.reverse().join('');
};