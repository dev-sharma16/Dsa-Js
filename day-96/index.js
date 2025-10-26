//* Linkedlist 
// linkled list is an linear data structure.
// it stores the data in non-continous manner.
// the first node in likedlist called HEAD.

//? Single Linked list
// each node in linked list contain the value of that node and the address of the next node to the null.
// null -> node -> node -> node -> null.

//? Doubly Linked list
// each node contain the address of the next and previous node and value of that node.
// null <-> node <-> node <-> node <-> null.

//? Circular Linked list
// each node contain the address of the next and previous node and value of that node but they never reaches to the null the last node is connected to the first node.
// | <-> node <-> node <-> node <-> |
// >  node  <->  node  <-> node <-> >

//? How build node using Classes and object 
// class Node {
//     constructor(val){
//         this.val = val
//         this.next = null
//     }
// }

// let obj = new Node(16);
// console.log(obj)

//? How the a Linkedlist using node
class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Linkedlist{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertAtFirst(val){
        this.size++;
        const newNode = new Node(val)
        if(this.head === null) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtLast(val){
        this.size++;
        const newNode = new Node(val)
        if(this.head == null){
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while(temp.next != null){
            temp = temp.next;
        }
        temp.next = newNode
    }

    insertAtIndex(val, index){
        if(index > this.size || index < 0) {
            console.log("Not possible");
            return;
        }
        if(index == this.size) {
            this.insertAtFirst(val)
            return;
        }
        this.size++;
        const newNode = new Node(val)
        if(this.head == null || index == 0){
            this.head = newNode;
            return;
        }
        let temp = this.head;
        for(let i=0; i<index-1; i++){
            temp = temp.next;
        }
        let swap = temp.next;
        newNode.next = swap;
        temp.next = newNode;
    }

    deleteAtFirst(){
        if(this.head == null){
            console.log("List is empty.!");
            return;
        }
        this.size--;
        this.head = this.head.next
    }

    deleteAtLast(){
        if(this.head == null){
            console.log("List is empty.!");
            return;
        }
        this.size--;
        if(this.head.next == null){
            this.head = null;
            return;
        }
        let temp = this.head;
        while(temp.next.next != null){
            temp = temp.next;
        }
        temp.next = temp.next.next;
    }

    deleteAtIndex(index){
        if(index < 0 || index >= this.size ){
            console.log("Invalid index");
            return;
        }
        if(this.head == null ){
            console.log("List is empty.!");
            return;
        }
        this.size--;
        if(this.head.next == null){
            this.head = null;
            return;
        }
        let temp = this.head;
        for(let i=0; i<index-1; i++){
            temp = temp.next;
        }
        temp.next = temp.next.next;
    }

    printLL(){
        //? this is not a write way to traverse the linked list.
        // for(let i=0; i<=this.size; i++){
            // process.stdout.write(this.head.val+" -> ");
            // this.head = this.head.next
        // }

        // console.log("null");

        //? this is the rigth way to traverse the linked list.
        if(this.head === null){
            console.log("List is empty.!");
            return;
        }

        let temp = this.head;
        while(temp !== null){
            process.stdout.write(temp.val+ " -> ")
            temp = temp.next
        }

        console.log("null");
    }
}

let obj = new Linkedlist();
// inserting from the start of the list
obj.insertAtFirst(10);
obj.insertAtFirst(20);
obj.insertAtFirst(30);
obj.insertAtFirst(40);
obj.insertAtFirst(50);
obj.printLL();
// inserting at the end of the list
obj.insertAtLast(100);
obj.insertAtLast(200);
obj.printLL();
// deleting from the start
obj.deleteAtFirst();
obj.printLL();
// deleting from the last
obj.deleteAtLast();
obj.printLL();
// inserting at index
obj.insertAtIndex(69, 3);
obj.printLL();
// delete at index
obj.deleteAtIndex(3)
obj.printLL();
