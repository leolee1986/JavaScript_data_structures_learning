/* Breadth First Search


*/

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        var newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }

        var current = this.root;
        while(true) {
            if(value === current.value) return undefined; // not allow duplicate value
            if(value < current.value){ // this is left side
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if(value > current.value) { // this is the right side
                if(current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }

    }

    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found) {
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return false;
        return current;
    }

    /*
      different version of find, just return true or false
      pretty much same as insert
      but instead of insert the node, return the true when found, false not found
    */
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found) {
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    BFS(){
        var data = [],
            queue = [],
            node = this.root;

        queue.push(node);
        while(queue.length){ // in javascript, empty array is truthy, 0 is falsy
            node = queue.shift() // remove 1st element from queue
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);

        }
        return data;

    }
}

// sample code to test the BinarySearchTree class
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
