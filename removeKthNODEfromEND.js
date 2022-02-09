//write a function that takes in the head of a SLL and an integer, k. and removes the Kth node from the END of the list. The removal should be done in place, no new data structure should be created. 
//The input head of the list should remain the head of the list after the removal is complete, even if the head is the node to be removed. In otherwords, if the head is the node to be removed, your function should simply mutate its value and next pointer. 
//This function doesnt need to return anything, assume lists given always have at least two nodes and at least k nodes. 
//sample output: head=0->1->2->3->4->5->6->7->8->9
// k =4
// result: 0->1->2->3->4->5->7->8->9

// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//! O(N) time because you have to traverse through length of N no matter what. (o)N Space, not creating any new data structures. 

function removeKthNodeFromEnd(head, k) {
    //can only traverse a list via the head, can only traverse forwards... 
    //TRAVERSE THE LIST WITH TWO POINTERS! "first and second"
    let first=head
    let second=head
    let counter=1 
    //have first pointer traverse k amount of nodes in front. 
    //then both pointers increment simultaneously until first pointer points to null. 
    while(counter <=k){
        first= first.next 
        counter++
    }
    //now first pointer is K values away from second pointer, and you want to now move them down the list simultaneously until first pointer=null. 
    //first want to check if first pointer pointing at null without having to move anything! 
    if(first === null){
        //then second is still @ head!!! 
        //set current head value to the next nodes value, set the head pointing at next to point two nodes down which is .next.next! 
        head.value = head.next.value
        head.next= head.next.next 
        //you are done, exit the function 
        return 
    }
    while(first.next !== null){
        //while you traverse through the list, increment first and second pointer by setting them to equal pointer.next! 
        first=first.next
        second=second.next 
    }
    //when this condition breaks and first.next is pointing to null, then the SECOND POINTER IS AT THE NODE PRIOR TO THE ONE WE WANT TO REMOVE. **READ AGAIN** The Second Pointer Is At The Node Prior To The Node We Want To Remove!!! 

    //so since it is at the node pointing to the one we want to remove, (second.next points to the node we want to remove) we simply point it at the NEXT node over. .next.next! 
    second.next = second.next.next 

}


    const k = 4
    const linkedList = {
      "head": "0",
      "nodes": [
        {"id": "0", "next": "1", "value": 0},
        {"id": "1", "next": "2", "value": 1},
        {"id": "2", "next": "3", "value": 2},
        {"id": "3", "next": "4", "value": 3},
        {"id": "4", "next": "5", "value": 4},
        {"id": "5", "next": "6", "value": 5},
        {"id": "6", "next": "7", "value": 6},
        {"id": "7", "next": "8", "value": 7},
        {"id": "8", "next": "9", "value": 8},
        {"id": "9", "next": null, "value": 9}
      ]
    }
  
console.log(linkedList)
removeKthNodeFromEnd(linkedList, 4)