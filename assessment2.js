//inverted bisection: write a function that takes in the head of a SLL, inverts its bisection in place (doesnt create a new list) and returns its new head...Inverting a SLL bisection means inverting the order of the nodes in the lists two halves. 
//sample input = head= 0->1->2->3->4->5
//sample output = head=2->1->0->5->4->3

//if it is even number, both halves flipped....if it odd number, bisection STAYS and both halves flip around it. 

//sample input = head=0->1->2->3->4->5->6
//sample output= head=2->1->0->3->6->5->4

// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function invertedBisection(head) {
    // will need pointer that goes all the way through to get count.
    //set bisection to half of count 
    //while b!==bisection...reverse the list. 
    //once out of the while loop, begin incrementing bisection until it equals last pointer or null and reverse next 
    //edge case...what to do if its odd or even. 
    let counter = 0
    let length = head 
    while(length !== null){
        length=length.next
        counter++
        // console.log(counter)
    }
  	const bisector = Math.floor(counter/2)

    let prev = null 
    let current = head 
    let runner = current.next 

    while(current !== bisector){
        runner = current.next
        current.next = prev 
        prev = current 
        current = runner 
    }

    head = prev
  }
  

  /*solution:*/

  function invertedBisection(head){
      //need to know the length of the list in order to find the half
      const length = getLinkedList(head);
      //you need three pointers to reverse a list, so if it is not more than than cannot reverse? 
      if(length <= 3){
          return head;
      }
      //helper function to find out middle of list now that we have the length
      const firstHalfTail = getMiddleNode(head, length);
      //middle node if the list is odd length
      let middleNode = null;
      //second half of list 
      let secondHalfHead = null; 
      //if list is even, we know the middle node that will be part of first list so we want the one after it 
      //this is where the second half of list starts. 
      if(length % 2 === 0){
          secondHalfHead = firstHalfTail.next
      }
      //if the list is odd, we find the end of the list and the following node is the middle node that will be left alone and the .next.next will start the second list. 
      else{
          middleNode = firstHalfTail.next
          secondHalfHead = firstHalfTail.next.next
      }

      firstHalfTail.next = null;
      //reverses first half of list 
      reverseLinkedList(head)
      //now that we know where second half list starts, we reverse it starting there. 
      const reversedSecondHalfHead = reverseLinkedList(secondHalfHead)

      if(middleNode ===null){
          head.next = reversedSecondHalfHead;
      }
      else{
          head.next = middleNode;
          middleNode.next = reversedSecondHalfHead; 
      }
      return firstHalfTail;
  }

  function getLinkedListLength(head){
      //you had this part in your solution. set current node to .next and increment to get length 
      let length = 0;
      let currentNode = head; 
      while(currentNode !== null){
          currentNode=currentNode.next;
          length++
      }
      return length;
  }

  function getMiddleNode(length, head){
      const halfLength = Math.floor(length / 2)
      let currentPosition = 1; 
      let currentNode = head; 
      while(currentPosition !== halfLength){
          currentNode = currentNode.next; 
          currentPosition++;
      }
      //this will return the node that is halfway through the list! 
      return currentNode;
  }

  function reverseLinkedList(head){
      //you were on the right track here with prev/current/runner...point previousNode to null, currentNode to head
      //as you move down the list, you point nextNode to current.next before reversing pointer so you dont lose it. Once you have nextNode pointing at current.next, you reverse pointer to point at previousNode. You then move previousNode value down the list by setting it as current node, and setting current node as the next node. 
      let previousNode = null;
      let currentNode = head; 
      while(currentNode !== null){
          const nextNode = currentNode.next; 
          currentNode.next = previousNode; 
          previousNode = currentNode; 
          currentNode = nextNode; 
      }
      return previousNode;
  }