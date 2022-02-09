//youre given two linked lists of potentially unequal length. Each linked list represents a non-negtive integer, where each node in the Linked List is a digit of that integer, and the first node of each linkedlist always represents the least signifigant digit. 
//Write a function that returns the head of a NEW linked list that represents the sum of the integers represented by the two input linked lists. 

//Each linked List node has an integer value as well as a next node. The value of each node will always be between 0-9. 
//Your function must create and return a new linked list and you cannot modify either input lists. 

//example: linked1= 2->4->7->1, linked2= 9->4->5...linked1 represents 1742! and linked2 represents 549! So adding those together= 2291!
//sample output: 1->9->2->2

// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    //create variable for head of new linkedList we will create at the end! Can set it to anything, for easy it is just set to "0" . Then remove it at the end. 
    let newNode = LinkedList(0)
    //will keep track of the nodes we create after the head in our new linked list. 
    let currentNode= newNode 
    //will go through both lists simultaneously, adding the values together and CARRYING OVER anything greater than 9 to the next list poisiton just like when you add you carry the one to the tenth place and then carry that to the hundreths place....
    let carryOver =0 
    //we will then place this added value into our new list, increment the node and anything carried over will be added to the next list position. 
    let nodeOne = linkedListOne
    let nodeTwo = linkedListTwo
    //lists might not be the same length, so two OR conditions. Also might have a carry over on the last digit so you will need to create a new node for any carry over even if the lists have been traversed! 
    while(nodeOne !== null || nodeTwo !== null || carry !== 0){
        //make sure there is a node to add, if not a node need to just add a zero and not a null!
        if(nodeOne !== null){
            let valueOne = nodeOne.value
        }
        else{
            valueOne = 0
        }
        //checking both lists simultaneously. 
        if(nodeTwo !== null){
            let valueTwo = nodeTwo.value
        }
        else{
            valueTwo = 0
        }
        //now add the values together and add value to new linked list! 
        let sumOfValues = valueOne + valueTwo + carry 
        //to make sure its 0-9. 
        let newValue = sumOfValues % 10
        //add to the created LinkedList
        newNode = LinkedList(newValue)
        //point the currentNode to this newNode to link them
        currentNode.next = newNode
        //set currentNode to the latest node created 
        currentNode= newNode 
        carry = Math.floor(sumOfValues/10)
        if(nodeOne !== null){
            nodeOne = nodeOne.next
        }
        else{
            nodeOne = 0
        }
        if(nodeTwo !== null){
            nodeTwo = nodeTwo.next
        }
        else{
            nodeTwo = 0
        }
    }
    //do not want to return dummy node, just the one after it and those we linked to it! 
    return newNode.next;
}
linkedListOne={
    "head": "2",
    "nodes": [
      {"id": "2", "next": "4", "value": 2},
      {"id": "4", "next": "7", "value": 4},
      {"id": "7", "next": "1", "value": 7},
      {"id": "1", "next": null, "value": 1}
    ]
  }

  linkedListTwo={
    "head": "9",
    "nodes": [
      {"id": "9", "next": "4", "value": 9},
      {"id": "4", "next": "5", "value": 4},
      {"id": "5", "next": null, "value": 5}
    ]
  }

  sumOfLinkedLists(linkedListOne, linkedListTwo);