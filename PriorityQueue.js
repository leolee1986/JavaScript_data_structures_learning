/* Priority Queue
pseudocode:
1. Min Binary Heap - lower number means higher priority
2. Each Node has a value and a priority,. Use the priority to build the heap
3. Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off its priority
4. Dequeue method removeds root element return it, and rearrages heap using priority

  */
class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        var newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp(){
        var idx = this.values.length -1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx -1)/2);
            let parent = this.values[parentIdx];

            
            if(element.priority >= parent.priority) break;
            // check to see if the parent value and element value, swap them if needed 
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;

        }
    }

    // removing the min value of the priority queue, which is the highest priority
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;

            // bubble Down
            this.bubbleDown();
        }
        return min;
    }

    bubbleDown(){
        // start at idx 0, find children
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length){ //check to see if the index is inbound
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){ //check to see if the index is inbound
                rightChild = this.values[rightChildIdx];
                // only swap the bigger value of the two
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ){
                    swap = rightChildIdx;
                }
            }

            if(swap === null) break;
            this.values[idx]= this.values[swap]
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let queue = new PriorityQueue();
queue.enqueue("todo5", 1);
queue.enqueue("todo1", 5);
queue.enqueue("todo2", 4);
queue.enqueue("todo3", 3);
queue.enqueue("todo4", 2);

//

