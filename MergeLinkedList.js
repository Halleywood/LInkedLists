/* write a function that takes in the heads of TWO SLL that are in sorted order. The function should merge the lists in place (there should be no new list created) and return the head of the merged list which should be in sorted order. You can assume the list will never be empty.
*/
/*sample input: 
headOne = 2->6->7->8
headTwo = 1->3->4->5->9->10

sample output:
1->2->3->4->5->6->7->8->9->10
*/

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  //O(n+m) Time where n is length of one, is is length of second. Only iterating through each list once. O(1) Space, yes there are variables but not making new data structure. 
  function mergeLinkedLists(headOne, headTwo) {
    // should have pointer going down each list. 
    //if one.value>two.value then one.next points at two.value or vica versa? 
    let p1=headOne
    let p2=headTwo
    let prev=null
    //as long as these are note null, we have not traversed through the list
    while(p1 !== null && p2 !== null){
        //if the value at p1 is smaller, we dont need to do anything to p2 yet. 
        if(p1.value < p2.value){
            //set prev to p1 and p1 to p1.next 
            prev=p1
            p1 = p1.next
        }
        else{
            //if p2 is the smaller value, we need to rearrange more things. 
            //edge case for when you are at the head! if prev at beginning and equal to null, prev.next does not exist. 
            if(prev !== null){
                prev.next = p2 
            }
            //if at the head, must set prev to equal p2 and not the next! 
            prev = p2
            //must assign the next value before assigning p1! 
            prev.next = p1 

        }
    }
    //if you have run out of list 1, but still have nodes to traverse in P2
    if(p1 === null){
        prev.next = p2
    }
    //how to return the new correct head. 
    if(headOne < headTwo){
        return headOne
    }
    else{
        return headTwo
    }
  }