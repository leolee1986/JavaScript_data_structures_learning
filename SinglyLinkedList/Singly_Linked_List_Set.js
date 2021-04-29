/* Set - Changing the value of a node based on it's position in the Linked List

Pseudocode
1. This function should accept a value and an index
2. use your get function to find the specific node
3. if the node is not founc, set the value of that node to be the value passed to the function and return true
*/

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

    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
}
// var first = new Node("hi");
// first.next = new Node("there");
// first.next.next = new Node("3rd item");

// test the code with these starting data
var list = new SinglyLinkedList();
list.push("Hello");
list.push("Good bye");
list.push("!");