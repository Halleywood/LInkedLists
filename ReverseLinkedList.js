//Write a function that takes in the head of a singly linked list, reverses the list in place (doesnt create a new list) and returns its new head. You can assume that the head will never be null. 

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
/* sample input: head = 0-->1-->2-->3-->4
sample output: head=4-->3-->2-->1-->0
*/

//O(N) Time, where N is length of list because you will go through the list once. O(1) Space, constance space. 

function reverseLinkedList(head) {
    //start with b on head and a set to null because this will be the new tail needs old head to point at null
    let a = null
    let b = head
    let c = b.next
    //because b and c will frequently be on the same value, can just have while loop set with b !==null. 
    while (b !== null) {
        //before reversing pointer, need to have something connect the list so set c to b.next
        c = b.next
        //then set b.next to node behind, so b.next points to a
        b.next = a
        //we then move pointer a to b and move pointer b to the c we sent out ahead before reversing link. now b and c sit on same node until we enter the while loop again and move c forward to hold our place in the linked list. 
        a = b
        b = c
    }
    //once out of the loop because b has moved forward to null position, a is sitting on last node. So we point head to a and return a as the head! 
    head = a
    return a
}
