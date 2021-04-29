/* Reverse - Reversing the Linked List in place

pseudocode
1. Swap the head and tail
2. Create a var called next
3. Create a var called prev
4. Create a var called node and initialize it to the head property
5. loop through the list
6. Set next to be the next property on whatever node is
7. Set the next property on the node to be whatever prev is
8. Set prev to be the value of the node variable
9. Set the node variable to be the value of the next aviable

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

    remove(index){
        //edge cases
        if(index <0 || index >= this.length) return undefined;
        if(index === this.length-1) return this.pop();
        if(index === 0) return this.shift();

        var previousNode = this.get(index-1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        
        this.length--;
        return removed;
    }

    print(){ // use to help virtualize reverse, make sure everything is correct
        var arr = [];
        var current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;

        var prev = null;
        var next;    
        for(var i =0; i< this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
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