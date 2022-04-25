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

//  Given the head of a singly linked list, return the middle node of the linked list.

//  If there are two middle nodes, return the second middle node.
 
 const middleNode = head => {
    // get the length of the linked list
    let length = 0;
    current = head;
    while (current != null) {
        length++;
        current = current.next;
    }
    current = head;
    // Math.floor for single middle nodes
    let mid = Math.floor(length / 2);
    for (let i = 0; i < mid; i++) {
        current = current.next;
    }
    return current;
};