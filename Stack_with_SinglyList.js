/* Stack Javascript - could just use array push and pop instead

*/

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /*
    pseudocode for push
    1. The function should accept a value
    2. Create a new node with that value
    3. if there are no nodes in the stack, set the first and last property to be the newly created node
    4. If there is at least one node, create a variable that stores the current first property on the stack
    5. Reset the first property to be the newly created node
    6. Set the next property on the node to be the previously created variable
    7. Increment the size of the stack by 1
    */

    push(val){
        var newNode = new Node(val);
        if(!this.last){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    /*
    pseudocode for pop
    1. if the size <= 0, return false
    2. if the size = 1, set first and last to null
    3. otherwise, save the removedNode to variable, reset the connection and and return the Nodes value
    4. Decrease the size

    */    

    pop(){
        if(this.size <= 0) return null;
        var removedNode = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        } else {
            this.first = removedNode.next;
        }
        removedNode.next = null;
        this.size--;
        return removedNode.val;  
    }
}