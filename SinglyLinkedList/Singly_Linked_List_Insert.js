/* Insert - Adding a node to the Linked List at a specific position

Pseudocode
1. If the index is less than zero or greater than the length, return false
2. if the index is the same as the length,push a new node to the end of the list
3. if the index is 0, unshift a new node to the start of the list
4. Otherwise, using the get meothd, access the node at the (index -1), the node before the index we want to insert
5. Set the next property on that node to the new node
6. Increment the length and return true

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

    insert(index, val){
        // edge cases, 3 if
        if(index < 0 || index > this.length) return false;
        if(index === this.length){
            this.push(val);
            return true;
        }
        if(index === 0){
            this.unshift(val);
            return true;
        }

        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next; // if we set prev.next to newNode, the old one will be lost
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
}
// var first = new Node("hi");
// first.next = new Node("there");
// first.next.next = new Node("3rd item");

// test the code with these starting data
var list = new SinglyLinkedList();
list.push(100);
list.push(200);
list.push(300);
list.push(400);