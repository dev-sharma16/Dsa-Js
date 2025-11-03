//* Queue and Stack

//* Queue : 
// its an first in last out data structure (LIFO).
// Front : pointer at start of the queue (head of the linked list).
// Rear : pointer at end of the queue.
//? opertaion
// Enque : add element (insert at last function in linked list)
// Deque : remove element (delete at first function in linked list)

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
//* Queue as an Linked list
// class Queue {
//     constructor() {
//         this.front = null;
//     }

//     enqueue(val){
//         let newEle = new Node(val);
//         if(this.front == null){
//             this.front = newEle;
//             return;
//         }
//         let temp = this.front
//         while(temp.next != null){
//             temp = temp.next;
//         }
//         temp.next = newEle;
//     }

//     dequeue(){
//         if(this.front == null){
//             console.log("Queue is Empty.!");
//             return;
//         }
//         this.front = this.front.next;
//     }

//     printQueue(){
//         if(this.front == null){
//             console.log("Queue is empty.!");
//             return;
//         }
//         let temp = this.front;
//         while(temp != null){
//             process.stdout.write(`${temp.val} `);
//             temp = temp.next;
//         }
//         console.log(" ");
//     }
// }

// let obj = new Queue();
// obj.enqueue(10);
// obj.enqueue(20);
// obj.enqueue(30);
// obj.enqueue(40);
// obj.printQueue();
// obj.dequeue();
// obj.printQueue();

//* Queue as an Array
class Queue{
    constructor(){
        this.q = [];
    }
    offer(val){
        this.q.push(val)
    }
    poll(){
        if(this.q.length == 0){
            console.log("Queue is Empty.!");
            return;
        }
        this.q.shift();
    }
    printQueue(){
        if(this.q.length == null){
            console.log("Queue is empty.!");
            return;
        }
        
        for(let i=0; i<this.q.length; i++){
            process.stdout.write(`${this.q[i]} `);
        }
        console.log(" ");
    }
}

let obj = new Queue();
obj.offer(10);
obj.offer(20);
obj.offer(30);
obj.offer(40);
// obj.printQueue();
console.log(obj.q);
obj.poll();
// obj.printQueue();
console.log(obj.q);


//? Leetcode : 225. Implement Stack using Queues

var MyStack = function() {
    this.q = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.q.pop()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.q[this.q.length-1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q.length == 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

//* Stack :
// its an first in first out data structure (FIFO).

