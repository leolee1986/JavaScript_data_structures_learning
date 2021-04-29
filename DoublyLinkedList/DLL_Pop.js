/* Pop - Removing a node from the end of the Doubly Linked List

pseudocode
1. if there is no head, return undefined
2. Store the current tail in a variable to return later
3. If the length is 1, set the head and tail to null
4. Update the tail to be the previous Node
5. Set the newTails's next to null
6. Decrement the length
7. Return the value removed
*/


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
       var newNode = new Node(val);
       if(!this.head){
           this.head = newNode;
           this.tail = newNode;
       } else {
           this.tail.next = newNode;
           newNode.prev = this.tail;
           this.tail = newNode;
       }

       this.length++;
       return this;
    }

    pop(){
        if(!this.head) return undefined;
        var removedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }

        this.length--;
        return removedNode;
    }
}