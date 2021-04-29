// removing a new node from the beginning of the Linked List

/* Shifting pseudocode
1. if there is no nodes, return undefined
2. Store the current head property in a variable
3. Set the head property to be the current head's next property
4. Decrement the length by 1
5. Return the value of the node removed
*/

// piece of data -val
// reference to the next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;

    }
    push(val){
        var valNode = new Node(val);
        if(!this.head){
            this.head = valNode;
            this.tail = this.head;
        } else {
            this.tail.next = valNode;
            this.tail = valNode;
        }
        this.length++;
        // this will return the whole list
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--; // pop off one Node, length --
        // edge case when the length is 0
        if(this.length === 0 ){
            this.head = null;
            this.tail = null;
        }
        return current; // return the pop off value
    }

    shift() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;

        this.length--;
        // edge case when the length is 0
        if(this.length === 0 ){
            this.tail = null;
        }
        return currentHead;
    }
}
// var first = new Node("hi");
// first.next = new Node("there");
// first.next.next = new Node("3rd item");

var list = new SinglyLinkedList();