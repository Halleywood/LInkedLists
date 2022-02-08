//write a doubly linked list class that has a head and a tail. Both of which either point to null or another node. 
//The class should support: 
//setting the head ad tail of the linked list, 
//inserting nodes before or after other nodes as well as at given positions (the position of the head=1)
//removing given nodes and removing nodes with given values 
//searching for node by given value. 

//note that setHead, setTail, insertBefore, insertAfter, insertAtPostion, and remove all take in an actual node as a parameter, not integers! except when entering at a specific integer. This means you do not need to create any new nodes in these methods. The input nodes can be either stand-alone nodes or nodes that are already in the linked list. If theyre nodes that are aleady in the linked list, the methods will effectively be moving the nodes within the list. You wont be told if the node is already in the linked list, so your code will have to defensively handle this scenario. 

// WRITTEN IN JAVA HERE TO SEE THE INPUT PARAMETERS!!! 
// class Program {
//     static class DoublyLinkedList {
//       public Node head;
//       public Node tail;

//       public void setHead(Node node) {
//         //Write your code here.
//       }
//       public void setTail(Node node) {
//         // Write your code here.
//       }
//       public void insertBefore(Node node, Node nodeToInsert) {
//         // Write your code here.
//       }
//       public void insertAfter(Node node, Node nodeToInsert) {
//         // Write your code here.
//       }
//       public void insertAtPosition(int position, Node nodeToInsert) {
//         // Write your code here.
//       }
//       public void removeNodesWithValue(int value) {
//         // Write your code here.
//       }
//       public void remove(Node node) {
//         // Write your code here.
//       }
//       public boolean containsNodeWithValue(int value) {
//         // Write your code here.
//         return false;
//       }
//     }
//     // Do not edit the class below.
//     static class Node {
//       public int value;
//       public Node prev;
//       public Node next;

//       public Node(int value) {
//         this.value = value;
//       }
//     }
//   }
class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    setHead(node) {
        //check to see if there is a head, if not aka the list is empty, this node you are inserting will become the head and the tail!
     if(this.head===null){
         this.head = node
         this.tail = node
         return
     }
        //else, there is a head, and we will insert this new node before the head using insertBefore method. 
     this.insertBefore(this.head, node)
    }

    setTail(node) {
        //check to see if there is a tail. If no tail there is no head! So this new node will become both so direct to function above. 
        if(this.tail===null){
            this.setHead(node)
            return;
        }
        //else, there is a tail already and we need to point tail.next to this node! Call the insertAfter method!
        this.insertAfter(this.tail, node)
    }

    insertBefore(node, nodeToInsert) {
        // unsure about this part...
        if(nodeToInsert===this.head && nodeToInsert===this.tail){
            return;
        }
        this.remove(nodeToInsert)

        //assign the prev pointer to the node previous to the one you are inserting in front of 
        //assign the next pointer to the node you want to insert in front of
        nodeToInsert.prev=node.prev
        nodeToInsert.next= node
        //meaning, if this node you are inserting before is the head and is pointing to null, you make nodeToInsert the head! 
        if(node.prev === null){
            this.head = nodeToInsert
        }
        //else it is not the head, so assign the node.prev pointer which is the "next" to nodeToInsert
        else{
            node.prev.next = nodeToInsert
        }
        //unsure about this part too
        node.prev = nodeToInsert
    }

    insertAfter(node, nodeToInsert) {
        // just like inserting before but some opposites...
        if( nodeToInsert===this.head && nodeToInsert===this.tail){
            return
        }
        this.remove(nodeToInsert);
        nodeToInsert.prev = node 
        nodeToInsert.next = node.next 

        if(node.next===null){
            this.tail= nodeToInsert
        }
        else{
            node.next.prev = nodeToInsert
        }
        node.next = nodeToInsert
    }

    insertAtPosition(position, nodeToInsert) {
        // if the position is 1, which is the head, make nodeToInsert the head.
        if(position ===1){
            this.setHead(nodeToInsert)
            return
        }
        //have to start at the head...continue changing node to node.next until you reach target position
        let node = this.head;
        let currentPosition = 1;
        while (node !== null && currentPosition !== position){
            node = node.next;
            currentPosition++
        }
        //once at target position, will kick out of while loop and you will be at the node @ that position. 
        //if that node does not equal null, call on insertB4 method to insert it at this position
        if(node !== null){
            this.insertBefore(node, nodeToInsert)
        } //else, it is pointing to null so it is last, so set nodeToInsert to tail using method. 
        else{
            this.setTail(nodeToInsert)
        }
    }

    removeNodesWithValue(value) {
        // always have to start at the beginning of the list, the head
        let node = this.head
        //this is a check incase value not in list, once through list last node will == null and you will know its not there
        while( node !== null){
            //set it to a constant to make it less confusing?
            const nodeToRemove = node;
            //while node != null, keep setting node to the next node.
            node = node.next 
            //check the value at each node, it it equals the value you are looking for, send the entire node to the remove function
            if(nodeToRemove.value === value){
                this.remove(nodeToRemove)
            }
        }
    }

    remove(node) {
        // if the node to remove is the head, set the next node to be the head and the current head will fall off. Same for if its the tail!
        if (node ===this.head){
            this.head= this.head.next
        }
        if(node ===this.tail){
            this.tail= this.tail.prev
        }
        //if its somewhere in the moddile, call on the removeNodeBindings function
        this.removeNodeBingings(node)
    }

    containsNodeWithValue(value) {
        // always have to start at the head
        let node = this.head 
        //as long as you have not gone through the entire list, and you have not come across the value it will keep setting node to the next node.
        while (node !== null && node.value !== value){
            node = node.next
        }
        //once you have reached either the end and the node==null or you have reached the node with the value it will kick out of loop and you will either return the node at the target value or it was null and you will return nothing. 
        return node !== null 
    }

    removeNodeBindings(node){
        //checking to make sure node points to a prev and a next. if it does, assign the PREVIOUS NODE NEXT POINTER to the node after the one in question. So you point the previous node (node.prev.next) to the next node over. 
        if( node.prev !== null ){
            node.prev.next = node.next
        }
        //you then do this in reverse...as long as there is a next node, point its PREV POINTER and the node previous to the once in question. 
        if(node.next !== null){
            node.next.prev = node.prev 
        }
        //you then point the node in question at nothing and it is no longer linked to the list! 
        node.prev = null
        node.next = null
    }
}


console.log(list1)