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

// Given two sorted linked lists, merge them into one sorted list. Retern the head of the sorted list.
var mergeTwoLists = function (list1, list2) {
    let head = list1, temp1 = list1, temp2 = list1;

    if (!list1) {
        return list2;
    } else if (!list2) {
        return list1;
    }

    if (list1.data > list2.data) {
        temp2 = list2.next;
        list2.next = list1;
        list1.next = temp2;
        head = list2;
        
    }

    while (list1 && list2) {
        if (list1.data > list2.data) {
            list1 = list1.next;
        } else {
            temp1 = list1.next;
            temp2 = list2.next;
            list1.next = list2;
            list2.next = temp1;
            list2 = temp2;
            list1 = temp1;
        }
    }

    return head;
};

