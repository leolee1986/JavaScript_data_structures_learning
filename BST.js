/* Binary Search trees
Big O, insertion - O(log N), Searching O(log N), this best and avg cases
 but not guaranteed
 if we double the elements of the tree, it only increase the number of search by 1

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

    /* 
    1. Create a new node
    2. starting at the root
        a. check if there is a root, if not - root is the new node
        b. if there is a root, check the value of the new node, is < or >
        c. if greater - check to see if there is a node to right
            if yes, move to that node and repeat these steps
            if no, add that node as the right property
        d. if less, 
            check to see if there is node on the left
            yes, move to that node repeat
            no, add that node as the left property
        
    */
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

    /*
      pretty much same as insert
      but instead of insert the node, return the node when found, false not found
    */
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
}

// sample code to test the BinarySearchTree class
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(7);
