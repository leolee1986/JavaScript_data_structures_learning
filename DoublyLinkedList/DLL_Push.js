/* Push - adding a node to the end of the doubly Linked List

pseudocode
1. create a new node with the value passed to the function
2. if the head property is null set the head and tail to be the newly created node
3. if not, set the next property on the tail to be that node
4. Set the previous property on the newly created node to be the tail
5. Set the tial to be the newly created node
6. increment the length
7. Return the Doubly Linked List
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
}