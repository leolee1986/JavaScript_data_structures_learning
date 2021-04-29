/* Shift - Removing a node from the beginning of the Doubly Linked List

pseudocode
1. if length is 0, return undefined
2. Store the current head property in a variable
3. if the length is 1, set the head and tail to be null
4. Update the head to be the next of the old head
5. Set the head's prev property to null
6. Set the old head's next to null
7. Decrement the length
8. Return old head
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

    shift(){
        if(!this.head) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
}