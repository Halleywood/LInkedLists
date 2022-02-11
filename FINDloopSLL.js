//write a function that takes in the head of a SLL that contains a loop (in other words, the list's tail  node point somwhere in the list not to null). The function should return the node( not just its value) from which the loop originates in constant space. 

//try using two pointers to traverse through the list, one going every node and one going every other. Eventually they will land on same one since it is a loop. Keep a counter so you can find the origin of the list. 

//can you come up with a mathematical solution, how far has one pointer traveled by the time it overlaps the pointer going to every node? Can this solution be faster than a counter?

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  //classic function to find out if there is a loop in the code, wont tell you where it is but if it exists. 
  function isLoop(head){
    if (!head){
      //if no head, this list is empty. Therefore no loop could exist. 
      return false; 
    }
    let fast = head.next; 
    let slow = head;
    //set fast to next and slow to head otherwise they would be equal at the beginning and trigger this IF check. 
    //Why does it matter is slow.next does not equal null if fast will get there first??? 
    while ( fast != null && fast.next != null && slow.next != null){
      if(fast == slow){
        return true 
      }
      //one will go twice as fast as the other and if there is a loop eventually they will overlap and land on the same node and trigger the IF check. 
      fast = fast.next.next 
      slow = slow.next
    }
    //if there is no loop, eventually will come to the end of the list and will equal null. Therefore there is no loop so return false
    return false;
  }
  
  //if there is a loop, will tell you where it exists. There is the head/start of the list and there is the origin of the loop where the list continuously goes around but not always a perfect circle, could be like a number six! 
  //could create hashtable, and add each node to the hashtable. Once you get to a node that is already in the hashtable you know its origin of the loop. 
  function findLoopOrigin(head) {
    if(head===null){
      return head; //return 0 or something that signifies there is an empty list. 
    }

    let node=head
    let nodeHash={}
    //while node.value not in hashtable, keep adding node to hash and setting node to node.next. 
    while(!nodeHash[node.value]){
        nodeHash[node.value] = 1 //could set to anything! 
        node=node.next
    }
      //will kick out of the loop when node.value found in hash, returns it as origin.  
    return node

  }
  //!---OR YOU COULD HAVE TWO POINTERS AND THEN MAKE MATHEMATICAL EQUATION WHERE YOU KEEP TRACK OF HOW FAR TWO POINTERS HAVE TRAVELLED:

  function findLoopOrigin(head) {
    //if you set the two pointers to travel at different speeds, if there is a loop eventually they will overlap (if set at same speed would always just go around and around if there was a loop)
    let tortoise = head.next
    let hare=head.next.next
    //do not set them to head or will not enter initial while loop. Set them to .next and .next.next...
    while(tortoise != hare){
      tortoise=tortoise.next
      hare = hare.next.next
    }
    //will kick out of the WHILE loop once they have landed on the same node. THIS IS ASSUMING YOU KNOW THERE IS A LOOP, OTHERWISE YOU WOULD WANT TO MAKE SURE NEITHER VALUE EVER EQUALS NULL. 
    //once you land on same node, you know the distance D to origin and distance R to origin are the same***. So you leave tortoise "R" distance away from the origin and move hare back to the beginning @ head which is "D" distance from origin. You then increment them at the same rate and when they are at the same node they will be at the origin of the loop! 
    hare = head
    while(tortoise !=hare){
      //moving them at same speed now
      tortoise=tortoise.next
      hare=hare.next
    }
    //once they are at the same node will kick out of WHILE loop and you can return one that will be equal to the origin node. 
    return tortoise
  }

  //***mathematical explanation of why D and P are both same distance from origin: 
/* 0-->1-->2-->4-->5-->6
              ^        v
              9<--8<--7
*/
/* Our first pointer has traveled "x", and for every one node tortoise moved, hare moved TWO nodes. So distance moved by H is "2x".
we can then say distance bewteen start of list and origin ="d" (node 0 to 4!), and distance from origin and where two pointers overlap is "p"(4 to node 7). so therefore T has traveled d+p and H has traveled 2d+2p (because it has traveled twice as much)
T=> x = d+p
H=> 2x =2d+2p
we then need to calculate remaining distance from where two pointers overlap to the remaining loop that will end at origin (node 7 to node 4) we will call "r". so if the entire loop is equal to d+p+r then 
loop = d+p+r
r=loop-d-p

**Ok....you know that the fast pointer has traveled the entire list/loop plus an extra p. (DRAW THIS OUT IF YOU DONT UNDERSTAND)
so we not know that total distance traveled by hare is 2d+2p...and that distance is also equal to d+p+r(line 87) and an additional p.
then we can substract a p from distance hare has traveled to find equation for entire list/loop. 
(from line 85, hare=2d+2p)
2d+2p -p...therefore distance of entire loop = 2d+p
so if we want to find "r" we plug what loop is into equation on line 88. r=loop-d-p...r=(2d+p) -d -p... r = d!!!


*/