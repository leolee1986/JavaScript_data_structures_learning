/* Queue - Use a Linked List to create own queue class
FIFO - meaning we can either add to beginning, and remove from the end (but this is slow)
or add to the end remove from the beginning (preferred), add to the end is easy and remove from beginning doesn't need to go through the whole list
*/

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value){ // add to the end
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        
        return ++this.size;
    }

    dequeue(){ // removed from the last
        if(!this.last) return null;
        var removedNode = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        
        this.size--;
        return removedNode.value;
    }
}

