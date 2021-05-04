/* MaxBinary Heap  */

class MaxBinaryHeap {
    constructor(){
        // this.values = [];

        // this code is for testing the heap, normally use the line above
        this.values = [41,39,33,18,27,12];

    }

    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp(){
        var idx = this.values.length -1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx -1)/2);
            let parent = this.values[parentIdx];

            
            if(element <= parent) break;
            // check to see if the parent value and element value, swap them if needed 
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;

        }
    }

    // removing the max value of the heap
    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;

            // bubble Down
            this.bubbleDown();
        }
        return max;
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
                if(leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){ //check to see if the index is inbound
                rightChild = this.values[rightChildIdx];
                // only swap the bigger value of the two
                if(
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
heap.insert(55);

//

