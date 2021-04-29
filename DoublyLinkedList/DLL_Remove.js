/* Remove - Removing a node in a Doubly Linked List by a certain position
pseudocode
1.if the index is < 0 or >= to the length, return undefined
2.if index = 0, shift
3.if index = (length-1), pop
4.use get method to retrieve the item to be removed
5.update the next and prev properties to remove the found node from the list
6.set next and prev to null on the found node
7.decrement the length
8.Return the removed node

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

    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index <0 || index >= this.length) return null;
        var count, current;

        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }            
        }
        return current;
    }

    set(index, value){
        var foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = value;
            return true;
        }
        return false;
    }

    insert(index, value){
        if(index <0 || index >= this.length) return false;
        if(index === 0) return !!this.unshift(value); // !! will turn the return value into boolean
        if(index === this.length) return !!this.push(value);

        var newNode = new Node(value);
        var prevNode = this.get(index - 1);
        var afterNode = this.get(index);
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        
        this.length++;
        return true;
    }

    remove(index){
        if(index <0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();

        var removedNode = this.get(index);
        var prevNode = removedNode.prev;
        var afterNode = removedNode.next;
        prevNode.next = afterNode;
        afterNode.prev = prevNode;
        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return removedNode;
    }
}

// code below used for testing
var list = new DoublyLinkedList();
list.push("one");
list.push("two");
list.push("three");
